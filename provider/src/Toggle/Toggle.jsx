import React from "react";
import { ThemeCtx } from "../context/ThemeContext";

function Toggle() {
  const { useContextTheme } = ThemeCtx;

  const { changeTheme } = useContextTheme();
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
