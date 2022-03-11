const express = require("express");
const app = express();

const connected = require("./connection.js");

connected.then(()=>{
    console.log("connected!");
    const server = app.listen(8080, ()=>console.log("listening"));
});

app.use(express.json());

app.use(express.static("public"));

app.use(express.urlencoded({extended: true}));

const route = require("./routes/index.js");

app.use('/api/v1',route);

app.get('/', (req, res)=>{
    res.send("testing!");
});