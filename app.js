import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Welcome to api!");
});
app.get("/user", (req, res) => res.send("User list"));

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
