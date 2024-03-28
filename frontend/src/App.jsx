import "./App.css";
import Profile from "./Profile/Profile";
import CaesarCipherGame from "./Game/CaesarCipherGame";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Profile />} />
        <Route path="/caesar-cipher-game" element={<CaesarCipherGame />} />
      </Routes>
    </Router>
  );
}

export default App;
