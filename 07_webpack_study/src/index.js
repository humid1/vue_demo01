import $ from 'jquery';

import './css/test.css';
import './css/test2.less';
import './css/test3.scss';

$(function(){
    $('li:odd').css('background','yellow');
    $('li:even').css('background','lightblue');
})

// 测试处理 js 文件中的高级语法
class Person {
    static info = 'aaa';
}
console.log(Person.info);

//------------------------------
// 1.导入 Vue 构造函数
import Vue from 'vue';
// 2.导入 App 根组件
import App from './components/app.vue';
const vm = new Vue({
    // 3.指定 vm 实例要控制的页面区域
    el: '#app',
    // 4.通过 render 函数，把指定的组件渲染到 el 区域中
    render: h => h(App)
})