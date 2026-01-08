import express from "express"
import mongoose from "mongoose"     
import dotenv from "dotenv"
import bookRoute from "./route/book.route.js"
import userRoute from "./route/user.route.js"
import cors from "cors"

const app = express()
app.use(cors());
app.use(express.json());


dotenv.config()
const PORT = process.env.PORT || 4000
const URI=process.env.MongoDBURI
//connected to MongoDB
mongoose.connect(process.env.MongoDBURI)
  .then(() => console.log("MongoDB Atlas Connected"))
  .catch(err => console.error(err));


//defining routes

app.use("/book",bookRoute);
app.use("/user",userRoute);

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
})
