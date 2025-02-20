# @rickton/num-flip-animation

基于number-flip-animation更新，兼容IE10+

[点击跳转Github仓库地址](https://github.com/996529748/-rickton-num-flip-animation)

## 安装

```bash
npm install @rickton/num-flip-animation
```

## 基本使用
```javascript
import { NumberFlip } from '@rickton/num-flip-animation';
import '@rickton/num-flip-animation/dist/number-flip.css'

const numberFlip = new NumberFlip({
    rootElement: document.getElementById('number-flip');//需要滚动的容器
    initialNumber：123 //初始滚动数字
});

numberFlip.setNumber(newNumber);
```


## Options

NumberFlip类的构造函数接受具有以下属性的对象  

| 参数                                | 说明                                                                                                                                                                                                               | 默认值                            |
| ------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------- |
| **`rootElement`** (required)          | 展示滚动的容器（选择器）                                                                                                                                                                    | `null`                             |
| **`durationSlide`** (optional)        | 从一个数字到下一个数字的滑动动画的持续时间（毫秒）。                                                                                                                                       | `1000`                             |
| **`durationFade`** (optional)         | 从数字中删除数字时淡出动画的持续时间（毫秒）。如果要更改的新号码的位数少于要更改的号码的位数，则数字将被删除。 | `200`                              |
| **`initialNumber`** (optional)        | 创建实例时将显示的数字                                                                                                                                              | `null`                             |
| **`animateInitialNumber`** (optional) | 是否设置动画                                                                                                                                                                    | `true`                             |
| **`decimalSeparator`** (optional)     | 分隔符                                                                                                                               | `.`                                |
| **`wrapperClassname`** (optional)     | 包含所有数字的包装器元素的css类名。（不建议修改）                                         | `numberflip-digit-container`       |
| **`digitClassname`** (optional)       | 每个数字元素的css类名。如果这是从默认值更改的，则css文件中的类需要相应地更改。 （不建议修改）                                                     | `numberflip-digit-container-value` |