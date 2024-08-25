import "./App.css";
import "./styles/home.css";
import Button from "@mui/material/Button";
import { useLoaderData } from "react-router-dom";
import Header from "./components/Header";
import EncountersList from "./components/EncountersList";
import WelcomeMessage from "./components/WelcomeMessage";

function App() {
  const encounters = useLoaderData();
  return (
    <main className="container home">
      <Header />
      <WelcomeMessage />
      <Button variant="contained" href="/add-match">
        Add a match
      </Button>
      <EncountersList encounters={encounters} />
    </main>
  );
}

export default App;
