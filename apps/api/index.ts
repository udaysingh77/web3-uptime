import express from "express";

const app = express();

app.post("/api/v1/website", (req, res) => {

});


app.get("/api/v1/website/status", (req, res) => {

});


app.get("/api/v1/websites", (req, res) => {

});


app.delete("/api/v1/website", (req, res) => {

});




app.listen(3000, () => {
    console.log("Server started on port 3000");
});