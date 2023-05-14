import { ThemeProvider } from "./context/ThemeContext";

import Toggle from "./Toggle/Toggle";
import List from "./List/List";
import "./App.css";

function App() {
  // console.log("Valor del contexto", useContext(ThemeContext));
  // const { ThemeProvider } = useContext(ThemeContext);

  return (
    <>
      {/* <div className={`App theme-${theme}`}> */}
      <div className={`App theme-`}>
        <ThemeProvider>
          <Toggle />
          <List />
        </ThemeProvider>
      </div>
    </>
  );
}

export default App;
