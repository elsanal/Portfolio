import React from 'react'
import './style.css'
import styled from 'styled-components'
import facebook from '../../Database/images/icons/facebook.jpg'
import youtube from '../../Database/images/icons/youtube.png'
import gmail from '../../Database/images/icons/gmail.png'
import linkedin from '../../Database/images/icons/linkedin.png'
import instagram from '../../Database/images/icons/instagram.jpg'
import github from '../../Database/images/icons/github.png'
import profile from '../../Database/images/elsone-prof.jpeg'

function Contacts() {
    return (
        <ContactWrapper>
            <Profile src={profile}/>
            <Span>Web & Mobile Apps Developper ★ Machine Learning ★ Electronician</Span>
            <Title>★★★ Contacts ★★★</Title>
                <Span>📞 Mobile : +86 131 4139 2484</Span> 
                <Span>✉️ GMail : elsanal1995@gmail.com</Span> 
            <Title>★★★ Social Network ★★★</Title>
            <SocialWrapper>
                <ContactCard>
                    <Image src={facebook}/>
                    <Social href="https://www.facebook.com/ElsonXcode/">
                        Facebook  
                    </Social>
                </ContactCard>
                <ContactCard>
                    <Image src={youtube}/>
                    <Social href="https://www.youtube.com/channel/UCznjjnUE9kvHlg_pBobDm5Q/featured">
                        Youtube
                    </Social>
                </ContactCard>
                <ContactCard>
                    <Image src={instagram}/>
                    <Social href="https://www.instagram.com/invites/contact/?i=1jiyq71lok1zw&utm_content=lk3c9oi">
                        Instagram
                    </Social>
                </ContactCard>
                <ContactCard>
                    <Image src={linkedin}/>
                    <Social href="https://www.linkedin.com/in/aloute-sana-420732186/">
                        Linkedin
                    </Social>
                </ContactCard>
                <ContactCard>
                    <Image src={github}/>
                    <Social href="https://github.com/elsanal?tab=repositories">
                        Github
                    </Social>
                </ContactCard>
            </SocialWrapper>
        </ContactWrapper>
    )
}

const SocialWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    justify-items: center;
    flex-direction: row;
    flex-wrap:wrap;
    /* min-height: 90vh; */
    height:fit-content;
    width:100%;
    /* background-color:#0C0B0BF5; */
`;

const ContactWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: column;
    flex-wrap:wrap;
    min-height: 90vh;
    height:fit-content;
    padding-bottom: 4%;
    width:100%;
    background-color:#050505F5;
`;

const ContactCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-items: center;
    height:fit-content;
    width: fit-content;
    margin:10px;
`;

const Image = styled.img`
    height:5vw;
    width: 5vw;
    padding:0%;
    margin: 0%;
    object-fit: cover;
    border-radius:5vw 5vw;
`;

const Profile = styled.img`
    height:25vw;
    width: 25vw;
    padding:0%;
    margin-top: 5%;
    object-fit: cover;
    border-radius:25vw 25vw;
    margin-bottom:2%;
`;

const Title = styled.h2`
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: 2vw;
    color: white;
    text-align: center;
    /* background-color:#161414E3 ; */
    margin-bottom:1%;
`;
const Span = styled.span`
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: 1.5vw;
    color: white;
    text-align: center;
    background-color:#161414E3 ;
    margin-bottom:1%;
`;
const Social = styled.a`
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: 1.3vw;
    color: white;
    text-align: left;
    padding: 4.5%;
    text-decoration: none;
    margin-top: 5px;
    /* background-color: #272A29EC;   */
`;





export default Contacts
