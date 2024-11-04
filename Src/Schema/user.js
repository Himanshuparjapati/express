import mongoose from "mongoose"

const userSchema= new mongoose.Schema({
    username:{
      type:String,
      required:true,
      unique:true,
      minLength:10
    },

    email:{
        type:String,
        required:true,
        unique:true,
        minLength:10 ,
        validate:{
             validator:function (emailValue){
                return  /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/.test(emailValue);
             },
              message:'invlid e-mail format '
        }
    },
    
    password:{
      type:String,
      required:true,
      unique:true,
      minLength:10 ,
      validate:{
        validator:function (passwordValue){
           return   /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{10,}$/.test(passwordValue);
        },
           message:'invlid Password '
      }
    }
},{timestamps:true});

const user=mongoose.model('User',userSchema)

export default user;