const express = require("express");
const app = express();
const path = require("node:path");
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));

const newRouter = require("./routes/newRouter");
const MessageRouter = require("./routes/MessageRouter");
app.use("/", newRouter);
app.use("/message", MessageRouter );

app.listen(4000, (error) =>{

    if (error){
        throw error;
    }
});
