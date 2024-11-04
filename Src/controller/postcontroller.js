import { createPostService } from "../Service/postService.js";

export async function createPost(req,res){
console.log(req.file);
const post =await createPostService({
    caption:req.body.caption,
    image:req.file.location
})
return res.json( {
    sucess1:true,
    data:post,
    message:'create post sucess '
})

}