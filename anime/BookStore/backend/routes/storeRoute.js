const express = require("express");
const {
  createAnime,
  displayAnime,
  deleteAnime,
  updateAnime,
} = require("../controllers/Anime"); // Adjusted import to anime controllers
const Wish = require("../models/Wishlist");

const router = express.Router();

router.post("/store", createAnime); // Endpoint to create a new anime
router.get("/display", displayAnime); // Endpoint to fetch all anime
router.delete("/delete/:id", deleteAnime); // Endpoint to delete an anime by ID
router.put("/update/:id", updateAnime); // Endpoint to update an anime by ID

// api.js

// Route to add an anime to the wishlist
router.post("/addToWishlist", async (req, res) => {
  try {
    const { animeId, name, episodes, season, description } = req.body;

    // Check if the anime already exists in the wishlist
    const existingWishlistItem = await Wish.findOne({ animeId });
    if (existingWishlistItem) {
      return res.status(400).json({ message: "Anime already in wishlist" });
    }

    // Create a new wishlist item
    const newWishlistItem = new Wish({
      animeId,
      name,
      episodes,
      season,
      description,
    });

    // Save the wishlist item to the database
    await newWishlistItem.save();

    res.status(201).json({ message: "Anime added to wishlist" });
  } catch (error) {
    console.error("Error adding to wishlist:", error);
    res.status(500).json({ message: "Failed to add to wishlist" });
  }
});

// Route to get all items in the wishlist
router.get("/wishlist", async (req, res) => {
  try {
    const wishlistItems = await Wish.find();
    res.status(200).json(wishlistItems);
  } catch (error) {
    console.error("Error fetching wishlist:", error);
    res.status(500).json({ message: "Failed to fetch wishlist" });
  }
});

module.exports = router;
