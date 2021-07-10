const jsonServer = require("json-server");
const app = jsonServer.create();
const path = require("path");
const express = require("express");
const middlewares = jsonServer.defaults();
const router = jsonServer.router(path.join(__dirname, "/data/db.json"));
const PORT = process.env.PORT || 5001;

app.use("/", middlewares, router);
app.use(express.static(path.resolve(__dirname, "../build")));

if (process.env.NODE_ENV === "production") {
    app.get("/*", function (req, res) {
        res.sendFile(path.resolve(__dirname, "../build/index.html"));
    });
}

app.listen(PORT, () => {
    console.log(`server listening to ${PORT}`);
});