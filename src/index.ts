import express from "express";

// Configure and start the HTTP server.
const app = express();
app.use(express.json());   // using integrated body-parser

app.listen(8090, () => console.log("Running"));