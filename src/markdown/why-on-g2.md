### 为什么选择 G2

因为可以定制较复杂图形的同时，也可以快速实现简单的图形。

**_在实现图形的基础上，G2、Antv 的知识体系、设计理念和使用方式可以帮助你快速理解图形基础。_**

**_为成为特级厨师提供助力（为使用 D3 打基础）。_**

---

### 先简单介绍一下 G2

> G2 是一套基于图形语法理论的可视化底层引擎，以数据驱动，提供图形语法与交互语法，具有高度的易用性和扩展性。使用 G2，你可以无需关注图表各种繁琐的实现细节，一条语句即可使用 Canvas 或 SVG 构建出各种各样的可交互的统计图表。

> G2 的强大是由其背后的一套图形语法所支撑的，它基于《The Grammar of Graphics》(Leland Wilkinson 著)一书，是一套用来描述所有统计图表深层特性的语法规则，该语法回答了『什么是统计图表』这一问题，以自底向上的方式组织最基本的元素形成更高级的元素。
>
> 由此，G2 所构建出的图表是由一系列独立的图形语法元素组合而成的：
>
> - 数据 Data：可视化最基础的部分。
> - 图形属性 Attribute：负责将数据中的变量映射至图形空间。
> - 几何标记 Geometry：即你在图表中实际看到的图形元素，如点、线、多边形等，每个几何标记对象含有多个图形属性，G2 的核心就是建立数据中的一系列变量到图形属性的映射。
> - 度量 Scale：数据空间到图形属性空间的转换桥梁，每一个图形属性都对应着一个或者多个度量。
> - 坐标系 Coordinate：描述了数据是如何映射到图形所在的平面的，同一个几何标记在不同坐标系下会有不同的表现。G2 提供了多种坐标系的支持：笛卡尔坐标、极坐标以及螺旋坐标等。
> - 可视化组件 Component：也可以成为图表辅助元素，用于增强图表的可读性和可理解性，在 G2 中，提供了丰富的可视化组件，包括坐标轴 Axis，图例 Legend，提示信息 Tooltip，图形标记 Annotation，滑动条 Slider 等。
> - 分面 Facet：描述了如何将数据分解为各个子集，以及如何对这些子集作图并联合进行展示，主要用于多维数据分析。
>
> 所以，在 G2 中，我们通常这么描述一张图表：`一张图表就是从数据到几何标记对象的图形属性的一个映射，此外图形中还可能包含数据的统计变换，最后绘制在某个特定的坐标系中。`

---

### 使用 g2 实现一个简单的折线图

```javascript
import { Chart } from "@antv/g2";

const data = [
  { year: "1991", value: 3 },
  { year: "1992", value: 4 },
  { year: "1993", value: 3.5 },
  { year: "1994", value: 5 },
  { year: "1995", value: 4.9 },
  { year: "1996", value: 6 },
  { year: "1997", value: 7 },
  { year: "1998", value: 9 },
  { year: "1999", value: 13 },
];
const chart = new Chart({
  container: "container", // 容器
  autoFit: true, // 自适应宽高
  height: 500, // 固定高度
});

chart.data(data); // 传入数据
chart.scale({
  // 配置各数据数值的度量，会涉及到轴的显示
  year: {
    range: [0, 1],
  },
  value: {
    min: 0,
    nice: true,
  },
});

chart.tooltip({
  // 配置tooltip
  showCrosshairs: true, // 展示 Tooltip 辅助线
  shared: true,
});

chart
  .line() // 绘制：线
  .position("year*value")
  // 将 year 映射到 position 位置图形属性的 x 轴方向；
  // 将 value 映射到 position 位置图形属性的 y 轴方向；
  .label("value"); //将 value 值映射到 label 的显示
chart.point().position("year*value"); // 画点

chart.render(); // 渲染
```

看看结果：

![](~@img/20200426145501.png)

---

再试试多条线

