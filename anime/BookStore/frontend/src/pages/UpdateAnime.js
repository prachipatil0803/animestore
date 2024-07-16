import React, { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./UpdateAnime.css";

function UpdateAnime() {
  const { id } = useParams(); // Get the id from URL
  const [name, setName] = useState("");
  const [episodes, setEpisodes] = useState("");
  const [season, setSeason] = useState("");
  const [description, setDescription] = useState("");
  const [memo, setMemo] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    const animeData = {
      name,
      episodes,
      season,
      description,
    };
    try {
      const res = await axios.put(
        `http://localhost:3000/api/update/${id}`,
        animeData
      );
      if (res.status === 200) {
        console.log("Success");
        setMemo("Updated Successfully");
      } else {
        console.log("Failed");
        setMemo("Updating Failed");
      }
    } catch (error) {
      console.error("Error:", error.message);
      setMemo("Update failed. Unable to connect to the server.");
    }
  }

  return (
    <div className="update-anime-container">
      <form onSubmit={handleSubmit} className="update-anime-form">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          value={name}
          name="name"
          id="name"
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="episodes">Episodes:</label>
        <input
          type="text"
          value={episodes}
          name="episodes"
          id="episodes"
          onChange={(e) => setEpisodes(e.target.value)}
        />
        <label htmlFor="season">Season:</label>
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
        <input type="submit" value="Update" className="submit-button" />
      </form>
      <p className="memo">{memo}</p>
    </div>
  );
}

export default UpdateAnime;
