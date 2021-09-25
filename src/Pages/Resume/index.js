import React, { useEffect, useState } from "react";
import { Profile } from "../../Components/Style-Components/ImageView";
import {
  ResumeWrapper,
  ResumeCol,
  ResumeRow,
  Level,
  Box,
  Title,
  LevelContainer,
} from "../../Components/Style-Components/Resume-style";
import { Span } from "../../Components/Style-Components/Title";
import db from "../../Database/Firebase";
import ReactHtmlParser from "html-react-parser";

function Resume() {
  const [resume, setResume] = useState([]);

  useEffect(() => {
    db.collection("resume")
      .orderBy("createdate", "asc")
      .limit(1)
      .onSnapshot((snapshot) =>
        setResume(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        )
      );
  }, []);
  if (!resume) {
    return <h2>Loading...</h2>;
  }

  return (
    <ResumeWrapper>
      {resume &&
        resume.map((item) => (
          <div>
            <ResumeCol mxwidth="350px" backgroundColor="#D4BA64FA">
              <ResumeCol width="100%">
                <Profile src={item["data"]["src"]["src"]} width="70%" />
                <Title>SANA ALOUTE</Title>
                <Span color="white">
                  Electronic Information Technology Engineer
                </Span>
              </ResumeCol>
              <ResumeCol width="100%">
                <Title color="white" backgroundColor="#030303FA">
                  Contacts
                </Title>
                <Box height="20px" />
                <Span color="white">✉️ Email : elsanal1995@gmail.com</Span>
                <Box height="15px" />
                <Span color="white">📞 Phone : +86 131 4139 2484</Span>
                <Box height="15px" />
                <Span color="white">
                  🏛 Adress : Beijing,China zhichunlu road, dayuncun
                </Span>
              </ResumeCol>
              <ResumeCol>
                <Box height="20px" width="300px" />
                <Title color="white" backgroundColor="#20121FFA">
                  Languages
                </Title>
                <Box height="20px" width="300px" />
                <ResumeRow>
                  <Span color="white">Languages</Span>
                  <Span color="white">Level</Span>
                </ResumeRow>
                <Box height="15px" width="300px" />
                {item["data"]["languages"].map((lang) => (
                  <ResumeRow>
                    <Span color="white">{lang["language"]}</Span>
                    <Span color="white">{lang["level"]}</Span>
                  </ResumeRow>
                ))}
                <Box height="20px" width="300px" />
              </ResumeCol>
            </ResumeCol>
            <ResumeCol>
              <Title backgroundColor="black" color="white">
                Skills
              </Title>
              <ResumeRow>
                {item["data"]["skills"].map((skill) => (
                  <ResumeCol>
                    <ResumeRow>
                      <Span>{skill["title"]}</Span>
                      <Span>{skill["level"]}</Span>
                    </ResumeRow>
                    <LevelContainer>
                      <Level width={skill["level"]}></Level>
                    </LevelContainer>
                  </ResumeCol>
                ))}
              </ResumeRow>
              <ResumeCol width="100%">
                <Title backgroundColor="black" color="white">
                  Experiences
                </Title>
                {item["data"]["experiences"].map((experience) => (
                  <ResumeRow>
                    {ReactHtmlParser(experience["experience"])}
                  </ResumeRow>
                ))}
              </ResumeCol>
            </ResumeCol>
          </div>
        ))}
    </ResumeWrapper>
  );
}

export default Resume;
