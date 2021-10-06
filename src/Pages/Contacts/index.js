import React, {useEffect,useState} from 'react'
import styled from 'styled-components'
import facebook from '../../Database/images/icons/facebook.jpg'
import youtube from '../../Database/images/icons/youtube.png'
import linkedin from '../../Database/images/icons/linkedin.png'
import instagram from '../../Database/images/icons/instagram.jpg'
import github from '../../Database/images/icons/github.png'
import {Wrapper} from '../../Components/Style-Components/Wrapper'
import {Icon,Profile} from '../../Components/Style-Components/ImageView'
import {ColCard,RowCard} from '../../Components/Style-Components/CardView'
import {Title,Span} from '../../Components/Style-Components/Title'
import db from '../../Database/Firebase'
import Loading from "../../Components/Style-Components/Loading";

function Contacts() {


    const [contacts, setContacts] = useState([]);

    useEffect(() => {
      db.collection("contacts")
      .orderBy("createdate", "asc")
      .limit(1)
      .onSnapshot((snapshot) =>
        setContacts(
          snapshot.docs.map((doc) =>    
          ({
            id:doc.id,
            data:doc.data()
          })
          )
        )
      )
    },[]);
    if(!contacts) {return <h2>Loading...</h2>}
    if (!contacts) {return <Loading/>;}
    return (
        <Wrapper>
            {
                contacts && contacts.map((item,index)=>(
                   <div>
                       <ColCard width="100%">
               <Profile src={item['data']['src']['src']} width="50%;"/>
               <Span color="black">Web and Mobile App Developper <br/>
                      ★<br/>
                  Electronic Information Technology Engineer <br/>
                  ★<br/>
                  Master student in Computer Science (AI - Computer Vision)</Span>
            </ColCard>
            <RowCard>
            <ColCard width={"300px"}>
                <Title>★★★ Contacts ★★★</Title>
                    <Span>📞 Mobile : {item['data']['phone']}</Span> 
                    <Span>📬 Email : {item['data']['email']}</Span>
            </ColCard>     
            <ColCard>
            <Title>★★★ Social Network ★★★</Title>  
            <SocialWrapper>
                <ContactCard href={item['data']['fb_link']}>
                    <Icon src={facebook}/>
                    <Social href={item['data']['fb_link']}>
                        Facebook
                    </Social>
                </ContactCard>
                <ContactCard href={item['data']['yt_link']}>
                    <Icon src={youtube}/>
                    <Social href={item['data']['yt_link']}>
                        Youtube
                    </Social>
                </ContactCard>
                <ContactCard href={item['data']['ig_link']}>
                    <Icon src={instagram}/>
                    <Social href={item['data']['ig_link']}>
                        Instagram
                    </Social>
                </ContactCard>
                <ContactCard href={item['data']['linkedIn_link']}>
                    <Icon src={linkedin}/>
                    <Social href={item['data']['linkedIn_link']}>
                        Linkedin
                    </Social>
                </ContactCard>
                <ContactCard href={item['data']['git_link']}>
                    <Icon src={github}/>
                    <Social href={item['data']['git_link']}>
                        Github
                    </Social>
                </ContactCard>
            </SocialWrapper>
            </ColCard>  
            </RowCard>
                   </div> 
                ))
            }
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



const ContactCard = styled.a`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-items: center;
    height:fit-content;
    width: fit-content;
    margin:10px;
    text-decoration: none;
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
