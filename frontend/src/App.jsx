import "./App.css";
import StudentProfile from "./Profile/StudentProfile";
import CaesarCipherGame from "./Game/CaesarCipherGame";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<StudentProfile />} />
        <Route path="/caesar-cipher-game" element={<CaesarCipherGame />} />
      </Routes>
    </Router>
  );
}

export default App;
