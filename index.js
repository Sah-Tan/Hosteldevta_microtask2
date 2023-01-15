const express = require("express");
var cors = require("cors");
const app = express();
const port = 5000;
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => res.send("This is an API created by me for microtask3 given by hosteldevta"));
app.use("/location", require("./Location/api"));

app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});
// export 'app'
module.exports = app;
