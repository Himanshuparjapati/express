import Post from "../Schema/Post.js";

export const createPost = async (caption,image,user)=>{
    try {
         const newPost= await Post.create({caption,image,user});
         return newPost;
    } catch (error) {
        
    }
}

export const findAllPost=async ()=>{
    try {
        const Posts=await Post.find();
        return Posts;
    } catch (error) {
        console.log(error)
    }
}

export const findById = async(id)=>{
    try {
       const postById=await Post.findById({id}) ;
       return postById
    } catch (error) {
        console.log(error)
    }
}