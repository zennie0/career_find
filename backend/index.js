import express from "express"

const app = express();
import mongoose from "mongoose";


main()
 .then(()=>{
 console.log("connected to mongoDB");
 })
 .catch((err)=>{
    console.log(err)
 });
async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/careerFind');
   
}

app.listen(8080,()=>{
    console.log("server is listing to 8080")
})