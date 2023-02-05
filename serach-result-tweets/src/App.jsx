import { useState } from "react";
import reactLogo from "./assets/react.svg";
import SearchResult from "./components/TwetSearchResults";
import mock from "./assets/mock-data.json";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <SearchResult tweets={mock} />
    </div>
  );
}

export default App;
