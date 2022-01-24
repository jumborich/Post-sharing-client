const express = require("express");
const path = require("path");

const app = express();

app.use(express.static(path.join(__dirname, "./build")));

app.get(
  /\.(js|css|map|ico|json|txt|html)$/,
  express.static(path.join(__dirname, "./build"))
)

app.use("/*", (req, res, next) =>{
  res.send(path.join(__dirname, "./build/index.html"));
})

// react-scripts start
app.listen(3001, () => console.log('listening on...3001'));