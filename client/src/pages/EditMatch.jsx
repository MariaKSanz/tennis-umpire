import { useLoaderData } from "react-router-dom";
import { TextField } from "@mui/material";
import Button from "@mui/material/Button";
import { useEffect, useState } from "react";
import axios from "axios";
import Header from "../components/Header";
import "../styles/editMatch.css";
import PlayerSelect from "../components/PlayerSelect";

function EditMatch() {
  const encounter = useLoaderData();
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    const fetchPlayers = async () => {
      // Fetch all players for the select options
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/api/players`
        ); // Replace with your players endpoint
        setPlayers(response.data);
      } catch (error) {
        console.error("Error fetching players:", error);
      }
    };
    fetchPlayers(); // Fetch players concurrently with encounter
  }); // Re-fetch data when the ID changes

  return (
    <div>
      <Header />
      <section className="edit-match-content">
        <div>{new Date(encounter.playedAt).toLocaleString()}</div>
        <div>{encounter.p1Firstname}</div>
        <div>{encounter.p1Lastname}</div>
        <div>{encounter.p2Firstname}</div>
        <div>{encounter.p2Lastname}</div>
        <div>{encounter.score}</div>
        <div>{encounter.wFirstname}</div>
        <div>{encounter.wLastname}</div>
      </section>
      <section className="edit-match-description">
        <form>
          <TextField
            label="score"
            variant="outlined"
            value={encounter.score}
            fullWidth
          />
          <TextField
            label="Last Name"
            variant="outlined"
            value={encounter.p1Lastname}
            fullWidth
          />
          <PlayerSelect players={players} />
          <Button variant="contained" color="primary" type="submit">
            Save
          </Button>
        </form>
      </section>
    </div>
  );
}

export default EditMatch;
