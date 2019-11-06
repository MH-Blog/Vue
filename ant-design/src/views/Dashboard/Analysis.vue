<!--
 * @Author: MagicHuang
 * @Date: 2019-11-05 17:11:37
 * @Description:分析页
 -->
<template>
  <div>
    <Chart :option="chartOption" style="height:400px;" />
  </div>
</template>

<script>
import Chart from "../../components/Chart";
import random from "lodash/random";
import axios from "axios";

export default {
  name: "Analysis",
  components: {
    Chart
  },
  data() {
    return {
      chartOption: {}
    };
  },
  mounted() {
    this.getChartData();
  },
  methods: {
    getChartData() {
      axios
        .get("/api/dashboard/chart", { params: { ID: 12345 } })
        .then(response => {
          this.chartOption = {
            title: {
              text: "ECharts 入门示例"
            },
            tooltip: {},
            xAxis: {
              data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
            },
            yAxis: {},
            series: [
              {
                name: "销量",
                type: "bar",
                data: response.data
              }
            ]
          };
        });
    }
  }
};
</script>

<style>
</style>
