import React, {useEffect,useState} from 'react'
import profile from '../../Database/images/elsone-prof.jpeg'
import {Wrapper} from '../../Components/Style-Components/Wrapper'
import {Profile} from '../../Components/Style-Components/ImageView'
import {Span,Title} from '../../Components/Style-Components/Title'
import {DescBody} from '../../Components/Style-Components/Description'
import {RowCard,ColCard} from '../../Components/Style-Components/CardView'
import db from '../../Database/Firebase'
import ReactHtmlParser  from 'html-react-parser'
// import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

 function About() {
    const [about, setAbout] = useState([]);

    const myDB = ()=>{
     db.collection("about")
      .orderBy("createdate", "asc")
      .onSnapshot((snapshot) =>
        setAbout(
          snapshot.docs.map((doc) =>
          ({
            id:doc.id,
            data:doc.data()
          })
          )
        )
      );
      // console.log(about)
    };
    
    useEffect(() => {
      myDB();
      console.log(about) 
      return ()=>{
        myDB();
      }},[]);
    return (
        <Wrapper>
             <RowCard>
             <ColCard width="300px">
                    <Profile 
                    src= {
                      about.length!==0?about[0]['data']['src']['src']:profile
                    } 
                    width="50%"/>
                    <Span color="black">Web & Mobile Apps Developper ★ Machine Learning ★ Electronic Information Engineer</Span>
            </ColCard>
            <ColCard width="300px">
                    <Title>About Me</Title>
                    {
                    about.length!==0?
                    <DescBody>{ReactHtmlParser(about[0]['data']['about_english'])}</DescBody>:
                    <DescBody>{ReactHtmlParser(about[0]['data']['about_english'])}</DescBody>
                    }
                    
            </ColCard>
             </RowCard>
        </Wrapper>
    )
}


export default About
