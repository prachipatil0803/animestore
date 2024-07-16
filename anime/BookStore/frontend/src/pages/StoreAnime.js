import React, { useState } from "react";
import axios from "axios";
import "./StoreAnime.css";

function StoreAnime() {
  const [name, setName] = useState("");
  const [episodes, setEpisodes] = useState("");
  const [season, setSeason] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [aired, setAired] = useState("Yes");
  const [memo, setMemo] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    const anime = {
      name,
      episodes,
      season,
      description,
      image,
      aired,
    };
    try {
      const res = await axios.post("http://localhost:3000/api/store", anime);
      if (res.status === 200) {
        console.log("Success");
        setMemo("Anime stored successfully!");
      } else {
        console.log("Failed");
        setMemo("Failed to store anime.");
      }
    } catch (error) {
      console.error("Error:", error.message);
      setMemo("Failed to store anime. Unable to connect to the server.");
    }
  }

  return (
    <div className="store-anime-container">
      <form onSubmit={handleSubmit} className="store-anime-form">
        <label htmlFor="name">Name of the Anime:</label>
        <input
          type="text"
          value={name}
          name="name"
          id="name"
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="episodes">Number of Episodes:</label>
        <input
          type="text"
          value={episodes}
          name="episodes"
          id="episodes"
          onChange={(e) => setEpisodes(e.target.value)}
        />
        <label htmlFor="season">Current Season:</label>
        <input
          type="text"
          value={season}
          name="season"
          id="season"
          onChange={(e) => setSeason(e.target.value)}
        />
        <label htmlFor="description">Description:</label>
        <textarea
          value={description}
          name="description"
          id="description"
          onChange={(e) => setDescription(e.target.value)}
        />
        <label htmlFor="image">Image URL:</label>
        <input
          type="text"
          value={image}
          name="image"
          id="image"
          onChange={(e) => setImage(e.target.value)}
        />
        <label htmlFor="aired">Currently Aired:</label>
        <select
          value={aired}
          name="aired"
          id="aired"
          onChange={(e) => setAired(e.target.value)}
        >
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>
        <input type="submit" value="Store Anime" className="submit-button" />
      </form>
      <p className="memo">{memo}</p>
    </div>
  );
}

export default StoreAnime;
