const db = require("./db");
const express = require("express");
const bodyParser = require('body-parser');
const router = require("./routes/index")
const userRouter = require('./routes/users')
const cors = require('cors')
const app = express();

app.use(cors())

const hostname = '127.0.0.1';
const port = 3000;

app.use(bodyParser.json())

app.use("/users", userRouter)
app.use("/", router)

db.sequelize
    .authenticate()
    .then(() => {
        app.listen(port, hostname, () => {
            console.log("Server runing successfully")
        })
    })
    .catch(() => {
        console.log("Error running the server")
    })
