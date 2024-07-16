// ViewAnime.js

import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./ViewAnime.css";

function ViewAnime() {
  const [animeList, setAnimeList] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchAnime() {
      try {
        const res = await axios.get("http://localhost:3000/api/display");
        setAnimeList(res.data);
        setError("");
      } catch (error) {
        console.error("Error fetching anime:", error.message);
        setError("Failed to fetch anime. Please try again later.");
      } finally {
        setLoading(false);
      }
    }

    fetchAnime();
  }, []);

  const deleteAnime = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/api/delete/${id}`);
      setAnimeList(animeList.filter((anime) => anime._id !== id));
    } catch (error) {
      console.error("Error deleting anime:", error.message);
      setError("Failed to delete anime. Please try again later.");
    }
  };

  const updateAiredStatus = async (id, aired) => {
    try {
      const res = await axios.put(`http://localhost:3000/api/update/${id}`, {
        aired,
      });
      if (res.status === 200) {
        setAnimeList(
          animeList.map((anime) =>
            anime._id === id ? { ...anime, aired } : anime
          )
        );
      } else {
        setError("Failed to update aired status.");
      }
    } catch (error) {
      console.error("Error updating aired status:", error.message);
      setError("Failed to update aired status. Please try again later.");
    }
  };

  const navigateToUpdate = (id) => {
    navigate(`/update/${id}`);
  };

  const addToWishlist = async (anime) => {
    try {
      const { _id, name, episodes, season, description } = anime;
      await axios.post("http://localhost:3000/api/addToWishlist", {
        animeId: _id,
        name,
        episodes,
        season,
        description,
      });
      alert(`"${name}" added to wishlist!`);
    } catch (error) {
      console.error("Error adding to wishlist:", error.message);
      setError("Failed to add to wishlist. Please try again later.");
    }
  };

  return (
    <div className="view-anime-container">
      <h1>View Anime</h1>
      {loading ? (
        <p>Loading anime...</p>
      ) : error ? (
        <p className="error-message">{error}</p>
      ) : (
        <ul className="anime-list">
          {animeList.map((anime) => (
            <li key={anime._id} className="anime-item">
              <img src={anime.image} alt={anime.name} className="anime-image" />
              <div className="anime-details">
                <h2>{anime.name}</h2>
                <p>Episodes: {anime.episodes}</p>
                <p>Season: {anime.season}</p>
                <p>{anime.description}</p>
                <p>
                  Aired:
                  <select
                    value={anime.aired}
                    onChange={(e) =>
                      updateAiredStatus(anime._id, e.target.value)
                    }
                    className="aired-select"
                  >
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                  </select>
                </p>
                <button
                  onClick={() => deleteAnime(anime._id)}
                  className="delete-button"
                >
                  Delete
                </button>
                <button
                  onClick={() => navigateToUpdate(anime._id)}
                  className="update-button"
                >
                  Update
                </button>
                <button
                  onClick={() => addToWishlist(anime)}
                  className="wishlist-button"
                >
                  Add to Wishlist
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ViewAnime;
