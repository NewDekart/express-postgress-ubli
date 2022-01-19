const express = require("express");
const userRouter = require("./routes/user.routes");
const postRouter = require("./routes/post.routes");

const PORT = process.env.PORT || "8080";

const app = express();

app.use(express.json());
app.use("/api", userRouter);
app.use("/api", postRouter);

app.listen(PORT, () => {
    console.log(`The server has been started succesfully on port: ${PORT}`);
});