import "./App.css";
import LandingPage from "./pages/LandingPage";
import { CounterContext } from "./components/CounterContext";
import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  return (
    <div className="App">
      <CounterContext.Provider value={{ counter, setCounter }}>
        <LandingPage />
      </CounterContext.Provider>
    </div>
  );
}

export default App;
