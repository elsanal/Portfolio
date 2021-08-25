import React from 'react'
import ml from '../../Database/images/1.jpg'
import electronic from '../../Database/images/2.jpg'
import mobile from '../../Database/images/mobile.jpg'
import web from '../../Database/images/web2.jpg'

import {Wrapper} from '../../Components/Style-Components/Wrapper'
import {Image} from '../../Components/Style-Components/ImageView'
import {ColCard,RowCard} from '../../Components/Style-Components/CardView'
import {Title} from '../../Components/Style-Components/Title'
import {DescBody} from '../../Components/Style-Components/Description'

function Services() {
    return (
        <Wrapper>
            <RowCard>
            <ColCard >
                <RowCard>
                <Image src={web}/>
                <Image src={web}/>
                </RowCard>
                <Title backgroundColor="transparent" color="black">Web Development</Title>
                <DescBody>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, dolores omnis hic incidunt atque voluptas impedit esse vitae illum deleniti, eligendi inventore officia.
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate sint autem modi vitae possimus perspiciatis in, aut explicabo reprehenderit facilis.
                </DescBody>
            </ColCard>
            <ColCard width="300px">
                <RowCard>
                <Image src={web}/>
                <Image src={web}/>
                </RowCard>
                <Title backgroundColor="transparent" color="black">Web Development</Title>
                <DescBody>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, dolores omnis hic incidunt atque voluptas impedit esse vitae illum deleniti, eligendi inventore officia.
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate sint autem modi vitae possimus perspiciatis in, aut explicabo reprehenderit facilis.
                </DescBody>
            </ColCard>
            <ColCard width="300px">
                <RowCard>
                <Image src={web}/>
                <Image src={web}/>
                </RowCard>
                <Title backgroundColor="transparent" color="black">Web Development</Title>
                <DescBody>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, dolores omnis hic incidunt atque voluptas impedit esse vitae illum deleniti, eligendi inventore officia.
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate sint autem modi vitae possimus perspiciatis in, aut explicabo reprehenderit facilis.
                </DescBody>
            </ColCard>
            <ColCard width="300px">
                <RowCard>
                <Image src={web}/>
                <Image src={web}/>
                </RowCard>
                <Title backgroundColor="transparent" color="black">Web Development</Title>
                <DescBody>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, dolores omnis hic incidunt atque voluptas impedit esse vitae illum deleniti, eligendi inventore officia.
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate sint autem modi vitae possimus perspiciatis in, aut explicabo reprehenderit facilis.
                </DescBody>
            </ColCard>
            </RowCard>
            
        </Wrapper>
    )
}



export default Services
