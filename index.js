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


const arrMonHoc = ['PHP1', 'NodeJS', 'Angular', 'Android']; 

//parameter thu 2 cua .render truyen ve 1 object wa ben learn.ejs la 1 bien
//cach nay thich hop cho lam tung user
//co the truyen nhieu object khac nhau.
app.get('/learn', (req,res)=>{
	res.render('learn', {username:'Thien An', arrMonHoc:arrMonHoc})
});

const arrPeopleX = [
       {name: 'Ti1', age:10},
       {name: 'Teo1', age:11},
       {name: 'Tun1',age:12}];

//ở file này đặt arrPeople thì bên file learn.js fải gọi đúng tên này
//tên mảng có thể đặt khác ko cần giống vẫn dc.
app.locals.arrPeople = arrPeopleX;

reload(app);
app.listen(3000, ()=>console.log('server started'));