const express=require('express');
const routerUniversity=require('./router');
const mongoose=require('mongoose')
mongoose.connect('mongodb://localhost:27017/schedule',err=>{

if(err){
console.log('DB Error: ', err.message)
}else{
console.log("DB connected")
    }
})
const app=express();

app.use('/programs',routerUniversity)

app.use(express.json());
app.listen(5000, console.log('5000 port is listing'));