import mongoose from "mongoose";

/**
 * It connects to a MongoDB database using the Mongoose library
 */
export default function conectionDbHechowork (){
  const conection = process.env.MONGODB_URI
  mongoose.set('strictQuery', true)
  mongoose
  .connect(conection)
  .then(() => {
    console.log("success conection DB_HechoWork");
  })
  .catch((error) => {
    console.log(error, "error database mongoose");
  });
}