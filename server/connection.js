require('dotenv').config();
const mongoose = require('mongoose');
mongoose.set('strictQuery', false);

const connectionStr=process.env.MONGO_USERNAME;
mongoose.connect(connectionStr,{useNewUrlParser:true})
.then(()=>console.log('connected to mongoDb'))
.catch(err=> console.log(err));
mongoose.connection.on('error',err=>{
    console.log(err)
})
console.log('hi')
