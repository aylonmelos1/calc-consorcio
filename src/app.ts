import express from "express";
import 'dotenv/config'
import log from "./log";

const app = express();
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    log.debug(`Server running on port ${PORT}`)
})
