require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3002;
// const Router = require("./Router/route")







const initMongoDB = require('./DBconfig/DB');
initMongoDB();
// app.use(Router);
// app.use("/api/files", require('./router/route'))




app.listen(PORT, console.log(`Listening on port ${PORT}.`));