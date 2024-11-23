import express from "express";
import dotenv from "dotenv";
import router from "../routers/feedbackRouter.js";
import dbConnect from "../config/database.js";


dotenv.config();

const app = express();

const PORT = 3000||process.env.PORT ;  


app.use(express.json());


app.use("/api/v1", router);
app.get("/", (req, res)=>{
  res.send("Hello");
})
dotenv.config();
dbConnect();

app.listen(PORT, () => {
  console.log(`Server is running at port: ${PORT}`);
});
