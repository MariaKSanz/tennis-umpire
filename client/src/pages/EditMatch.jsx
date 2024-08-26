import { useLoaderData } from "react-router-dom";
import { TextField } from "@mui/material";
import Button from "@mui/material/Button";
import Header from "../components/Header";
import "../styles/editMatch.css";

function EditMatch() {
  const encounter = useLoaderData();
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
            label="Name"
            variant="outlined"
            value={encounter.score}
            fullWidth
          />
          <TextField
            label="Last Name"
            variant="outlined"
            value={encounter.p1Firstname}
            fullWidth
          />
          <Button variant="contained" color="primary" type="submit">
            Submit
          </Button>
        </form>
      </section>
    </div>
  );
}

export default EditMatch;
