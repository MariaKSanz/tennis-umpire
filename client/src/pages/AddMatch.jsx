import { useState } from "react";
import { TextField } from "@mui/material";
import Header from "../components/Header";
import "../styles/addMatch.css";

function AddMatch() {
  const [setMatchString] = useState("");

  const handleFormSubmit = (event) => {
    event.preventDefault();

    // Perform validation or additional processing on matchString if needed
    setMatchString("");
  };

  return (
    <div className="add-match">
      <Header />
      <h1>Form</h1>
      <form onSubmit={handleFormSubmit}>
        <label htmlFor="matchInput">Enter the match details </label>
        <TextField id="outlined-basic" label="Tournament" variant="outlined" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default AddMatch;
