# REACT-COVER

The main feature of this component is to prompt user when loading.
Loading component is use [react-loading](https://github.com/fakiolinho/react-loading).

<br/>
<p> 這個組件是主要目的是用於當loading時提示使用者loading狀態或是蓋上任何元素來提示使用者而生。<br/>
加載元件是使用 [react-loading](https://github.com/fakiolinho/react-loading)</p>

## Install
```
npm i react-cover

or

yarn add react-cover
```

## Demo

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