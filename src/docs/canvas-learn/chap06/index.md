# 清除已有图形

新图形所在的位置，会把下面的旧图清掉，不是画新图，是 “擦除” 旧图

```js
const drawClear = () => {
  clearCanvas();
  ctx.fillStyle = 'red';
  ctx.fillRect(50, 50, 150, 150);
  // 叠加规则
  ctx.globalCompositeOperation = 'clear';
  ctx.beginPath();
  ctx.fillStyle = 'yellow';
  ctx.arc(150, 150, 80, 0, Math.PI \* 2);
  ctx.fill();
  ctx.globalCompositeOperation = 'source-over';
};
```

# 只显示新旧图形的交集

只有新图和旧图重叠的部分才显示，其他地方都隐藏

```js
const drawSourceIn = () => {
  clearCanvas();
  // 蓝色正方形
  ctx.fillStyle = 'blue';
  ctx.fillRect(50, 50, 150, 150);
  // 只显示交集
  ctx.globalCompositeOperation = 'source-in';
  // 绿色圆形
  ctx.beginPath();
  ctx.fillStyle = 'green';
  ctx.arc(150, 150, 80, 0, Math.PI \* 2);
  ctx.fill();
  // 恢复默认
  ctx.globalCompositeOperation = 'source-over';
};
```

# 新图覆盖旧图

这是默认的叠加方式，新图直接画在旧图上面，重叠部分新图覆盖旧图，不用特意设置

```js
const drawDefault = () => {
  clearCanvas();
  // 粉色矩形
  ctx.fillStyle = 'pink';
  ctx.fillRect(50, 50, 150, 150);
  // 橙色圆形
  ctx.beginPath();
  ctx.fillStyle = 'orange';
  ctx.arc(150, 150, 80, 0, Math.PI \* 2);
  ctx.fill();
};
```

# 旧图减去新图的部分

旧图中不与新图重叠的地方保留，重叠部分被清空

```js
const drawDestOut = () => {
  clearCanvas();
  // 紫色矩形
  ctx.fillStyle = 'purple';
  ctx.fillRect(50, 50, 150, 150);
  // 目标图形减源图形
  ctx.globalCompositeOperation = 'destination-out';
  // 黑色圆形
  ctx.beginPath();
  ctx.fillStyle = 'black';
  ctx.arc(150, 150, 80, 0, Math.PI \* 2);
  ctx.fill();
  // 恢复默认
  ctx.globalCompositeOperation = 'source-over';
};
```
