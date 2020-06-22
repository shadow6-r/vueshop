//index.js  属于 入口组件  

import React, {Component} from 'react'
import ReactDOM from 'react-dom'
// 引入App组件
import  App  from './App'

//ReactDOM.render('渲染的组件','组件渲染的位置')

ReactDOM.render(<App />, document.getElementById('root'))