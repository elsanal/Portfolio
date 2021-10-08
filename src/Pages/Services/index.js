import React, { useEffect, useState } from "react";
import { Wrapper } from "../../Components/Style-Components/Wrapper";
import { Image } from "../../Components/Style-Components/ImageView";
import { ColCard, RowCard } from "../../Components/Style-Components/CardView";
import { Title } from "../../Components/Style-Components/Title";
import db from "../../Database/Firebase";
import Loading from "../../Components/Style-Components/Loading";
import { Link } from "react-router-dom";
function Services() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    db.collection("services")
      .orderBy("createdate", "asc")
      .onSnapshot((snapshot) =>
        setServices(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        )
      );
  }, []);
  if (!services) {
    return <Loading />;
  }

  return (
    <Wrapper>
      {services &&
        services.map((item) => (
          <RowCard>
            <Link style={{textDecoration: "none", color: "black"}} to={"/service+details/" + item["id"]}>
              <ColCard width="300px">
                <Image src={item["data"]["images"][0]["src"]["src"]} />
                <Title backgroundColor="transparent" color="black">
                  {item["data"]["name_english"]}
                </Title>
              </ColCard>
            </Link>
          </RowCard>
        ))}
    </Wrapper>
  );
}

export default Services;
