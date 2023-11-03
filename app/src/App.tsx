import { useState } from "react";

import "./App.css";
import { StartScreen } from "./components/StartScreen";
import { GameScreen } from "./components/GameScreen";
import { Nav } from "./components/Nav";
import { Footer } from "./components/Footer";

function App() {
  const [showApp, setShowApp] = useState<true | false>(false);

  return (
    <>
      <header>{showApp && <Nav setShowApp={setShowApp} />}</header>

      {!showApp ? <StartScreen setShowApp={setShowApp} /> : <GameScreen />}

      <Footer />
    </>
  );
}

export default App;
