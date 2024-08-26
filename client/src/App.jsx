import Button from "@mui/material/Button";
import { useLoaderData } from "react-router-dom";
import { useState } from "react";
import Header from "./components/Header";
import EncountersList from "./components/EncountersList";
import WelcomeMessage from "./components/WelcomeMessage";
import "./App.css";
import "./styles/home.css";
import "./styles/welcomeMessage.css";

function App() {
  const encounters = useLoaderData();
  const [encountersState, setEncounterState] = useState(encounters);
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
        <EncountersList encounters={encountersState} setEncounters={setEncounterState} />
      </section>
    </main>
  );
}

export default App;
