import React from 'react'

const Settings = ({hidden}) => {
  return (
    <div className='settings' style={{display: hidden? "none": ""}}>
        <h1>Settings</h1>
        <p>User Specific Settings are defined here!</p>
    </div>
  )
}

export default Settings