import { ThemeCtx } from "./context/ThemeContext";
import Toggle from "./Toggle/Toggle";
import List from "./List/List";
import "./App.css";

function App() {
  const { ThemeContext } = ThemeCtx;
  // const { useContextTheme, ThemeContext } = ThemeCtx;
  // const { theme } = useContextTheme();

  return (
    <>
      {/* <div className={`App theme-${theme}`}> */}
      <div className={`App theme-`}>
        <ThemeContext>
          <Toggle />
          <List />
        </ThemeContext>
      </div>
    </>
  );
}

export default App;
