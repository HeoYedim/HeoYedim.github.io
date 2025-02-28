import { useState } from "react";
import "./App.css";
import Cover from "./components/Cover";
import Profile from "./components/Profile";

function App() {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(true);
  };

  return (
    <div className="App">
      <div className={`cover-container ${isFlipped ? "flipped" : ""}`}>
        {!isFlipped && <Cover onFlip={handleFlip} />}
      </div>
      {isFlipped && <Profile />}
      <div className="bottomRights">
        © 2025 Heo Yeorim. All rights reserved.
      </div>
    </div>
  );
}

export default App;
