import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import ServerApi, { EstateDataDto, RecordData } from '../../../assets/js/service';

const EChart = React.lazy(() => {
    return import(/* webpackChunkName: 'StockChart' */ './EChartGenerator');
});

interface Props {
    api: string; // where data from
    extractMethod?: (value: string) => number;
    children?: React.ReactNode;
}

export const Chart = (props: Props) => {
    const { api, children, extractMethod } = props;
    const [records, setRecords] = useState<RecordData[]>([]);
    const [chartData, setChartData] = useState<AxisData[]>([]);

    useEffect(() => {
        const fetchData = () =>
            ServerApi.getListData<EstateDataDto[]>(api).then((res) => {
                const records = res.data.map((item) => item.record);
                setRecords(records);
            });
        fetchData();
        const interval = setInterval(fetchData, 1000 * 60 * 60);
        return () => clearInterval(interval);
    }, [api]);

    /*
     * transform to axis data
     */
    useEffect(() => {
        if (!records.length) {
            return;
        }
        const data = chartDataGenerator(records, extractMethod);
        if (data) {
            setChartData(data);
        }
    }, [records, extractMethod]);

    return (
        <StyledCharts>
            <React.Suspense fallback={<div>Loading...</div>}>
                {children}
                {chartData.map((item, index) => (
                    <EChart data={item} key={index} />
                ))}
            </React.Suspense>
        </StyledCharts>
    );
};

const StyledCharts = styled.div`
    .chart-item {
        padding: 30px;
    }
`;

// Array format needs in the end
interface AxisData {
    name: string;
    xValue: string[];
    yValue: number[];
}

const chartDataGenerator = (records: RecordData[], extractValue?: (value: string) => number): AxisData[] => {
    let axisDataList: AxisData[] = Object.keys(records[0]).map((item) => ({
        name: item,
        xValue: [],
        yValue: [],
    }));

    // default: looking for first numbers in string,
    // if method was in the props, use it
    const extractValueDefault = (value: string) => {
        return parseInt(value.match(/(\d)+/g)![0], 10);
    };

    axisDataList.forEach((data) => {
        records.forEach((item) => {
            if (!Object.keys(item).length) {
                return;
            }
            const { value, timestamp } = item[data.name]; // get specific data from resource name
            data.xValue.push(format(parseInt(timestamp, 10), 'HH@dd/MM/yyyy'));
            data.yValue.push(extractValue ? extractValue(value) : extractValueDefault(value));
        });
    });
    return axisDataList;
};
