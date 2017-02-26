//Cách này sẽ báo lỗi bởi vì cú pháp import ... from của ECMA Script 6 chứ không phải của Node.js
//Tham khảo thêm bài viết này https://hackernoon.com/node-js-tc-39-and-modules-a1118aecf95e#.86qae0fmt
import {add, minus} from './Math/basicoperator';


console.log(add(5, 10));
console.log(minus(5, 10));