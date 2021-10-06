import React, {useEffect,useState} from 'react'
import {Wrapper} from '../../Components/Style-Components/Wrapper'
import {Profile} from '../../Components/Style-Components/ImageView'
import {Span,Title} from '../../Components/Style-Components/Title'
import {DescBody} from '../../Components/Style-Components/Description'
import {RowCard,ColCard} from '../../Components/Style-Components/CardView'
import db from '../../Database/Firebase'
import ReactHtmlParser  from 'html-react-parser'
import Loading from "../../Components/Style-Components/Loading";

 function About() {
    const [about, setAbout] = useState([]);

    useEffect(() => {
      db.collection("about")
      .orderBy("createdate", "asc")
      .limit(1)
      .onSnapshot((snapshot) =>
        setAbout(
          snapshot.docs.map((doc) =>    
          ({
            id:doc.id,
            data:doc.data()
          })
          )
        )
      )
    },[]);
    if (!about) {return <Loading/>;}
    return (
        <Wrapper>
          {
            about && about.map((item,index)=>(
            <RowCard>
              <ColCard width="300px">
                      <Profile 
                      src= {item['data']['src']['src']}
                      width="50%"/>
                      <Span color="black">Web and Mobile App Developper <br/>
                      ★<br/>
                  Electronic Information Technology Engineer <br/>
                  ★<br/>
                  Master student in Computer Science (AI - Computer Vision)</Span>
              </ColCard>
              <ColCard width="300px">
                      <Title>About Me</Title>
                      <DescBody>{ReactHtmlParser(item['data']['about_english'])}</DescBody>     
              </ColCard>
             </RowCard>
            ))
          }
             
        </Wrapper>
    )
}


export default About
