import React, { useState } from "react";
import "./StudentProfile.css"

export default function StudentProfile() {
    const userName = useState("placeholder")
    const points = useState(3333)
    const name = useState("placeholder name")
    return (
        <div className="StudentProfile">
            <div className="studentCard">
                <img src="img.jpg" alt="John" style={{ width: "100%" }} />
                <h1>{userName}</h1>
                <h3>{name}</h3>
                <p>Active Since: </p>
                <p>Challenges won: </p>
            </div>
            <div className="studentRank">
                <div className="points">
                    <p>Your Points: </p>
                    {points}
                </div>
                <div className="badges">
                    <p>Badges: </p> 
                </div>
            </div>
            <button>Start a challenge</button>
        </div>
    )
}