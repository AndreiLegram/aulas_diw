const express = require("express");
const requireDir = require("require-dir");
const cors = require("cors");

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());

requireDir("./models");

const db = require("./config/database");
const MovieModel = require("./models/Movie");

const initApp = async () => {
    console.log("Testing the database connection..");
    try {
        await db.authenticate();
        console.log("Connection has been established successfully.");

        MovieModel.sync({ alter: true });

        app.use("/api", require("./routes"));

        app.listen(port, () => {
            console.log(`Server is running at: http://localhost:${port}`);
        });
    } catch (error) {
        console.error("Unable to connect to the database:", error.original);
    }
};

initApp();
