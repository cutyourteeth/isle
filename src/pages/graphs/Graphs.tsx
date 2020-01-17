import ReactEcharts from 'echarts-for-react'
import moment from 'moment'
import React, { useEffect, useState } from 'react'
import ServerApi, { EstateDataDto, RecordDto } from '../../assets/js/service'

const test: RecordDto[] = [{ '1579242785372': { secondHandedAmount: ' 59948 ' } }, { '1579246382840': { secondHandedAmount: ' 59952 ' } }]

export const Graphs = () => {
    const [records, setRecords] = useState<RecordDto[]>(test)
    const [graphData, setGraphData] = useState()

    useEffect(() => {
        const fetchData = () =>
            ServerApi.rawGetRequest<EstateDataDto[]>('list/hz').then(res => {
                const records = res.data.map(item => item.record)
                setRecords(records)
            })
        fetchData()
        const interval = setInterval(fetchData, 1000 * 60 * 60)
        return () => clearInterval(interval)
    }, [])

    /*
     * WARN:
     * THIS WEIRD DATA STRUCTURE IS PRACTICE ONLY
     * IT IS PART OF TS TRAINING
     */
    useEffect(() => {
        let xValue: string[] = [],
            yValue: number[] = []
        records.forEach(item => {
            xValue.push(moment(parseInt(Object.keys(item)[0], 10)).format("HH' DD/MMM/YYYY"))
            yValue.push(parseInt(Object.values(item)[0].secondHandedAmount, 10))
        })
        setGraphData(axisGenerator(xValue, yValue))
    }, [records])

    return <>{graphData && <ReactEcharts option={graphData} />}</>
}

const axisGenerator = (xValue: string[], yValue: number[]) => {
    var base = +new Date(xValue[0])
    var oneDay = 24 * 3600 * 1000
    var date = []

    var data = [Math.random() * 300]

    for (var i = 1; i < 20000; i++) {
        var now = new Date((base += oneDay))
        date.push([now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/'))
        data.push(Math.round((Math.random() - 0.5) * 20 + data[i - 1]))
    }

    return {
        tooltip: {
            trigger: 'axis',
            position: function(pt: any) {
                return [pt[0], '10%']
            }
        },
        title: {
            left: 'center',
            text: 'HZ real-estate data graph'
        },
        toolbox: {
            feature: {
                dataZoom: {
                    yAxisIndex: 'none'
                },
                restore: {},
                saveAsImage: {}
            }
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: xValue
        },
        yAxis: {
            scale: true,
            type: 'value',
            boundaryGap: [0, '100%']
        },
        dataZoom: [
            {
                type: 'inside',
                start: 0,
                end: 10
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
                    shadowOffsetY: 2
                }
            }
        ],
        series: [
            {
                name: 'Total amount',
                type: 'line',
                smooth: true,
                symbol: 'none',
                sampling: 'average',
                itemStyle: {
                    color: 'rgb(255, 70, 131)'
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
                data: yValue
            }
        ]
    }
}
