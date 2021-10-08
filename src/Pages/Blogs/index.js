import React, { useEffect, useState } from "react";
import { Wrapper } from "../../Components/Style-Components/Wrapper";
import { Image } from "../../Components/Style-Components/ImageView";
import { ColCard} from "../../Components/Style-Components/CardView";
import { Title } from "../../Components/Style-Components/Title";
import Loading from "../../Components/Style-Components/Loading";
import Linked from "../../Components/Style-Components/Linked";
import db from "../../Database/Firebase";
import { Link } from "react-router-dom";

function Blogs() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    db.collection("blogs")
      .orderBy("createdate", "asc")
      .onSnapshot((snapshot) =>
        setBlogs(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        )
      );
  }, []);
  if (!blogs) {return <Loading/>;}
  return (
    <Wrapper>
      {blogs &&
        blogs.map((item) => (
          <ColCard width={"300px"}>
            <Link style={{textDecoration: "none", color: "black"}} to={"/blog+details/" + item["id"]} key={item["id"]}>
            <Image src={item["data"]["images"][1]["src"]["src"]} />
            <Title >{item["data"]["title"]}</Title>
            </Link>
          </ColCard>
        ))}
    </Wrapper>
  );
}

export default Blogs;
