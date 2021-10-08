import React, { useEffect, useState } from "react";
import { Wrapper } from "../../Components/Style-Components/Wrapper";
import { Image } from "../../Components/Style-Components/ImageView";
import { ColCard, RowCard } from "../../Components/Style-Components/CardView";
import Linked from "../../Components/Style-Components/Linked";
import { BlogTitle } from "../../Components/Style-Components/Title";
import Loading from "../../Components/Style-Components/Loading";
import {
  DescBody,
  DescBox,
} from "../../Components/Style-Components/Description";
import db from "../../Database/Firebase";
import ReactHtmlParser from "html-react-parser";
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
            <BlogTitle>{item["data"]["title"]}</BlogTitle>
            <Image src={item["data"]["images"][1]["src"]["src"]} />
            <DescBox>
              <DescBody>
                {ReactHtmlParser(item["data"]["description"])}
              </DescBody>
            </DescBox>
            <Link to={"/blog+details/" + item["id"]} key={item["id"]}>
              <Linked color={"#080808"}>Read more</Linked>
            </Link>
          </ColCard>
        ))}
    </Wrapper>
  );
}

export default Blogs;
