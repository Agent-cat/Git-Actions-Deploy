import express from "express";
const app = express();
const port = process.env.PORT ?? 8080;

app.get("/", (req, res) => {
  res.json({ msg: "Hello from server v2" });
});
app.get("/vishnu", (req, res) => {
  res.json({ msg: "Hi vishnu" });
});

app.listen(port, () => {
  console.log("Server is running");
});
