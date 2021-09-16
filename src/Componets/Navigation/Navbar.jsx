import React,{useState} from 'react'
import {Link} from 'react-router-dom'

function Navbar() {
    return (
        <>
<div className="navbar">
    <div className="navbar-conatiner">
        <Link className="navbar-logo" to='./#'> TRVL <i className="fab fa-typo3"></i></Link>
    </div>
</div>
        </>
    )
}

export default Navbar
