import user from "../Schema/user";



export const findUserByEmail=async (email)=>{
    try {
        const User =await user.findOne({email})
        return User
    } catch (error) {
        console.log(error)
    }
}

export const findAllUser=async()=>{
    try {
        const users=await user.find();
        return users;
    } catch (error) {
        console.log(error)
    }
}