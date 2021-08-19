import React from 'react'
import './style.css'
import styled from 'styled-components'
import ml from '../../Database/images/1.jpg'
import electronic from '../../Database/images/2.jpg'
import mobile from '../../Database/images/mobile.jpg'
import web from '../../Database/images/web2.jpg'

function Services() {
    return (
        <ServiceWrapper>
            <Card>
                <Image src={mobile}/>
                <Description color={'#0D3744C0'}>
                    <Title>Mobile application</Title>
                    <Details>
                        Every year the number of mobile phone users increases 
                        exponentially. People in porest region of the world have 
                        access to the internet nowadays. If you have a business idea 
                        or you are already running a business, you absolutely need a 
                        mobile application to advertize your business. If you have a 
                        mobile application for your business or services, you will obviously 
                        increase your income.<br/> <br/> 
                        I have already built Android and iOS mobile applications of different 
                        kind. i have built mobile games, Music player application, Mobile 
                        Application for students information... Please check the projects section 
                        to see my different works.    
                    </Details>
                </Description>
            </Card>
            <Card>
                <Image src={web}/>
                <Description color={'#11554FC0'}>
                    <Title>Web Apps development</Title>
                    <Details>
                        In order to advertize your works, services or 
                        business, you need a website or web application.
                        a website will make your services more reliable and 
                        more accessible.<br/> <br/> 
                        For that, i could help you to build a very secure 
                        and professional website or web application depending 
                        on your need.     
                    </Details>
                </Description>
            </Card>
            <Card>
                <Image src={ml}/>
                <Description color={'#231155C0'}>
                    <Title>Machine Learning</Title>
                    <Details>
                        In order to advertize your works, services or 
                        business, you need a website or web application.
                        a website will make your services more reliable and 
                        more accessible.<br/> <br/> 
                        For that, i could help you to build a very secure 
                        and professional website or web application depending 
                        on your need.     
                    </Details>
                </Description>
            </Card>
            <Card>
                <Image src={electronic}/>
                <Description color={'#3F1155C0'}>
                    <Title>Electronic devices maintenance</Title> 
                    <Details>
                        In order to advertize your works, services or 
                        business, you need a website or web application.
                        a website will make your services more reliable and 
                        more accessible.<br/> <br/> 
                        For that, i could help you to build a very secure 
                        and professional website or web application depending 
                        on your need.     
                    </Details>
                </Description>
            </Card>
        </ServiceWrapper>
    )
}

const ServiceWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: row;
    flex-wrap:wrap;
    min-height: 90vh;
    height:fit-content;
    width:fit-content;
    background-color:#0C0B0BF5;
    transition: all 1s ease;
    transform: rotate(1turn);
`;
const Card = styled.div`
    display: flex;
    flex-direction: row;
    flex:1;
    align-items: top;
    justify-items: center;
    height:fit-content;
    width: fit-content;
    margin: 3%;
    /* padding:0%; */
    background-color:#A8A3A3C0;
    border-radius:3% 3% 3% 3%;
    transition: all 1s ease;
    transform: rotate(1turn);
`;
const Image = styled.img`
    /* height:25vw; */
    width: 35vw;
    padding:0%;
    margin: 0%;
    object-fit: cover;
    border-radius:3% 0% 0% 3%;
`;
const Description = styled.div`
    height:fit-content;
    align-items: center;
    flex: 1;
    margin: 1%;
    padding: 1%;
    background-color:${props=>props.color} ;
`;

const Title = styled.h2`
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: 2vw;
    color: white;
    text-align: center;
    background-color:#161414E3 ;
    margin:3%;
`;
const Details = styled.h2`
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: 1.5vw;
    color: white;
    text-align: left;
`;







export default Services
