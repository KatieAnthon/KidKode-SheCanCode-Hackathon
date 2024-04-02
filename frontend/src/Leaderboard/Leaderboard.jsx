import { useState, useEffect } from "react";
import "./Leaderboard.css";
import leaderboardData from "./leaderboardData.json";

const Leaderboard = () => {
  const [leaderboard, setLeaderboard] = useState(leaderboardData.json);

  useEffect(() => {
    const fetchLeaderboard = async () => {
      try {
        // Simulating an API call with a 2-second delay
        await new Promise((resolve) => setTimeout(resolve, 2000));
        setLeaderboard(leaderboard);
        console.log(leaderboardData);
      } catch (error) {
        console.error("Error fetching leaderboard:", error);
      }
    };

    fetchLeaderboard();
  }, []);

  return (
    <div className="leaderboard-main">
      <h2 className="leaderbaord-title">Top 10 Schools</h2>
      <table className="leaderbaord-table">
        <thead>
          <tr>
            <th>Rank</th>
            <th>School</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody className="leaderboard-data">
          {leaderboardData.map((entry, index) => (
              
            <tr key={entry.school} className="leaderboard-row">
              <td>{index + 1}</td>
              <td>{entry.school}</td>
              <td>{entry.score}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Leaderboard;