```javascript
import { Chart } from "@antv/g2";

const data = [
  { year: "1991", type: "1", value: 3 },
  { year: "1992", type: "1", value: 4 },
  { year: "1993", type: "1", value: 3.5 },
  { year: "1994", type: "1", value: 5 },
  { year: "1995", type: "1", value: 4.9 },
  { year: "1996", type: "1", value: 6 },
  { year: "1997", type: "1", value: 7 },
  { year: "1998", type: "1", value: 9 },
  { year: "1999", type: "1", value: 13 },
  { year: "1991", type: "2", value: 2 * 3 },
  { year: "1992", type: "2", value: 2 * 4 },
  { year: "1993", type: "2", value: 2 * 3.5 },
  { year: "1994", type: "2", value: 2 * 5 },
  { year: "1995", type: "2", value: 2 * 4.9 },
  { year: "1996", type: "2", value: 2 * 6 },
  { year: "1997", type: "2", value: 2 * 7 },
  { year: "1998", type: "2", value: 2 * 9 },
  { year: "1999", type: "2", value: 2 * 13 },
];

const chart = new Chart({
  container: "container",
  autoFit: true,
  height: 500,
});

chart.data(data);
chart.scale({
  year: {
    range: [0, 1],
  },
  value: {
    min: 0,
    nice: true,
  },
});

chart.tooltip({
  showCrosshairs: true,
  shared: true,
});

chart
  .line()
  .position("year*value")
  .color("type") // 将 type 映射到 color 颜色图形属性。
  .shape("smooth")
  .label("value");

chart
  .point()
  .position("year*value")
  .color("type");

chart.render();
```

看看结果：

![](~@img/20200426150243.png)

---

### DataSet

可以看到，使用 G2 做线图时，多条线和单条线的差异只有：数据。

这里引入 G2 的一个概念，DataSet

> DataSet 的目标是为数据可视化场景提供状态驱动

DataSet 具备两个能力：

- `Connector` 数据连接
- `Transform` 数据转换

Connector 负责导入和归一化数据（譬如导入 CSV 数据，导入 GeoJSON 数据等）

Transform 负责进行各种数据转换操作（譬如图布局、数据统计、数据补全等）

我们这里使用 Transform 的 fold（字段展开） 來避免多条线时传入巨量的扁平化数据。

如下操作：

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
  { year: "1999", value: 13, value2: 13 * 2, value3: 13 * 3 },
];
const ds = new DataSet();

const dv = ds
  .createView()
  .source(data)
  .transform({
    type: "fold",
    fields: ["value", "value2", "value3"], // 展开字段集
    key: "type", // key字段
    value: "value", // value字段
    retains: ["year"], // 保留字段集，默认为除 fields 以外的所有字段
  });
```

得到如下数据

```javascript
[
  { year: "1991", type: "value", value: 3 },
  { year: "1991", type: "value2", value: 6 },
  { year: "1991", type: "value3", value: 9 },
  { year: "1992", type: "value", value: 4 },
  { year: "1992", type: "value2", value: 8 },
  { year: "1992", type: "value3", value: 12 },
  { year: "1993", type: "value", value: 3.5 },
  { year: "1993", type: "value2", value: 7 },
  { year: "1993", type: "value3", value: 10.5 },
  { year: "1994", type: "value", value: 5 },
  { year: "1994", type: "value2", value: 10 },
  { year: "1994", type: "value3", value: 15 },
  { year: "1995", type: "value", value: 4.9 },
  { year: "1995", type: "value2", value: 9.8 },
  { year: "1995", type: "value3", value: 14.7 },
  { year: "1996", type: "value", value: 6 },
  { year: "1996", type: "value2", value: 12 },
  { year: "1996", type: "value3", value: 18 },
  { year: "1997", type: "value", value: 7 },
  { year: "1997", type: "value2", value: 14 },
  { year: "1997", type: "value3", value: 21 },
  { year: "1998", type: "value", value: 9 },
  { year: "1998", type: "value2", value: 18 },
  { year: "1998", type: "value3", value: 27 },
  { year: "1999", type: "value", value: 13 },
  { year: "1999", type: "value2", value: 26 },
  { year: "1999", type: "value3", value: 39 },
];
```

---

**_G2 可以通过对数据进行变更来改变视图，不需要像 echarts 一样生成多个 series。_**

当然, Transform 不光可以做字段展开：

- 做直方图时可以通过`bin.histogram`做数据分箱
- 做饼图可以通过`percent`做百分比转换
- 做树图可以通过`hierarchy.treemap`生成结构

除此之外还有很多……

---

以上内容说明了以下几点：

- 使用 G2 开发简单图形，并不比 echarts 复杂。
- 开发时，G2 图形语法的代码结构更清晰。
- G2 的图形语法，相较于 echarts 的 options，更贴近可视化本身。
