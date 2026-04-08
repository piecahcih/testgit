import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Welcome to api!");
});
app.get("/users", (req, res) => res.send("User list"));
app.get("/benjy", (req, res) => res.send("benjy"));
app.get("/peach", (req, res) => res.send("peach"));
app.get("/testjaaabypeach", (req, res) => res.send("peach"));
app.get("/hahaha", (req, res) => res.send("hahaha"));
app.get("/ohlaaaa", (req, res) => res.send("ohlaaaa"));
app.get("/error", (req, res) => res.send("peachadderror"));

app.use((req, res, next) => {
  console.log("Log Request");
  next();
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
