// 当前文件模块为 m1.js
// 定义私有成员 a， b 和 c
let a = 10;
let b = 20;
let c = 30;

function show(){consloe.log('111111')}



// 将本模块中的私有成员暴露出去，供其他模块使用 (只允许暴露一次)
export default {
    a,
    c,
    show
}
// 按需导出
export let s1 = 'aaa';
export let s2 = 'bbb';
export function say(){
    console.log('ddddddddddd');
}