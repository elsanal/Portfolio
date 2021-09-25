import React, { useEffect, useState } from "react";
import { Wrapper } from "../Components/Style-Components/Wrapper";
import { Image } from "../Components/Style-Components/ImageView";
import { ColCard, RowCard } from "../Components/Style-Components/CardView";
import { Title } from "../Components/Style-Components/Title";
import {DescBody,} from "../Components/Style-Components/Description";
import db from "../Database/Firebase";
import ReactHtmlParser from "html-react-parser";
import {useParams} from "react-router-dom";
 

function BlogDetails() {
  const [detail, setDetail] = useState(null);
  const {id} = useParams();
  console.log(`${id}`);
  useEffect(() => {
     db.collection("blogs").doc(`${id}`)
     .onSnapshot((snapshot)=>setDetail(snapshot.data()));
    
  }, []);
  if (!detail) {
    return <h2>Loading...</h2>;
  }
  return (
    <Wrapper>
      {detail &&
        <ColCard width={"300px"}>
        <Title>{detail["title"]}</Title>
        <RowCard>
          {detail["images"].map((image) => (
            <Image src={image["src"]["src"]} />
          ))}
        </RowCard>
        <DescBody>{ReactHtmlParser(detail['description'])}</DescBody>
      </ColCard>
        }
    </Wrapper>
  );
}

export default BlogDetails;
