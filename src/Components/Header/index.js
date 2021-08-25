import React from 'react'
import './style.css'
import {HeaderWrapper} from '../Style-Components/Wrapper'
import HeaderUl from '../Style-Components/List'
import {NavLink} from 'react-router-dom'


function Header() {
    const activeStyle = {
        fontWeight:"bold",
        color:"white",
        backgroundColor:"#0C0B0BF5",
    }
    return (
        <HeaderWrapper>
            <HeaderUl>
                <NavLink to="/blogs" activeStyle={activeStyle} className="nav-link">Blogs</NavLink>
                <NavLink to="/projects" activeStyle={activeStyle} className="nav-link">Projects</NavLink>
                <NavLink to="/services" activeStyle={activeStyle} className="nav-link">Services</NavLink>
                <NavLink to="/resume" activeStyle={activeStyle} className="nav-link">Resume</NavLink>
                <NavLink to="/about" activeStyle={activeStyle} className="nav-link">About</NavLink>
                <NavLink to="/contacts" activeStyle={activeStyle} className="nav-link">Contacts</NavLink>
            </HeaderUl>
        </HeaderWrapper>
    )
}


export default Header
