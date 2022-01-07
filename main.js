const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(cors());

const {selectMessage, addMessage} = require("./user");
const req = require("express/lib/request");

app.get("/messages", async(req,res)=>{
  const list = await selectMessage();
  res.json(list);
});

app.post("/add-messages", async(req,res)=>{
    const user = req.body;
    await addMessage(user);
    
    res.json({message:"messages added!!!"});
  });

  app.listen(4500,()=> console.log("server started"));

