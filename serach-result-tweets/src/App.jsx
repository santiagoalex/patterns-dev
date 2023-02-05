import SearchResult from "./components/TwetSearchResults";
import mock from "./assets/mock-data.json";

import "./App.css";

function App() {
  return (
    <div className="App">
      <SearchResult tweets={mock} />
    </div>
  );
}

export default App;
