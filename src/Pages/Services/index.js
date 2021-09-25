import React, {useEffect,useState} from 'react'
import {Wrapper} from '../../Components/Style-Components/Wrapper'
import {Image} from '../../Components/Style-Components/ImageView'
import {ColCard,RowCard} from '../../Components/Style-Components/CardView'
import {Title} from '../../Components/Style-Components/Title'
import {DescBody} from '../../Components/Style-Components/Description'
import db from '../../Database/Firebase'
import ReactHtmlParser  from 'html-react-parser'

function Services() {

    const [services, setServices] = useState([]);

    useEffect(() => {
      db.collection("services")
      .orderBy("createdate", "asc")
      .onSnapshot((snapshot) =>
        setServices(
          snapshot.docs.map((doc) =>    
          ({
            id:doc.id,
            data:doc.data()
          })
          )
        )
      )
    },[]);
    if(!services) {return <h2>Loading...</h2>}

    return (
        <Wrapper>
            {
                services && services.map((item)=>(
                <RowCard>
                    <ColCard >
                        <RowCard>
                        {
                            item['data']['images'].map((image)=>(
                                <Image src={image['src']['src']}/>
                            ))
                        }
                        </RowCard>
                        <Title backgroundColor="transparent" color="black">Web Development</Title>
                        <DescBody>{ReactHtmlParser(item['data']['description_english'])}</DescBody>
                    </ColCard>
                </RowCard>
                ))
            }
            
        </Wrapper>
    )
}



export default Services
