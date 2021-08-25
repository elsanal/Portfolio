import React from 'react'
import AboutMe from '../../Constants/About'
import profile from '../../Database/images/elsone-prof.jpeg'
import {Wrapper} from '../../Components/Style-Components/Wrapper'
import {Profile} from '../../Components/Style-Components/ImageView'
import {Span,Title} from '../../Components/Style-Components/Title'
import {DescBody} from '../../Components/Style-Components/Description'
import {RowCard,ColCard} from '../../Components/Style-Components/CardView'

function About() {
    return (
        <Wrapper>
             <RowCard>
             <ColCard width="300px">
                    <Profile src={profile}/>
                    <Span color="black">Web & Mobile Apps Developper ★ Machine Learning ★ Electronic Information Engineer</Span>
            </ColCard>
            <ColCard >
                    <Title>About Me</Title>
                    <DescBody>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus dolore, quidem officiis voluptatibus dolor provident aliquid accusamus assumenda fugit numquam ipsum, mollitia, nobis ea accusantium.
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio sit natus soluta quisquam ex. Totam voluptate cum est autem incidunt eos maiores blanditiis similique, quibusdam fuga magni illum dolorem ut?
                    </DescBody>
            </ColCard>
             </RowCard>
        </Wrapper>
    )
}

export default About
