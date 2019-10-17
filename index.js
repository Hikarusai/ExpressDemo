require('dotenv').config();

const express=require('express');
const http=require('http');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
var mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_URL, {useNewUrlParser: true});

const userRouter=require('./routers/user');
const createRouter=require('./routers/create');
const productRouter=require('./routers/product');
const cartRouter=require('./routers/cart');
const loginRouter=require('./routers/login');

const authMiddleware=require('./Middlewares/auth.Middleware');
const sessionMiddleware=require('./Middlewares/session.middleware');
const app=express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser(process.env.SESSION_SECRET));

app.use(sessionMiddleware);

app.set('views', './viewsPug');
app.set('view engine','pug');

	
app.get('/',(rq,rs)=>{
	rs.render('index');
});
app.use( express.static( "public" ) );
app.use('/user',authMiddleware.requireAuth, userRouter);
app.use('/create',authMiddleware.requireAuth,createRouter);
app.use('/product',productRouter);
app.use('/cart',cartRouter);
app.use('/login',loginRouter);

// app.get('/cookie',(rq,rs)=>{
// 	rs.cookie('userId',12345);
// 	rs.send('Hello');
// });


http.createServer(app).listen(8000,()=>{console.log('Server running at 127.0.0.1:8000')});

module.exports=app;

