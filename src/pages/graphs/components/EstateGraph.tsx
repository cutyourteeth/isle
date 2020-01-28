import ReactEcharts from 'echarts-for-react';
import React, { useEffect, useState } from 'react';
import ServerApi, { EstateDataDto, RecordData } from '../../../assets/js/service';
import { chartDataGenerator } from './chart';


export const EstateGraph = () => {
    const [records, setRecords] = useState<RecordData[]>([]);
    const [graphData, setGraphData] = useState<any[]>([]);

    useEffect(() => {
        const fetchData = () =>
            ServerApi.getListData<EstateDataDto[]>('list/hz').then(res => {
                const records = res.data.map(item => item.record);
                setRecords(records);
            });
        fetchData();
        const interval = setInterval(fetchData, 1000 * 60 * 60);
        return () => clearInterval(interval);
    }, []);

    /*
     * transform to axis data
     */
    useEffect(() => {
        if (!records.length) {
            return;
        }
        setGraphData(chartDataGenerator(records))
    }, [records]);

    return (
        <>
            {graphData.map((item, index) => (
                <ReactEcharts option={item} key={index} />
            ))}
        </>
    );
};

