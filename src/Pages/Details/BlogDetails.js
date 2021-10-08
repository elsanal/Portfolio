import React, { useEffect, useState } from "react";
import { Wrapper } from "../../Components/Style-Components/Wrapper";
import { Image } from "../../Components/Style-Components/ImageView";
import { ColCard, RowCard } from "../../Components/Style-Components/CardView";
import { DetailTitle } from "../../Components/Style-Components/Title";
import {DescBody,} from "../../Components/Style-Components/Description";
import db from "../../Database/Firebase";
import ReactHtmlParser from "html-react-parser";
import {useParams} from "react-router-dom";
import Loading from "../../Components/Style-Components/Loading";
 

function BlogDetails() {
  const [detail, setDetail] = useState(null);
  const {id} = useParams();
  useEffect(() => {
     db.collection("blogs").doc(id)
     .onSnapshot((snapshot)=>setDetail(snapshot.data()));
    
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
  if (!detail) {return <Loading/>;}
  return (
    <Wrapper>
      {detail &&
        <ColCard >
        <DetailTitle>{detail["title"]}</DetailTitle>
        {/* <span>{new Date(detail['lastupdate'].seconds*1000).toLocaleDateString("en-US")}</span> */}
        <Image src={detail["images"][0]["src"]["src"]} />
        <DescBody>
          {ReactHtmlParser(detail['description'])}
          <Image src={detail["images"][1]["src"]["src"]} />
          </DescBody>
      </ColCard>
        }
    </Wrapper>
  );
}



export default BlogDetails;
