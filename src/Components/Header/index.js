import React from 'react'
import './style.css'
import styled from 'styled-components'


function Header() {
    return (
        <div className='header'>
            <ul>
                <li><HeaderLink href="/about">About Me</HeaderLink></li>
                <li><HeaderLink href="/projects">Projects</HeaderLink></li>
                <li><HeaderLink href="/services">Services</HeaderLink></li>
                <li><HeaderLink href="/blogs">Blogs</HeaderLink></li>
                <li><HeaderLink href="/contacts">Contacts</HeaderLink></li>
            </ul>
        </div>
    )
}

const HeaderLink = styled.a`
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: 1.3vw;
    color: white;
    text-align: left;
    padding: 4.5%;
    text-decoration: none;
    /* background-color: #272A29EC; */
    
`;

export default Header
