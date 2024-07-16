// WishlistPage.js

import React, { useState, useEffect } from "react";
import axios from "axios";
import "./WishlistPage.css"; // Optional: Add your wishlist page styles here

function WishlistPage() {
  const [wishlist, setWishlist] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchWishlist() {
      try {
        const res = await axios.get("http://localhost:3000/api/wishlist");
        setWishlist(res.data);
        setError("");
      } catch (error) {
        console.error("Error fetching wishlist:", error.message);
        setError("Failed to fetch wishlist. Please try again later.");
      } finally {
        setLoading(false);
      }
    }

    fetchWishlist();
  }, []);

  return (
    <div className="wishlist-container">
      <h1>My Wishlist</h1>
      {loading ? (
        <p>Loading wishlist...</p>
      ) : error ? (
        <p className="error-message">{error}</p>
      ) : (
        <ul className="wishlist-list">
          {wishlist.map((anime) => (
            <li key={anime._id} className="wishlist-item">
              <div className="wishlist-details">
                <h2>{anime.name}</h2>
                <p>Episodes: {anime.episodes}</p>
                <p>Season: {anime.season}</p>
                <p>{anime.description}</p>
              </div>
            </li>
          ))}
        </ul>
      )}
      {wishlist.length === 0 && <p>Your wishlist is empty.</p>}
    </div>
  );
}

export default WishlistPage;
