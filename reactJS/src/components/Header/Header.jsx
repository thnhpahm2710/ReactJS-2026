import React from 'react'
import './header.css'
function Header() {
    return (
        <div className="header">
            <div className="logo-header">
                <img src="../../assets/react.svg" alt="logo-header" />
            </div>
            <div className="navigate-header">
                <a href=""> &lt; </a>
                <span>SoftLand</span>
                <a href=""> &gt; </a>
            </div>
            <div className="download-header">
                <a href="">Download</a>
            </div>
        </div>
    )
}

export default Header