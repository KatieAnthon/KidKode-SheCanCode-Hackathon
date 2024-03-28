import React, { useState } from 'react'
import "./SchoolProfile.css"
import placeholder from "../assets/placeholder.jpg"
import school_logo from "../assets/school.jpeg"


export default function SchoolProfile() {
    const schoolName = useState("placeholder")
    const schoolScore = useState(5555)
    return (
        <div className='schoolProfile'>
            <div>
                <img src={school_logo} alt='school logo' className='img' />
            </div>
            <div className='schoolProfile'>
                <p>{schoolName}</p>
            </div>
            <div className='schoolScore'>
                <div className='points'>
                    <p>{schoolScore}</p>
                </div>
                <div className='badges'>
                    <img src={badge} alt='school badges' className='badges' />
                </div>
            </div>
        </div >

    );
}