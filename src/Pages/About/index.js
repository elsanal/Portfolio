import React from 'react'
import './style.css'
import AboutMe from '../../Constants/About'
import profile from '../../Database/images/graduation.JPG'
import edu1 from '../../Database/images/elsone-prof.jpeg'
import edu2 from '../../Database/images/alex-elsone.JPG'
import styled from 'styled-components'
import {Wrapper} from '../../Components/Style-Components/Wrapper'
import {Description, DescBox, DescBody} from '../../Components/Style-Components/Description'
import {Profile} from '../../Components/Style-Components/ImageView'
import Title from '../../Components/Style-Components/Title'
import {ColCard,RowCard} from '../../Components/Style-Components/CardView'

function About() {
    return (
        <Wrapper>
            <RowCard>
                <Profile src={edu1}/>
                <AboutBody>{AboutMe.presentation}</AboutBody>
            </RowCard>
            

            <Description color={'#11554FC0'}>
                <Title>Education</Title>
                <AboutSubTitle> 👉 Beihang University</AboutSubTitle>
                <AboutBody>{AboutMe.china}</AboutBody>
            </Description>
            <Profile src={edu2}/>
            <Profile src={edu1}/>
            <Description color={'#114555C0'}>
                <Title>Education</Title>
                <AboutSubTitle>👉 National Tsing Hua University</AboutSubTitle>
                <AboutBody>{AboutMe.taiwan}</AboutBody>
            </Description>
            
        </Wrapper>
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
    background-color:#0C0B0BF5;
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
