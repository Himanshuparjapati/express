import mongoose from "mongoose";

const postsSchema=new mongoose.Schema({
    caption:{
        type: String,
        minLength : 30,
        required:true
    },

    image:{
        type: String,
        // minLength : 30,
        required:true
    },

    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user'
    }
},{timestamps:true})

const Post= mongoose.model("post",postsSchema);

export default Post