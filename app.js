const express = require("express");
const app = express();
const port = 5000;

app.get("/", (req, res) => res.send("Hello World"));
app.get("/hi", (req, res) => res.send("hi"));

app.listen(port, () => console.log(`Port ${port}`));
