const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const navbar = [
    {
        link:"/signup",name:"SignUp"
    },
    {
        link:"/login",name:"Login"
    }

];

const nav = [
    {
        link:"/books",name:"Books"
    },
    {
        link:"/authors",name:"Authors"
    },
    {
        link:"/admin",name:"Add Book"
    },
    {
        link:"/",name:"Logout"
    }

];

const booksRouter = require('./src/routes/bookRoutes')(nav);
app.use('/books',booksRouter);
const authorsRouter = require('./src/routes/authorRoutes')(nav);
app.use('/authors',authorsRouter);
const loginRouter = require('./src/routes/loginRoutes')(navbar);
app.use('/login',loginRouter);
const signupRouter = require('./src/routes/signupRoutes')(navbar);
app.use('/signup',signupRouter);
const mainRouter = require('./src/routes/mainRoutes')(nav);
app.use('/main',mainRouter);
const adminRouter=require('./src/routes/adminRoutes')(nav);
app.use('/admin',adminRouter);



app.use(express.static("./public"));
app.set('view engine' , 'ejs');
app.set('views' , './src/views');

app.get("/",function(req,res){
    res.render("index", 
    {
       navbar, 
        title:"Library"
    });
});

app.get("/main",function(req,res){
    res.render("main", 
    {
       nav, 
        title:"Library"
    });
});


app.listen(port,()=>{console.log("server ready at "+ port)});  