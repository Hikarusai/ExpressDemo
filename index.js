const express=require('express');
const http=require('http');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const userRouter=require('./routers/user');
const createRouter=require('./routers/create');
const loginRouter=require('./routers/login');

const authMiddleware=require('./Middlewares/auth.Middleware')
const app=express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser('ljfjffjfjoife'));

app.set('views', './viewsPug');
app.set('view engine','pug');

	
app.get('/',(rq,rs)=>{
	rs.render('index');
});
app.use('/user',authMiddleware.requireAuth, userRouter);
app.use('/create',authMiddleware.requireAuth,createRouter);
app.use('/login',loginRouter);

app.get('/cookie',(rq,rs)=>{
	rs.cookie('userId',12345);
	rs.send('Hello');
});


http.createServer(app).listen(8000,()=>{console.log('Server running at 127.0.0.1:8000')});

module.exports=app;

