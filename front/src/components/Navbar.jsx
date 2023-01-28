import React from 'react'
import { Link } from "react-router-dom";
import '../app.scss'
const Navbar = () => {
  return (
    <nav>
        <div className="nav__logo">
            <img src="https://preview.colorlib.com/theme/course/images/logo.png" alt="" />
            <h1>COURSE</h1>
        </div>
        <div className="nav__btns">
        <button><Link to='/'>HOME</Link></button>
        <button> ABOUT US</button>
        <button> COURSES</button>
        <button> ELEMENTS</button>
        <button> NEWS</button>
        <button><Link to='/add'>ADD</Link></button>
        </div>
        <div className="nav__number">
            <img src="https://preview.colorlib.com/theme/course/images/phone-call.svg" alt="" />
            <p>+91 999999999</p>
        </div>
    </nav>
  )
}

export default Navbar