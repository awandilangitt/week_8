const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const port = process.env.PORT || 3700;

const mongo = {
  username: process.env.MONGO_USER,
  password: process.env.MONGO_PASSWORD,
  database: process.env.MONGO_DB,
  cluster: process.env.MONGO_CLUSTER,
};

(async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://awan:awan123@binarminiproject.ibge3.mongodb.net/miniproject?retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
      }
    );
  } catch (error) {
    return console.log(error);
  }

  const MovieSchema = new mongoose.Schema({
    title: String,
    genre: String,
  });

  const MovieModels = mongoose.model("movies", MovieSchema);

  const app = express();
  app.use(express.json());

  // Create movies
  app.post("/movies", async (req, res) => {
    const payload = req.body;

    await MovieModels.create(payload);

    return res.json({ message: "success add new movie", data: payload });
  });

  app.listen(port, () => console.log("app running on port 3700"));
})();
