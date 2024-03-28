import "./App.css";
import Leaderboard from "./Leaderboard/Leaderboard";
import Login from "./Login/login";

function App() {
  return (
    <>
      <div className="container">
        <Leaderboard />
        <div className="column">
          <h1>Welcome to SheCodes!</h1>
        </div>
        <div className="login-card">
          <div className="column">
            <Login />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
