// jshint esversion: 6

import "express";
import bodyParser from "body-parser";

const app = express.app();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.send("Hello!");
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});