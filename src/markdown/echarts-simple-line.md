#### 我们先使用 echarts 实现一个简单的折线图

```javascript
import ecahrts from "echarts";

const data = [
  { year: "1991", value: 3 },
  { year: "1992", value: 4 },
  { year: "1993", value: 3.5 },
  { year: "1994", value: 5 },
  { year: "1995", value: 4.9 },
  { year: "1996", value: 6 },
  { year: "1997", value: 7 },
  { year: "1998", value: 9 },
  { year: "1999", value: 13 }
];

option = {
  xAxis: {
    type: "category",
    data: data.map(d => d.year)
  },
  yAxis: {
    type: "value"
  },
  series: [
    {
      data: data.map(d => d.value),
      type: "line"
    }
  ]
};

var myChart = echarts.init(document.getElementById("container"));
myChart.setOption(option);
```

看看结果，这是很简单的一段代码：

![](~@img/20200424002255.png)

我们再来看看实现多条线：

```javascript
const data = [
  { year: "1991", value: 3, value2: 3 * 2, value3: 3 * 3 },
  { year: "1992", value: 4, value2: 4 * 2, value3: 4 * 3 },
  { year: "1993", value: 3.5, value2: 3.5 * 2, value3: 3.5 * 3 },
  { year: "1994", value: 5, value2: 5 * 2, value3: 5 * 3 },
  { year: "1995", value: 4.9, value2: 4.9 * 2, value3: 4.9 * 3 },
  { year: "1996", value: 6, value2: 6 * 2, value3: 6 * 3 },
  { year: "1997", value: 7, value2: 7 * 2, value3: 7 * 3 },
  { year: "1998", value: 9, value2: 9 * 2, value3: 9 * 3 },
  { year: "1999", value: 13, value2: 13 * 2, value3: 13 * 3 }
];

option = {
  xAxis: {
    type: "category",
    data: data.map(d => d.year)
  },
  yAxis: {
    type: "value"
  },
  series: [
    {
      data: data.map(d => d.value),
      type: "line"
    },
    {
      data: data.map(d => d.value2),
      type: "line"
    },
    {
      data: data.map(d => d.value3),
      type: "line"
    }
  ]
};
```

![](~@img/20200424002853.png)

再通过dataset简化一下：

```javascript
option = {
  dataset: { source: data },
  xAxis: { type: "category", name: "year" },
  yAxis: { type: "value" },
  series: [
    { name: "value", type: "line" },
    { name: "value2", type: "line" },
    { name: "value3", type: "line" }
  ]
};
```

我们可以看到，echarts实现这种图形：简简单单

---

完整代码

```javascript
import ecahrts from "echarts";

const data = [
  { year: "1991", value: 3, value2: 3 * 2, value3: 3 * 3 },
  { year: "1992", value: 4, value2: 4 * 2, value3: 4 * 3 },
  { year: "1993", value: 3.5, value2: 3.5 * 2, value3: 3.5 * 3 },
  { year: "1994", value: 5, value2: 5 * 2, value3: 5 * 3 },
  { year: "1995", value: 4.9, value2: 4.9 * 2, value3: 4.9 * 3 },
  { year: "1996", value: 6, value2: 6 * 2, value3: 6 * 3 },
  { year: "1997", value: 7, value2: 7 * 2, value3: 7 * 3 },
  { year: "1998", value: 9, value2: 9 * 2, value3: 9 * 3 },
  { year: "1999", value: 13, value2: 13 * 2, value3: 13 * 3 }
];

option = {
  dataset: { source: data },
  xAxis: { type: "category", name: "year" },
  yAxis: { type: "value" },
  series: [
    { name: "value", type: "line" },
    { name: "value2", type: "line" },
    { name: "value3", type: "line" }
  ]
};

var myChart = echarts.init(document.getElementById("container"));
myChart.setOption(option);
```