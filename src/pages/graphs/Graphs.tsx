import ReactEcharts from "echarts-for-react";
import React from "react";

const option = {
    xAxis: {
      type: "category",
      data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
    },
    yAxis: {
      type: "value"
    },
    series: [
      {
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: "line",
        smooth: true
      }
    ]
  };

export const Graphs = () => {


  return (
    <div>
      <ReactEcharts option={option} />
    </div>
  );
};
