const express = require("express");

const path = require("path");

const app = express();

const PORT = 3000;

app.listen(PORT, () => {
   console.log(`Server has been started at port ${PORT}`);
 });