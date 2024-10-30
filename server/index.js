const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello Priyanshu from the server");
});

const port = 5000;
app.listen(port, () => {
  console.log(`Priyanshu's Server is running on http://localhost:${port}`);
});