import React, { useState } from "react";
import "./StudentProfile.css"
import placeholder from "../assets/placeholder.png"
import { Redirect } from "react-router-dom";
import CaesarCipherGame from "../Game/CaesarCipherGame";


export default function StudentProfile() {
    const userName = useState("Smart Badger")
    const points = useState(27323)
    const name = useState("Alissa")
    const [redirectToAnotherPage, setRedirectToAnotherPage] = useState(false);

    if (redirectToAnotherPage) {
        return <Redirect to={CaesarCipherGame} />;
    }
    
    return (
        <div>
            <div className="studentProfile">
                <div className="studentCard">
                    <img src={placeholder} alt="student" style={{width: "65%", borderRadius: "50%"}} />
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
                    </div>
                </div>
            </div>
            <button onClick={() => setRedirectToAnotherPage(true)}>Start a challenge</button>
        </div>

    )
}