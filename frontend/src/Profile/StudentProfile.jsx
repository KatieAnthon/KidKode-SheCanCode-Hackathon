import React, { useState } from "react";
import "./StudentProfile.css"
import placeholder from "../assets/placeholder.jpg"


export default function StudentProfile() {
    const userName = useState("placeholder")
    const points = useState(3333)
    const name = useState("placeholder name")
    return (
        <div>
            <div className="studentProfile">
                <div className="studentCard">
                    <img src={placeholder} alt="student" style={{width: "65%", borderRadius: "50%"}} />
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
            </div>
            <button>Start a challenge</button>
        </div>

    )
}