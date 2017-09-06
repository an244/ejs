const express = require('express');
const app = express();
const reload = require('reload');

//set 'views': thuộc tính cho biến app (mặc định) & phải viết chính xác chữ 'views'
//còn thư mục 'views' thì đặt tên sao cũng dc khi tạo folder. Đặt biệt thư mục views thì có thể ko cần viết câu dưới
app.set('views','./views')


app.set('view engine','ejs');//engine gì thì sẽ thay đổi đuôi 'ejs' thành cái khác

//app.get('/',(req,res)=> res.send('<h2 style="color:red">Xin chao</h2>'));

//app.get('/',(req,res)=>res.sendfile('/.views/a.html'));

//hiện tại sử dụng render này thay sendfile: ý nghĩa đọc từng code thành giao diện
app.get('/', (req, res)=> res.render('home'));//tạo ra trang home

app.get('/learn', (req,res)=>res.render('learn'));

reload(app);
app.listen(3000, ()=>console.log('server started'));