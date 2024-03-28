import React, { useState } from 'react'
import "./SchoolProfile.css"
import school_logo from "../assets/school.jpeg"
import badge5 from "../assets/badge5.png"
import badge6 from "../assets/badge6.png"
import badge7 from "../assets/badge7.png"
import badge8 from "../assets/badge8.png"


export default function SchoolProfile() {
    const schoolName = useState("St Johns School")
    const schoolScore = useState(532555)
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
                    <table>
                        <tbody>
                            <tr>
                                <td>
                                    <img src={badge5} alt={`Badge 1`} style={{ width: "50px", height: "50px" }} />
                                </td>
                                <td>
                                    <img src={badge6} alt={`Badge 2`} style={{ width: "50px", height: "50px" }} />
                                </td>
                                <td>
                                    <img src={badge7} alt={`Badge 3`} style={{ width: "50px", height: "50px" }} />
                                </td>
                                <td>
                                    <img src={badge8} alt={`Badge 3`} style={{ width: "50px", height: "50px" }} />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div >

    );
}