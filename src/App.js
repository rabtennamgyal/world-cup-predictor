import Header from "./components/header";
import Content from "./components/content";
import Knockout from "./components/knockout";
import { useState } from "react";


function App() {
  const [roundOne, setroundOne] = useState(true);
  const [roundTwo, setroundTwo] = useState(false);


  return (
    <div className="App">
      <Header />
      {roundOne && <Content setroundOne={setroundOne} setroundTwo={setroundTwo} />}
      {roundTwo && <Knockout setroundOne={setroundOne} setroundTwo={setroundTwo} />}
    </div>
  );
}

export default App;
