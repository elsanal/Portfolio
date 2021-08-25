import React from 'react'
import {ResumeWrapper} from '../../Components/Style-Components/Wrapper'
import {Image} from '../../Components/Style-Components/ImageView'
import {ColCard,RowCard} from '../../Components/Style-Components/CardView'
import {Title} from '../../Components/Style-Components/Title'
import Button from '../../Components/Style-Components/Button'
import Linked from '../../Components/Style-Components/Linked'
import {Description,DescBody} from '../../Components/Style-Components/Description'


import web from '../../Database/images/web2.jpg'
import mobile from '../../Database/images/mobile.jpg'
import phone from '../../Database/images/phone.png'
import phone1 from '../../Database/images/phone1.png'
import edu1 from '../../Database/images/elsone-prof.jpeg'
import edu2 from '../../Database/images/alex-elsone.JPG'

function Resume() {
    return (
        <ResumeWrapper>
            <ColCard >
               <Title>Skills</Title>
               <Title>Languages</Title>
               <Title>Experiences</Title>
               <Title></Title> 
            </ColCard>
        </ResumeWrapper>
    )
}



export default Resume
