const mongoose = require("mongoose");

const animeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  episodes: { type: Number, required: true },
  season: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  aired: { type: String, required: true, enum: ["Yes", "No"] },
});

module.exports = mongoose.model("Anime", animeSchema);
