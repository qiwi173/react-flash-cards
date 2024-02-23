require("@babel/register");

const express = require("express");

const path = require("path");

const app = express();

const PORT = 3000;

const indexRouter = require("./routes/index.router");
const ssr = require("./middleware/ssr");

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

app.use(ssr);

app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);

app.listen(PORT, () => {
  console.log(`Server has been started at port ${PORT}`);
});
