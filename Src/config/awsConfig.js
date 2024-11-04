import AWS from 'aws-sdk' ;
import { AWS_ACCESS_KEY_ID, AWS_ACCESS_SECRET_KEY_ID, AWS_REGION,AWS_BUKET_NAME } from './Servercofig.js';
// const AWS = require('aws-sdk')

 const s3 =new AWS.S3({
   region:"ap-south-1",
   accessKeyId:AWS_ACCESS_KEY_ID,
   secretAccessKey:AWS_ACCESS_SECRET_KEY_ID,
   endpoint: "http://localhost:3000",
   
   s3ForcePathStyle: true,
 })

console.log(AWS_REGION);
console.log(AWS_ACCESS_KEY_ID);
console.log(AWS_ACCESS_SECRET_KEY_ID);



export default s3



