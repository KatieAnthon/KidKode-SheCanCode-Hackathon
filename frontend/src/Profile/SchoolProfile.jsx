import React,{ useState } from 'react'


export default function SchoolProfile() {
    const schoolName = useState("School Name")
    const schoolScore = useState("School Score")
    return (
        <div className='school-profile' stype={{ backgroundColour: '#eee' }}>
            <h1 className="justify-content-center">{schoolName}</h1>
            <form className=''>
                <div>
                    <img src={currentSchool.schoolLogo} alt='school logo' className=''/>

                    <TextInput type={schoolName} id='schoolName' placeholder='school name' defaultValue={currentSchool.schoolName}/>
                    <dev>
                        <TextInput type={schoolScore} id='schoolScore' placeholder='school score' defaultValue={currentSchool.schoolScore}/>
                        <img src={currentSchool.schoolbadges} alt='school badges' className='school badges'/>
                    </dev>
                </div>
            </form>
        </div >
    );
}