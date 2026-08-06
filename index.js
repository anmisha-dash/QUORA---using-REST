const express = require("express");
const app = express();
const port = 8080;
const path = require("path");

app.use(express.urlencoded({extended:true}));

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));

app.use(express.static(path.join(__dirname,"public")));

let posts = [
    {
        username : "Anmisha",
        content : "enjoy coding"
    },
    {
        username : "Shradha",
        content : "I Love coding!"
    },
    {
        username : "apnacollge",
        content : "hardwork always pays off"
    }
];

app.get("/posts/new",(req,res)=>{
    res.render("new.ejs");
});

app.post("/posts",(req,res)=>{
    let {username,content}=(req.body);
    posts.push({username,content});

    res.send("post request working");
})

app.get("/posts",(req,res)=>{
    res.render("index.ejs",{posts});
});

app.listen(port,()=>{
    console.log(`app is listening at ${port}`);
});