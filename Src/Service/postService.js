
import { createPost  } from "../Repsitory/postRepositry.js";
export const createPostService =async (createPostObject)=>{
    const caption=createPostObject.caption;
    const image=createPostObject.image;

    const post =await createPost(caption,image)
    return post
}