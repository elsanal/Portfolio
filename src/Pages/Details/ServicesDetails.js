import React, { useEffect, useState } from "react";
import { Wrapper } from "../../Components/Style-Components/Wrapper";
import { Image } from "../../Components/Style-Components/ImageView";
import { ColCard, RowCard } from "../../Components/Style-Components/CardView";
import { DescBody } from "../../Components/Style-Components/Description";
import db from "../../Database/Firebase";
import ReactHtmlParser from "html-react-parser";
import { useParams } from "react-router-dom";
import {Title} from '../../Components/Style-Components/Title'
import Loading from "../../Components/Style-Components/Loading";

function ServiceDetails() {
  const [detail, setDetail] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    db.collection("services")
      .doc(id)
      .onSnapshot((snapshot) => setDetail(snapshot.data()));
  }, [detail]);

  //   func paragraphs(props){
  //     const text = props.text;
  //     const para = text.split("</p>").map(str =><p>{str}</p>);
  //     return para
  //   }

  // if(detail.length!=0){
  //   const text = detail['description'];
  //   const para = paragraphs(text);
  //   console.log(para.length)
  // }
  if (!detail) {
    return <Loading />;
  }
  return (
    <Wrapper>
      {detail && (
        <RowCard>
          <ColCard width="300px">
            <Image src={detail["images"][0]["src"]["src"]} />
            <Title backgroundColor="transparent" color="black">
              {detail["name_english"]}
            </Title>
            <DescBody>
              {ReactHtmlParser(detail["description_english"])}
            </DescBody>
            <RowCard>
              {detail["images"].map((image) => (
                <Image src={image["src"]["src"]} />
              ))}
            </RowCard>
          </ColCard>
        </RowCard>
      )}
    </Wrapper>
  );
}

export default ServiceDetails;
