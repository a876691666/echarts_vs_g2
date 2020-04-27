<template>
  <div class="part-box part1">
    <div class="part-left">
      <div v-highlight>
        <pre>
          <code class="language-javascript">
import ecahrts from 'echarts';

option = {
    xAxis: {
        type: 'category',
        data: data.map(d => d.year)
    },
    yAxis: {
        type: 'value'
    },
    series: [{
        data: data.map(d => d.value),
        type: 'line'
    }]
};

var myChart = echarts.init(document.getElementById('container'));
myChart.setOption(option);
          </code>
        </pre>
      </div>
    </div>
    <div class="part-right">
      <div v-highlight>
        <pre>
          <code class="language-javascript">
import { Chart } from '@antv/g2';

const chart = new Chart({
  container: 'container',
  autoFit: true,
});

chart.data(data);
chart.scale({
  value: {
    min: 0,
    nice: true,
  },
});

chart.tooltip(false);

chart.line().position('year*value').label('value');
chart.point().position('year*value');

chart.render();
          </code>
        </pre>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "part1",
  data() {
    return {};
  },
  computed: {},
  mounted() {}
};
</script>

<style lang="scss">
</style>
