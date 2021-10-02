import React, { useEffect, useState } from "react";
import { Wrapper } from "../../Components/Style-Components/Wrapper";
import { Image } from "../../Components/Style-Components/ImageView";
import { ColCard, RowCard } from "../../Components/Style-Components/CardView";
import { Title } from "../../Components/Style-Components/Title";
import Linked from "../../Components/Style-Components/Linked";
import {
  Description,
  DescBody,
} from "../../Components/Style-Components/Description";
import db from "../../Database/Firebase";
import ReactHtmlParser from "html-react-parser";

function Projects() {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    db.collection("projects")
      .orderBy("createdate", "asc")
      .limit(1)
      .onSnapshot((snapshot) =>
        setProjects(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        )
      );
  }, []);
  if (!projects) {
    return <h2>Loading...</h2>;
  }

  return (
    <Wrapper>
      {projects &&
        projects.map((item) => (
          <ColCard width={"100%"} >
            <RowCard>
              <Description>
                <Title>{item["data"]["title"]}</Title>
                <DescBody>
                  {ReactHtmlParser(item["data"]["description"])}
                </DescBody>
              </Description>
              <Description>
                <Title>Technologies used : </Title>
                <DescBody>
                  {ReactHtmlParser(item["data"]["technologie"])}
                </DescBody>
              </Description>
              <Description>
                <Title>For more info :</Title>
                <DescBody>
                  {item["data"]["socials"].map((social) => (
                    <Linked href={social["link"]} color={"#080808"}>
                      {social["social"]}
                    </Linked>
                  ))}
                </DescBody>
              </Description>
            </RowCard>
            <RowCard>
              {item["data"]["images"].map((image) => (
                <Image src={image["src"]["src"]} />
              ))}
            </RowCard>
          </ColCard>
        ))}
    </Wrapper>
  );
}

export default Projects;
