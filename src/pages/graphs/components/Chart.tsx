import React, { useEffect, useState } from 'react';
import ServerApi, { EstateDataDto, RecordData } from '../../../assets/js/service';
import { axisGenerator, chartDataGenerator } from './axisDataGenerator';

const ReactEcharts = React.lazy(() => import(/* webpackChunkName: 'StockChart' */ 'echarts-for-react'));

interface Props {
    api: string; // where data from
    extractMethod?: (value: string) => number;
    children?: React.ReactNode;
}

export const Chart = (props: Props) => {
    const { api, children, extractMethod } = props;
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
        const data = chartDataGenerator(records, extractMethod);
        if (data) {
            const axis = data.map(d => axisGenerator(d));
            setGraphData(axis);
        }
    }, [records, extractMethod]);

    return (
        <React.Suspense fallback={<div>Loading...</div>}>
            {children}
            {graphData.map((item, index) => (
                <ReactEcharts option={item} key={index} />
            ))}
        </React.Suspense>
    );
};
