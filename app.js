import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Welcome to api!");
});
app.get("/users", (req, res) => res.send("User list"));
app.get("/benjy", (req, res) => res.send("benjy"));

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
