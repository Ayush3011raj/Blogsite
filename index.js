import express from "express";

import bodyParser from "body-parser";

const app = express();
const port = 3000;
var trigger=0;

app.use(express.static("public"));


app.use(bodyParser.urlencoded({ extended: true }));
app.get("/",(req,res)=>{
    res.render("index.ejs");
});
app.get("/newpost",(req,res)=>{
    res.render("newpost.ejs",{
        newtrig:"0"
    });
});
var newpos="";
app.post("/newpost", (req, res) => {
    newpos= req.body["blog"];
    console.log(newpos);
    res.render("index.ejs",{
         newtrig:"1",
         newpose:newpos,
    });
  });
app.get("/edit",(req,res)=>{
    res.render("edit.ejs",{
        editcont:newpos
    });
});
app.post("/edit", (req, res) => {
    newpos= req.body["blog"];
    console.log(newpos);
    res.render("index.ejs",{
         newtrig2:"2",
         newpose2:newpos,
    });
});

app.get("/delete",(req,res)=>{
    res.render("delete.ejs");
});
app.post("/delete",(req,res)=>{
    var val= req.body["blog"];
    var trig="";
    if(val=="yes"){
        trig="0";
    }else{
        trig="1";
    }
    res.render("index.ejs",{
        newtrig:trig,
        newpose:newpos
    });

});

app.listen(port,()=>{
    console.log(`app is running on port ${port}`);
});

