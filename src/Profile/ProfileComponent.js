import React from 'react'

function ProfileComponent({FullName,image,bio,profession,handleName}) {
    return (
        <div>
            {handleName(FullName)}
            <img src={image} alt="profilePic" />
            <h1>{FullName}</h1>
            <p>{bio}</p>
            <h2>{profession}</h2>
        </div>
    )
}

export default ProfileComponent
