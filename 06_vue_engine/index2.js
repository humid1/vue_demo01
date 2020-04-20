/**
 * 默认导入 与 默认导出 语法
 * 运行命令 npx babel-node index2.js
 */
import m1 from './m1.js';

console.log("运行成功，ok",m1);

console.log("-----------------------")

/**
 * 按需导入 和 按需导出
 */
import {s1,s2,say} from './m1.js';

console.log(s1);
console.log(s2);
console.log(say);

/**
 * 直接导入并执行模块代码
 */
import './m2.js';
