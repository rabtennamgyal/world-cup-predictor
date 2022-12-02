import Header from "./components/header";
import Content from "./components/content";
import Knockout from "./components/knockout";
import { useState } from "react";

function App() {
  const [roundOne, setroundOne] = useState(true);
  const [roundTwo, setroundTwo] = useState(false);
  const [teams, setTeams] = useState([]);

  return (
    <div className="App">
      <Header />
      {roundOne && (
        <Content
          setroundOne={setroundOne}
          setroundTwo={setroundTwo}
          teams={teams}
          setTeams={setTeams}
        />
      )}
      {roundTwo && <Knockout teams={teams} />}
    </div>
  );
}

export default App;
