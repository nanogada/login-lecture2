const express = require('express');
const app = express();


//라우팅
const home = require("./routes/home");

//app settting
app.set("views", "./views");
app.set("view engine", "ejs");
app.use("/", home);//use-> 미들웨어를 등록해주는 메서드.
app.use(express.static(`${__dirname}/public`));
module.exports = app;