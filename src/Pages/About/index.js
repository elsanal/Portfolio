import React from 'react'
import './style.css'
import AboutMe from '../../Constants/About'
import profile from '../../Database/images/graduation.JPG'
import edu1 from '../../Database/images/elsone-prof.jpeg'
import edu2 from '../../Database/images/alex-elsone.JPG'
import styled from 'styled-components'


function About() {
    return (
        <AboutWrapper>
            <AboutImage src={profile}/>
            <AboutDescription color={'#13395CC0'}>
                <AboutTitle>About Me!</AboutTitle>
                <AboutBody>{AboutMe.presentation}</AboutBody>
            </AboutDescription>
            <AboutDescription color={'#11554FC0'}>
                <AboutTitle>Education</AboutTitle>
                <AboutSubTitle> 👉 Beihang University</AboutSubTitle>
                <AboutBody>{AboutMe.china}</AboutBody>
            </AboutDescription>
            <AboutImage src={edu2}/>
            <AboutImage src={edu1}/>
            <AboutDescription color={'#114555C0'}>
                <AboutTitle>Education</AboutTitle>
                <AboutSubTitle>👉 National Tsing Hua University</AboutSubTitle>
                <AboutBody>{AboutMe.taiwan}</AboutBody>
            </AboutDescription>
            
        </AboutWrapper>
    )
}

const AboutWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-items: space-between;
    flex-direction: row;
    flex-wrap:wrap;
    min-height: 90vh;
    height:fit-content;
    width:100%;
    background-color:#161313C0;
`;

const AboutImage = styled.img`
    height:30vw;
    width: 30vw;
    margin:1%;
    object-fit: cover;
    border-radius:50% 50%;
`;
const AboutDescription = styled.div`
    height:fit-content;
    width:45vw;
    margin: 1%;
    background-color:${props=>props.color};

`;

const AboutTitle = styled.h2`
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: 2vw;
    color: white;
    text-align: center;
`;
const AboutSubTitle = styled.h2`
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: 2vw;
    color: white;
    text-align: left;
`;

const AboutBody = styled.h3`
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: 1.3vw;
    color: white;
    text-align: left;
    word-spacing: 0.5vw;
    line-height: 2.5vw;
    padding: 1.5%;
`;




export default About
