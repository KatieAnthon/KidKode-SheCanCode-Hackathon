import Profile from "./Profile/Profile";
import CaesarCipherGame from "./Game/CaesarCipherGame";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./LandingPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/caesar-cipher-game" element={<CaesarCipherGame />} />
      </Routes>
    </Router>
  );
}

export default App;
