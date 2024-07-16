// models/Wishlist.js

const mongoose = require("mongoose");

const wishlistSchema = new mongoose.Schema({
  animeId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Anime",
  },
  name: String,
  episodes: Number,
  season: String,
  description: String,
});

module.exports = mongoose.model("Wish", wishlistSchema);
