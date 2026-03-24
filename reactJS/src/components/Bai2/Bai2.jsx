import { useState } from 'react'
import './Toggle.css'

function Toggle() {
  const [isOn, setIsOn] = useState(false)

  const handleToggle = () => {
    setIsOn(!isOn)
  }

  return (
    <div className={`toggle-container ${isOn ? 'toggle-on' : 'toggle-off'}`} onClick={handleToggle}>
      <span className="toggle-label">{isOn ? 'ON' : 'OFF'}</span>
      <div className="toggle-circle"></div>
    </div>
  )
}

export default Toggle
