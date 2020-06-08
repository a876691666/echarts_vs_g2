## web数据可视化 - 工具实践

目前主流的web前端可视化工具：
- echarts
- antv(G2, G6, F2)
- d3
- three

---

### echarts
使用echarts时，我们就像一个定制餐厅的顾客，将我们所有对食物的`要求（可视化需求）`写在一张`纸（options）`上，`厨师（echarts）`按照我们写在`纸`上的`要求`来制作`美食（图形）`并交到你的面前

当我们的`要求`越来越复杂时，写在`纸`上的东西也越来越多、越来越复杂。

而`厨师`在按照`要求`做菜时，我们的`要求`如果不符合`厨师`的`规定（API文档）`，`厨师`就不会做出这道菜`（报错）`。

那么我们就会花费大量的时间精力用来查阅与整理`规定`。

最后在`纸`上书写出符合`规定`的`要求`（根据API写出可以渲染出符合我们要求的Options）。

---

### g2
使用g2时，我们就像一个自行研究美食的业余爱好者，我们根据对`食材（图形要素）`和`烹饪知识（API）`的理解，自行作出符合`要求`的`美食`。

相对于去餐厅定制，我们对美食有更强的掌控力，根据我们的理解去调配美食。

但我们想要作出`会发光的美食（高度定制化的图形）`，还是要耗费很多的时间与精力。

---

### d3
使用d3时，我们就是特级厨师，而d3，就是我们的烹饪工具包。

这个时候的我们，见过、做过大量的`美食`，对`食材`有很深的理解，对`烹饪（如何做图）`有极深的熟练度与技巧。

我们可以作出`会发光的美食`。

去餐厅定制、自行在家研究都吃不到的美食，由我特级厨师来做。(echarts g2 做不出的需求，我d3来做)