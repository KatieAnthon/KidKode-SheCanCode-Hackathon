import "./App.css";
import KidkodeHeader from "./Header/Header";
import Leaderboard from "./Leaderboard/Leaderboard";
import Login from "./Login/Login";

function App() {
  return (
    <>
      <div className="container">
        <div className="header">
          <KidkodeHeader />
        </div>
        <div className="column">
          <Leaderboard />
        </div>
        <div className="login">
          <div className="column">
            <Login />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
