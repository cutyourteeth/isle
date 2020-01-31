import ReactEcharts from 'echarts-for-react';
import React, { useEffect, useState } from 'react';
import ServerApi, { EstateDataDto, RecordData } from '../../../assets/js/service';
import { axisGenerator, chartDataGenerator } from './axisDataGenerator';

interface Props {
    api: string; // where data from
    children?: React.ReactNode;
}

export const Chart = (props: Props) => {
    const { api, children } = props;
    const [records, setRecords] = useState<RecordData[]>([]);
    const [graphData, setGraphData] = useState<any[]>([]);

    useEffect(() => {
        const fetchData = () =>
            ServerApi.getListData<EstateDataDto[]>(api).then(res => {
                const records = res.data.map(item => item.record);
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
        const data = chartDataGenerator(records);
        console.log('last transfer data', data);
        if (data) {
            const axis = data.map(d => axisGenerator(d));
            setGraphData(axis);
        }
    }, [records]);

    return (
        <>
            {children}
            {graphData.map((item, index) => (
                <ReactEcharts option={item} key={index} />
            ))}
        </>
    );
};
