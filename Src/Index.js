import express from 'express';
import connectDB from './config/dbconfig.js';
import { createPost } from './controller/postcontroller.js';
import { uploader } from './config/multerConfig.js';


const port =3000;
const app = express();
app.use(express.json())
app.use(express.urlencoded())
app.use(express.text())

app.get('/Hello',(req,res)=>{
    return res.send({message:'Hello World'});
})

app.get('/',(req,res)=>{
    return res.send({message:'connect to db'})
})

app.get('/ping',(req,res)=>{
    console.log(req.query);
    console.log(req.body);
    
    return res.send('request goes')
})
app.post('/post',uploader.single("image"),createPost)

app.listen(port,()=>{
console.log(`server running on ${port}`);
     connectDB();
})