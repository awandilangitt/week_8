const express = require("express");
const bodyParser = require("body-parser");
const multer = require("multer");
require("dotenv").config();
// console.log(process.env.NODE_PORT);
const port = process.env.NODE_PORT;

const app = express();

function renameFile(oldNames) {
  const [filename, extensions] = oldNames.split(".");
  return `${filename}-${Date.now()}.${extensions}`;
  {
  }
  //   console.log(splitFileName[0]); // namafile
  //   console.log(splitFileName[1]); // format
}

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "uploads/"),
  filename: (req, file, cb) => cb(null, renameFile(file.originalname)),
});

const uploads = multer({ storage: storage });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.post("/register", uploads.single("profilePicture"), (req, res) => {
  console.log(req.body.nama);
  res.send(req.body);
});

app.listen(port, () => console.log(`this app is running on port ${port}`));
