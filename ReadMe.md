# Dạy về Module, require, import, export trong Node.js

# Chạy thử
```bash
node index.js
node import.js
```

Để hiểu rõ module được export và import như thế nào hãy xem
[Node.js, TC-39, and Modules](https://hackernoon.com/node-js-tc-39-and-modules-a1118aecf95e#.86qae0fmt)
![](https://cdn-images-1.medium.com/max/800/1*W9dyBkQ7nRT_YiaZupFhaw.png)


Cú pháp import là của ES6 chứ không phải của Node.js. Hiện nay Node.js chưa hỗ trợ cú pháp này.

Nếu dùng Babel thì dịch import sang require nhưng bản chất hoạt động không còn đúng nữa.

Chúng ta cũng không thể dùng option --harmony_modules bởi Node.js phiên bản 7.6 cũng chưa hỗ trợ ES 6 module