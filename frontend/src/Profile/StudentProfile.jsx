import { useState } from "react";
import "./StudentProfile.css";
import placeholder from "../assets/placeholder.png";
import { useNavigate } from "react-router-dom";
import  badge1 from "../assets/badge1.png"
import  badge2 from "../assets/badge2.png"
import  badge3 from "../assets/badge3.png"
import  badge4 from "../assets/badge4.png"

export default function StudentProfile() {
  const userName = useState("Smart Badger");
  const points = useState(27323);
  const name = useState("Alissa");

  const navigate = useNavigate();

  const goToGamePage = () => {
    navigate("/caesar-cipher-game");
    return null;
  };

  return (
    <div>
      <div className="studentProfile">
        <div className="studentCard">
          <img
            src={placeholder}
            alt="student"
            style={{ width: "65%", borderRadius: "50%" }}
          />
          <h2>{userName}</h2>
          <h3>{name}</h3>
          <p>Active Since: 2023</p>
          <p>Challenges won: 35</p>
        </div>
        <div className="studentRank">
          <div className="points">
            <p>Your Points:</p>
            <h2 className="point">{points}</h2>
          </div>
          <div className="badges">
            <p>Badges: </p>
            <table>
                <tbody>
                    <tr>
                        <td>
                            <img src={badge1} alt={`Badge 1`} style={{ width: "50px", height: "50px" }} />
                        </td>
                        <td>
                            <img src={badge2} alt={`Badge 2`} style={{ width: "50px", height: "50px" }} />
                        </td>
                        <td>
                            <img src={badge3} alt={`Badge 3`} style={{ width: "50px", height: "50px" }} />
                        </td>
                    </tr>
                    <tr>
                    <td>
                            <img src={badge4} alt={`Badge 4`} style={{ width: "50px", height: "50px" }} />
                        </td>
                    </tr>
                </tbody>
            </table>
          </div>
        </div>
      </div>
      <button onClick={goToGamePage}>Start a challenge</button>
    </div>
  );
}
