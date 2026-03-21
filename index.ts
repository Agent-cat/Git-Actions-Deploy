import express from "express";
const app = express();
const port = process.env.PORT ?? 8080;

app.get("/", (req, res) => {
  res.json({ msg: "Hello from server" });
});

app.listen(port, () => {
  console.log("Server is running");
});
