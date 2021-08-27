import React from 'react'
import styled from 'styled-components'
import facebook from '../../Database/images/icons/facebook.jpg'
import youtube from '../../Database/images/icons/youtube.png'
import linkedin from '../../Database/images/icons/linkedin.png'
import instagram from '../../Database/images/icons/instagram.jpg'
import github from '../../Database/images/icons/github.png'
import profile from '../../Database/images/elsone-prof.jpeg'
import {Wrapper} from '../../Components/Style-Components/Wrapper'
import {Icon,Profile} from '../../Components/Style-Components/ImageView'
import {ColCard,RowCard} from '../../Components/Style-Components/CardView'
import {Title,Span} from '../../Components/Style-Components/Title'

function Contacts() {
    return (
        <Wrapper>
            <ColCard width="100%">
               <Profile src={profile} width="50%"/>
               <Span>Web & Mobile Apps Developper ★ Machine Learning ★ Electronic Information Engineer</Span>
            </ColCard>
            <RowCard>
            <ColCard width={"300px"}>
                <Title>★★★ Contacts ★★★</Title>
                    <Span>📞 Mobile : +86 131 4139 2484</Span> 
                    <Span>📬 Email : elsanal1995@gmail.com</Span>
            </ColCard>     
            <ColCard>
            <Title>★★★ Social Network ★★★</Title>  
            <SocialWrapper>
                <ContactCard>
                    <Icon src={facebook}/>
                    <Social href="https://www.facebook.com/ElsonXcode/">
                        Facebook
                    </Social>
                </ContactCard>
                <ContactCard>
                    <Icon src={youtube}/>
                    <Social href="https://www.youtube.com/channel/UCznjjnUE9kvHlg_pBobDm5Q/featured">
                        Youtube
                    </Social>
                </ContactCard>
                <ContactCard>
                    <Icon src={instagram}/>
                    <Social href="https://www.instagram.com/invites/contact/?i=1jiyq71lok1zw&utm_content=lk3c9oi">
                        Instagram
                    </Social>
                </ContactCard>
                <ContactCard>
                    <Icon src={linkedin}/>
                    <Social href="https://www.linkedin.com/in/aloute-sana-420732186/">
                        Linkedin
                    </Social>
                </ContactCard>
                <ContactCard>
                    <Icon src={github}/>
                    <Social href="https://github.com/elsanal?tab=repositories">
                        Github
                    </Social>
                </ContactCard>
            </SocialWrapper>
            </ColCard>  
            </RowCard>
        </Wrapper>
    )
}

const SocialWrapper = styled.div`
    display: flex;
    flex: 1 ;
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



const ContactCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-items: center;
    height:fit-content;
    width: fit-content;
    margin:10px;
`;

const Social = styled.a`
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: 0.6em;
    color: black;
    text-align: left;
    padding: 4.5%;
    text-decoration: none;
    margin-top: 5px;
    /* background-color: #272A29EC;   */
`;


export default Contacts
