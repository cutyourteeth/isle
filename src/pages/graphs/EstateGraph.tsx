import React from 'react';
import { Chart } from './components/Chart';

export const EstateGraph = () => {
    return <Chart api="list/estate"></Chart>;
};
