import { useState } from "react";
import "./App.css";

function App() {
  const colors = ["green", "yellow", "red"];
  const [lightColor, setLightColor] = useState(0);
  const changeLight = () => {
    // cycle through the array, going back to the first index when it reaches the last index
    setLightColor((prevColor) => (prevColor + 1) % colors.length);
  };

  return (
    <div className="App" onClick={changeLight}>
      <h1>Change light color on click</h1>
      <div className={lightColor === 2 ? "light red" : "light"}></div>
      <div className={lightColor === 1 ? "light yellow" : "light"}></div>
      <div className={lightColor === 0 ? "light green" : "light"}></div>
    </div>
  );
}

export default App;
