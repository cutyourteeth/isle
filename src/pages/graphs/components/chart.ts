import moment from 'moment';
// format needs finally
interface AxisData {
    name: string;
    xValue: string[];
    yValue: number[];
}


export const chartDataGenerator = (records: any[]):any => {
    let axisDataList: AxisData[] = Object.keys(records[0]).map(item => ({
        name: item,
        xValue: [],
        yValue: [],
    }));

    axisDataList.forEach(data => {
        records.forEach(item => {
            const { value, timestamp } = item[data.name];
            data.xValue.push(moment(parseInt(timestamp, 10)).format("HH' DD/MMM/YYYY"));
            data.yValue.push(parseInt(value.match(/(\d)+/g)![0], 10));
        });
        console.log(data);
        const graphData = axisGenerator(data);
        return graphData
    });
};
const axisGenerator = (data: AxisData) => {
    const { name, xValue, yValue } = data;
    return {
        tooltip: {
            trigger: 'axis',
            position: function(pt: any) {
                return [pt[0], '10%'];
            },
        },
        title: {
            left: 'center',
            text: `source for real-estate site: ${name}`,
        },
        toolbox: {
            feature: {
                dataZoom: {
                    yAxisIndex: 'none',
                },
                restore: {},
                saveAsImage: {},
            },
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: xValue,
        },
        yAxis: {
            scale: true,
            type: 'value',
            boundaryGap: [0, '100%'],
        },
        dataZoom: [
            {
                type: 'inside',
                start: 0,
                end: 10,
            },
            {
                start: 0,
                end: 10,
                handleIcon:
                    'M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z',
                handleSize: '80%',
                handleStyle: {
                    color: '#fff',
                    shadowBlur: 3,
                    shadowColor: 'rgba(0, 0, 0, 0.6)',
                    shadowOffsetX: 2,
                    shadowOffsetY: 2,
                },
            },
        ],
        series: [
            {
                name: 'Total amount',
                type: 'line',
                smooth: true,
                symbol: 'none',
                sampling: 'average',
                itemStyle: {
                    color: 'rgb(255, 70, 131)',
                },
                areaStyle: {
                    // color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    //     {
                    //         offset: 0,
                    //         color: 'rgb(255, 158, 68)'
                    //     },
                    //     {
                    //         offset: 1,
                    //         color: 'rgb(255, 70, 131)'
                    //     }
                    // ])
                },
                data: yValue,
            },
        ],
    };
};
