import multer from "multer";
import multerS3 from "multer-s3";
import  S3  from "./awsConfig.js"
import { AWS_BUKET_NAME } from "./Servercofig.js";

// console.log(AWS_BUKET_NAME);
export const uploader=multer({
    storage:multerS3({
        
        s3:S3,
        bucket:AWS_BUKET_NAME,
        // acl:"public-read",
        key: function(req,file,cb){
            console.log(file);
            
            
            const uniqueSuffix=Date.now() +"-"+ Math.round(Math.random()+1e9);
            cb(null,file.fieldname+"-"+uniqueSuffix+"."+file.mimetype.split("/")[1])
            
        }
    })
})