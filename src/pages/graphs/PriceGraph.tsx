import React from 'react';
import { Chart } from './components/Chart';

export const PriceGraph = () => {
    const extractValue = (value: string)=>{
        return parseInt(value.match(/(\d+)/g)![0],10)
    }
    return <Chart api="list/price/youlinghu" extractMethod={extractValue}></Chart>;
};
