import React, { useEffect, useState } from "react";
import { Wrapper } from "../../Components/Style-Components/Wrapper";
import { Image2 } from "../../Components/Style-Components/ImageView";
import { ColCard, RowCard } from "../../Components/Style-Components/CardView";
import { Title } from "../../Components/Style-Components/Title";
import Loading from "../../Components/Style-Components/Loading";
import Linked from "../../Components/Style-Components/Linked";
import {
  Description,
  DescBody,
} from "../../Components/Style-Components/Description";
import db from "../../Database/Firebase";
import ReactHtmlParser from "html-react-parser";
import { useParams } from "react-router-dom";

function ProjectDetails() {
  const [project, setProject] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    db.collection("projects")
      .doc(id)
      .onSnapshot((snapshot) => setProject(snapshot.data()));
  }, []);
  if (!project) {
    return <Loading />;
  }

  return (
    <Wrapper>
      {project && (
        <ColCard width={"100%"}>
          <RowCard color="#3C633CFA">
            <Description>
              <Title>{project["title"]}</Title>
              <DescBody>{ReactHtmlParser(project["description"])}</DescBody>
            </Description>
            <Description>
              <Title>Technologies used : </Title>
              <DescBody>{ReactHtmlParser(project["technologie"])}</DescBody>
            </Description>
            <Description>
              <Title>For more info :</Title>
              <DescBody>
                {project["socials"].map((social) => (
                  <Linked href={social["link"]} color={"#080808"}>
                    {social["social"]}
                  </Linked>
                ))}
              </DescBody>
            </Description>
          </RowCard>
          <RowCard>
            {project["images"].map((image) => (
              <Image2 src={image["src"]["src"]} />
            ))}
          </RowCard>
        </ColCard>
      )}
    </Wrapper>
  );
}

export default ProjectDetails;
