import Button from "@mui/material/Button";
import { useLoaderData } from "react-router-dom";
import Header from "./components/Header";
import EncountersList from "./components/EncountersList";
import WelcomeMessage from "./components/WelcomeMessage";
import "./App.css";
import "./styles/home.css";
import "./styles/welcomeMessage.css";

function App() {
  const encounters = useLoaderData();
  return (
    <main className="container home">
      <Header />
      <section className="main">
        <WelcomeMessage />
        <Button
          className="add-match-button"
          variant="contained"
          href="/add-match"
          color="warning"
        >
          Add a match
        </Button>
        <EncountersList encounters={encounters} />
      </section>
    </main>
  );
}

export default App;
