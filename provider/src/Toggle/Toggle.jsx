import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

function Toggle() {
  const { changeTheme } = useContext(ThemeContext);

  return (
    <section>
      <div>
        <label className="switch" htmlFor="toggle-theme">
          <input
            type="checkbox"
            name=""
            id="toggle-theme"
            onClick={changeTheme}
          />
          <span className="slider round"></span>
        </label>
      </div>
    </section>
  );
}

export default Toggle;
