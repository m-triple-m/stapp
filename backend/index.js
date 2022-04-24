const express = require("express");
const app = express();
const userRouter = require("./routers/userRouter");
const crudRouter = require("./routers/crudRouter");
const utilRouter = require("./routers/util");
const cors = require("cors");

const port = 5000;

// middleware
app.use(
  cors({
    origin: ["http://localhost:3000"],
  })
);

app.use(express.json());

app.use("/user", userRouter);
app.use("/crud", crudRouter);
app.use("/util", utilRouter);

// route
app.get("/", (req, res) => {
  res.send("You have requested on API");
  console.log("request at root");
});

// route
app.get("/home", (req, res) => {
  res.send("You have requested on Home");
  console.log("request at home");
});

app.use(express.static("./static"));

app.listen(port, () => {
  console.log("server started");
});
