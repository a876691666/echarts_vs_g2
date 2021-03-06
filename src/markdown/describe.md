### 本次分享，将分析我在Aisa大屏中的工具选择

大屏中共有以下几个图形：

- 线图
- 条形图
- 气泡图
- 地图

---
### 线图

由于线图没有过多的个性化定制，echarts g2 d3都能很轻松的实现，不过多参考。

![](~@img/line1.png)
![](~@img/line2.png)

---
### 条形图

条形图的设计具备脱离常规柱状图/条形图的个性化定制特点，具备参考价值。

![](~@img/bar1.png)
![](~@img/bar2.png)

---
### 气泡图

气泡图的设计没有过多的个性化定制，只是在显示逻辑上，需要限制气泡的大小和布局，采用d3实现，现成代码无参考价值。

![](~@img/bubble.png)

---
### 地图

地图的UI设计、交互逻辑和渲染逻辑都是非常复杂的，他相当于我们前面描述的`会发的美食`。
echarts g2都是无法满足需求的。所以使用d3实现。

![](~@img/map.png)
![](~@img/map2.png)

---

### 首先说说可视化原则之一：数据与视图分离

这是一个老生常谈的原则，在我们日常的前端开发中也会出现这一原则。

就像开发一个列表展示的功能，我们很少直接按照数据结构写一整段`Table Columns`。

因为如果又来了一个新的列表展示功能，我们还要重新写一整段`Table Columns`。

而在所有的、或某一个列表功能要做UI或数据上的调整时，我们要花费大量的时间整理逻辑。

---

再举一个更古老、更典型的例子： HTML拼接

相信你见过这种代码：

![](~@img/20200423235726.png)

和这种代码：

![](~@img/20200424000059.png)

这是一个典型的数据与视图未分离的场景。

相信他会尽一切可能的带来众多的维护问题。

---

而为了避免这一情况带来的工作量，通常我们会开发一个`Table组件`，传入`data`和`Columns Config`两段数据。

UI要变化的时候我们只需要更改Table组件本身

数据发生变化的时候，只需要更改传入的数据。

成功的进行了解耦，做到了将数据与视图分离。

---

### 那么记住这里的`数据与视图分离`的原则，我们进入echarts