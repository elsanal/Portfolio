import React from 'react'
import {Profile} from '../../Components/Style-Components/ImageView'
import {ResumeWrapper,ResumeCol,ResumeRow,Level,Box,
    Title,SubTitle,LevelContainer} from '../../Components/Style-Components/Resume-style'
import Button from '../../Components/Style-Components/Button'
import Linked from '../../Components/Style-Components/Linked'
import {Description,DescBody} from '../../Components/Style-Components/Description'
import {Span} from '../../Components/Style-Components/Title'


import web from '../../Database/images/web2.jpg'
import mobile from '../../Database/images/mobile.jpg'
import phone from '../../Database/images/phone.png'
import phone1 from '../../Database/images/phone1.png'
import edu1 from '../../Database/images/elsone-prof.jpeg'
import edu2 from '../../Database/images/alex-elsone.JPG'

function Resume() { 
    return (
        <ResumeWrapper >
            <ResumeCol mxwidth="350px" backgroundColor="#D4BA64FA">
              <ResumeCol width="100%" >
                    <Profile src={edu1} width="70%"/>
                    <Title>SANA ALOUTE</Title>
                    <Span color="white">Electronic Information Technology Engineer</Span>
              </ResumeCol>
              <ResumeCol width="100%" >
                    <Title color="white" backgroundColor="#030303FA">Contacts</Title>
                    <Box height="20px"/>
                    <Span color="white">✉️ Email : elsanal1995@gmail.com</Span>
                    <Box height="15px"/>
                    <Span color="white">📞 Phone : +86 131 4139 2484</Span>
                    <Box height="15px"/>
                    <Span color="white">🏛 Adress : Beijing,China zhichunlu road, dayuncun</Span>
              </ResumeCol>
              <ResumeCol >
                    <Box height="20px" width="300px"/>
                    <Title color="white" backgroundColor="#20121FFA">Languages</Title>
                    <Box height="20px" width="300px"/>
                    <ResumeRow>
                        <Span color="white">Languages</Span>
                        <Span color="white">Level</Span>
                    </ResumeRow>
                    <Box height="15px" width="300px"/>
                    <ResumeRow>
                        <Span color="white">English</Span>
                        <Span color="white">Advanced</Span>
                    </ResumeRow>
                    <Box height="15px" width="300px"/>
                    <ResumeRow>
                        <Span color="white">French</Span>
                        <Span color="white">Native</Span>
                    </ResumeRow>
                    <Box height="15px" width="300px"/>
                    <ResumeRow>
                        <Span color="white">Chinese</Span>
                        <Span color="white">Intermediate</Span>
                    </ResumeRow>
                    <Box height="20px" width="300px"/>
                    <ResumeRow>
                        <Span color="white">Mooré</Span>
                        <Span color="white">Advanced</Span>
                    </ResumeRow>
                    <Box height="20px" width="300px"/>
                    <ResumeRow>
                        <Span color="white">Yaana</Span>
                        <Span color="white">Native</Span>
                    </ResumeRow>
                    <Box height="20px" width="300px"/>
              </ResumeCol>
            </ResumeCol>
            <ResumeCol  >
                    <Title backgroundColor="black" color="white">Skills</Title>
                    <ResumeRow>
                        <ResumeCol>
                            <ResumeRow><Span>HTML</Span><Span>100%</Span></ResumeRow> 
                            <LevelContainer ><Level width="100%"></Level></LevelContainer>
                        </ResumeCol>
                        <ResumeCol>
                            <ResumeRow><Span>CSS</Span><Span>90%</Span></ResumeRow> 
                            <LevelContainer ><Level width="90%"></Level></LevelContainer>
                        </ResumeCol>
                        <ResumeCol>
                            <ResumeRow><Span>Flutter</Span><Span>80%</Span></ResumeRow> 
                            <LevelContainer ><Level width="80%"></Level></LevelContainer>
                        </ResumeCol>
                        <ResumeCol>
                            <ResumeRow><Span>Python</Span><Span>85%</Span></ResumeRow> 
                            <LevelContainer ><Level width="85%"></Level></LevelContainer>
                        </ResumeCol>
                        <ResumeCol>
                            <ResumeRow><Span>ReactJs</Span><Span>75%</Span></ResumeRow> 
                            <LevelContainer ><Level width="75%"></Level></LevelContainer>
                        </ResumeCol>
                        <ResumeCol>
                            <ResumeRow><Span>C</Span><Span>80%</Span></ResumeRow> 
                            <LevelContainer ><Level width="80%"></Level></LevelContainer>
                        </ResumeCol>
                        <ResumeCol>
                            <ResumeRow><Span>Firebase</Span><Span>95%</Span></ResumeRow> 
                            <LevelContainer ><Level width="95%"></Level></LevelContainer>
                        </ResumeCol>
                        <ResumeCol>
                            <ResumeRow><Span>MySQL</Span><Span>85%</Span></ResumeRow> 
                            <LevelContainer ><Level width="85%"></Level></LevelContainer>
                        </ResumeCol>
                        <ResumeCol>
                            <ResumeRow><Span>JavaScript</Span><Span>80%</Span></ResumeRow> 
                            <LevelContainer ><Level width="80%"></Level></LevelContainer>
                        </ResumeCol>
                    </ResumeRow>
                    <ResumeCol width="100%">
                        <Title backgroundColor="black" color="white">Experiences</Title>
                        <ResumeRow><Span>
                            ● For ma graduation project, i have built an AI algorithm to process 
                            optical signals very fast. 
                        </Span></ResumeRow>
                        <ResumeRow><Span>● Built Android apps and released on Google play(Campus+, YenPuz, YenMusic).</Span></ResumeRow>
                        <ResumeRow><Span>● I have worked on different web app design projects using 
                                            ReactJs, Firebase database. I have developed a website for 
                                            music streaming, a E-commerce web App, a website and admin console 
                                            to share information about Universities, Scholarships, Jobs...
                        </Span></ResumeRow>
                        
                    </ResumeCol>
            </ResumeCol>
        </ResumeWrapper>
    )
}



export default Resume
