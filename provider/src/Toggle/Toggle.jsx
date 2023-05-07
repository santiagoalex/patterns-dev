import React from "react";
import { ThemeCtx } from "../context/ThemeContext";

function Toggle() {
  const { useContextTheme } = ThemeCtx;
  const { ChangeTheme } = useContextTheme();
  console.log("ChangeTheme", useContextTheme());
  console.log("ChangeTheme2", ChangeTheme());

  return (
    <section>
      <div>
        <label className="switch" htmlFor="toggle-theme">
          <input
            type="checkbox"
            name=""
            id="toggle-theme"
            onClick={ChangeTheme()}
          />
          <span className="slider round"></span>
        </label>
      </div>
    </section>
  );
}

export default Toggle;
