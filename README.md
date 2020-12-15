# REACT-COVER

[![](https://img.shields.io/npm/v/react-cover)](https://www.npmjs.com/package/react-cover)
![](https://img.shields.io/bundlephobia/minzip/react-cover)
[![Coverage Status](https://coveralls.io/repos/github/AkaiZhao/react-cover/badge.svg?branch=test/add-coveralls)](https://coveralls.io/github/AkaiZhao/react-cover?branch=test/add-coveralls)

A react component that support you make a loading style when loading status.
Loading component is use [react-loading](https://github.com/fakiolinho/react-loading).

![image](https://github.com/AkaiZhao/react-cover/blob/main/demo.gif?raw=true)

## Install

```
npm i react-cover
```
or
```
yarn add react-cover
```

## Demo

[DEMO LINK](https://akaizhao.github.io/react-cover/)

## Usage

Just use on props to toggle loading
```jsx
import Cover from 'react-cover'

const LoadingButton = ({ on = false }) => (
  <Cover on={on}>
    <button>COVER</button>
  </Cover>
)
```
change style color or type
```jsx
import Cover from 'react-cover'

const LoadingButton = ({ on = false }) => (
  <Cover on={on} color="red" type="balls">
    <button>COVER</button>
  </Cover>
)
```
if your element is in style width 100% you can use fullwidth prop
```jsx
import Cover from 'react-cover'

const FullWidthComponent = ({ on = false }) => (
  <Cover on={on} fullwidth>
   <div style="width:100%;">some thine fullwidth</div>
  </Cover>
)
```
## Props

|Name|Type|Default|Description| 
|-|-|-|-|
|on|boolean|false|switch this component active|
|opacity|string\|number|0.4|opacity for covered element|
|color|string|'#333'|control loading color |
|type|string|'spin'|control loading type of react-loading loading type|
|size|number|32|control loading size|
|loadingProps|object|{}|[react-loading](https://github.com/fakiolinho/react-loading)'s props|
|coverAdornment|jsx function|-|custom your loading style replace [react-loading](https://github.com/fakiolinho/react-loading)|
|inline|boolean|false|if children is display inline add this prop|
|cursor|string|initial|control your cursor style when active|
