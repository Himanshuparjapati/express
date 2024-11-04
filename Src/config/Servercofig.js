import  dotenv  from "dotenv";

dotenv.config();

export const DB_URL=process.env.DB_URL;
export const AWS_ACCESS_KEY_ID=process.env.AWS_ACCESS_KEY;
export const AWS_ACCESS_SECRET_KEY_ID=process.env.AWS_SECRET_KEY;
export const AWS_REGION =process.env.AWS_REGION_AM;
export const AWS_BUKET_NAME=process.env.AWS_BUKET_NAMw; 