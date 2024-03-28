import React, { useState } from "react";
import "./StudentProfile.css"
import placeholder from "../assets/placeholder.png"


export default function StudentProfile() {
    const userName = useState("Smart Badger")
    const points = useState(27323)
    const name = useState("Alissa")

    
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
            <button>Start a challenge</button>
        </div>

    )
}