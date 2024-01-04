import express from "express";
import dotenv from "dotenv";
import { Connection } from "./database/db.js";
import router from "./routes/routes.js";
dotenv.config();

const app = express();

app.use("/", router);

const PORT = 8000;
app.listen(PORT, () => console.log(`server is running on PORT ${PORT}`));

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;
Connection(USERNAME, PASSWORD);
