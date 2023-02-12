import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import RedButton from "./components/RedButton";
import BlueButton from "./components/BlueButton";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <BlueButton></BlueButton>
      <RedButton></RedButton>
    </div>
  );
}

export default App;
