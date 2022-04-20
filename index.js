const express = require("express");
const app = express();
const path = require("path");

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));




app.get("/", (req, res) => {
    res.render("index");
});

app.get("/home", (req, res) => {
    res.send("Metias");
});

app.listen(3000, ()=>
    console.log("Servidor rodando em http://localhost:3000")
);