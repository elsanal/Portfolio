import React, { useEffect, useState } from "react";
import { Wrapper } from "../../Components/Style-Components/Wrapper";
import { Image2 } from "../../Components/Style-Components/ImageView";
import { ColCard, RowCard } from "../../Components/Style-Components/CardView";
import { Title } from "../../Components/Style-Components/Title";
import Loading from "../../Components/Style-Components/Loading";
import db from "../../Database/Firebase";
import { Link } from "react-router-dom";

function Projects() {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    db.collection("projects")
      .orderBy("createdate", "asc")
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
    return <Loading />;
  }

  return (
    <Wrapper>
      {projects &&
        projects.map((item) => (
          <Link style={{textDecoration: "none", color: "black"}} to={"/project+details/" + item["id"]}>
            <ColCard width={"100%"}>
              <RowCard color="#FFFFFFFB">
                <Image2 src={item["data"]["images"][0]["src"]["src"]} />
                <Image2 src={item["data"]["images"][1]["src"]["src"]} />
              </RowCard>
              <Title>{item["data"]["title"]}</Title>
            </ColCard>
          </Link>
        ))}
    </Wrapper>
  );
}

export default Projects;
