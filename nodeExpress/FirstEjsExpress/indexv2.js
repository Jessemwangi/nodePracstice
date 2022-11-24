'use strict';

const express =require('express');
const app =express();
const path = require('path');

const {port,host} =require('./config.json');
const cars =require('./cars.json');

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'pageTemplates'));

const homePath =path.join(__dirname,'home.html');

const users ={
    jesse:'xyz',
    peter:'1234',
    tom:'welcome',
    ruth:'hello'
};



app.get('/',(req,res)=> res.sendFile(homePath));
app.use(express.static(path.join(__dirname,'public')));
app.post('/login',express.urlencoded({extended:false}),(req,res) =>
{
     console.log(req.body);

    const {name,passw} =req.body;

    if (Object.keys(users).includes(name) && users[name] ===passw){

        res.render('result',{
            title:"Your Data",
        header1:'you send this files',
    data:{name,passw}
    });
    
        // res.send(`<h1>User is : ${req.body.name}</h1>`)
   
    }
    else
    {
        res.render('error',{name})
    }
});
app.get('/cars',(req,res)=>{
    res.render('TableDemo',{cars})

})

app.get('/carsif',(req,res)=>{
    res.render('TableDemoif',{cars})
    
})

    app.get('/users',(req,res) => res.render('users',{
        title:'users',
        header1:'names',
        usernames:Object.keys(users)
    }));

app.listen(port,host, ()=>console.log(`port ... ${port} : host ... ${host}`));