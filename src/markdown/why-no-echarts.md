### 为什么没有选择 echarts

因为：echarts 无法定制超出了常规边界的图形

---

在大屏项目中，其中一个需求是实现：被攻击资产 TOP5。

UI 是这样：

![](~@img/bar2.png)

这个图形大概有以下几点要素：

- 排序
- 条形的显示
- 条形的边框
- 不完全填满边框
- tooltip 交互
- 左侧 ip 右侧数值 条形在中间的布局

---

### 使用 echarts 来实现

这里我研究了大约 1 小时左右，反复查阅 echarts 配置项手册实现的：

![](~@img/20200424102207.png)

之后再微调细节就可以达到设计图的效果。

但我无法让 tooltip 只显示一列数据，因为我传入了三个 series 来达到效果。

---

### 在使用 echarts 这张图时我的经历

- 我先在官网找了一张带背景色的条形图例子
- 将 x 轴与 y 轴数据替换使图形横过来
- 我尝试了一些方法来实现边框效果，echarts 没办法直接绘制边框，我新增了两个 series 数据通过覆盖来模拟边框
- 增加第二个 y 轴显示数值
- 想办法显示 tooltip 进行交互，发现 tooltip 会把边框背景用的数据也显示出来
- 后续微调我需要去调整尝试设置 `barGap` `barCategoryGap` 这两个参数，为这两个参数设置不同的值来确保图形大小被拉伸时，保证图形间距在一个美观、合适的位置

---

### 配置项手册

在这个过程中，我反复的查阅配置项手册，真是恨不得把所有配置都背下来。

反复的对配置项进行试验，做出这张图。

在这一过程中，我就像前文叙述的，我是顾客，我要按照厨师的规定来写要求。经过我反复的试验，厨师最后给我端上了我要的菜。

完整代码：

```javascript
var dataAxis = [
  "10.10.10.10",
  "11.11.11.11",
  "12.12.12.12",
  "13.13.13.13",
  "14.14.14.14",
];
var data = [220, 182, 191, 234, 290];
var yMax = 500;
var dataShadow = [];

for (var i = 0; i < data.length; i++) {
  dataShadow.push(yMax);
}

option = {
  grid: { left: "0%", right: "0%", containLabel: true },
  yAxis: [
    {
      data: dataAxis,
      axisLabel: {},
      axisTick: { show: false },
      axisLine: { show: false },
      z: 10,
    },
    {
      data: data,
      axisLabel: {},
      axisTick: { show: false },
      axisLine: { show: false },
      z: 10,
    },
  ],
  xAxis: {
    axisLine: { show: false },
    axisTick: { show: false },
    axisLabel: { show: false },
    splitLine: false,
  },
  series: [
    {
      // For shadow
      type: "bar",
      itemStyle: {
        color: "#188df0",
        borderColor: "#188df0",
        borderWidth: 12,
      },
      data: dataShadow,
      animation: false,
      z: 1,
    },
    {
      // For shadow
      type: "bar",
      itemStyle: {
        color: "#000",
        borderColor: "#000",
        borderWidth: 6,
      },
      data: dataShadow,
      animation: false,
      z: 2,
    },
    {
      type: "bar",
      itemStyle: {
        color: new echarts.graphic.LinearGradient(1, 0, 0, 0, [
          { offset: 0, color: "#83bff6" },
          { offset: 0.5, color: "#188df0" },
          { offset: 1, color: "#188df0" },
        ]),
      },
      z: 100,
      data: data,
      animation: false,
      barGap: "-100%",
      barCategoryGap: "80%",
    },
  ],
};
```

---

**_死板是我拒绝使用 echarts 的一个主要原因，如果这个条形图的设计更加复杂，我很难保证 echarts 可以将他实现。_**
**_而需要反复查询配置项去寻找绘图的可能是我拒绝使用 echarts 的最大原因_**
