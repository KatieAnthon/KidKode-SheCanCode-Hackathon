import React, { useState } from "react";

export default function StudentProfile() {
    const isLoggedIn = useState(true)
    const userName = useState("placeholder")
    const points = useState(3333)
    const name = useState("placeholder name")
    return (
        <div>
            <p>UserName: </p> {userName}
            <p>Name: </p> {name}
            <p>Points: </p> {points}
            <p>Badges: </p> 

        </div>
    )
}