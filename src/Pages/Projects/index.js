import React from 'react'
import {Wrapper} from '../../Components/Style-Components/Wrapper'
import {Image} from '../../Components/Style-Components/ImageView'
import {ColCard,RowCard} from '../../Components/Style-Components/CardView'
import {Title} from '../../Components/Style-Components/Title'
import Linked from '../../Components/Style-Components/Linked'
import {Description,DescBody} from '../../Components/Style-Components/Description'
import web from '../../Database/images/web2.jpg'
import mobile from '../../Database/images/mobile.jpg'
import phone from '../../Database/images/phone.png'
import phone1 from '../../Database/images/phone1.png'


function Projects() {
    return (
        <Wrapper>
            <ColCard width={"100%"}>
                <RowCard>
                    <Description>
                        <Title>Campus+ app project for students</Title>
                        <DescBody>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et sapiente libero est, ducimus veniam itaque eos totam nesciunt magni tempore vero dicta odio, labore maiores.</DescBody>
                    </Description>
                    <Description>
                        <Title>Technologies</Title>
                        <DescBody>
                            - Flutter <br />
                            - Firebase <br />
                            - Sqlite <br />
                            - MySQL
                        </DescBody>
                    </Description>
                    <Description>
                        <Title>For more info</Title>
                        <DescBody>
                            <Linked href="https://github.com/"color={"#080808"}>
                                Github</Linked>
                            <Linked href="https://github.com/"color={"#DD0C0C"}>
                                Youtube</Linked>
                            <Linked href="https://github.com/"color={"#482464"}>
                                Play Store</Linked>
                            <Linked href="https://github.com/"color={"#0D2412"}>
                                Website</Linked>
                        </DescBody>
                    </Description>
                </RowCard>
                {/* <br/> */}
                <RowCard>
                    <Image src={phone}/>
                    <Image src={phone1}/>
                </RowCard>
            </ColCard>
            <ColCard width={"100%"}>
                <RowCard>
                    <Description>
                        <Title>Website to find scholarship</Title>
                        <DescBody>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et sapiente libero est, ducimus veniam itaque eos totam nesciunt magni tempore vero dicta odio, labore maiores.</DescBody>
                    </Description>
                    <Description>
                        <Title>Technologies</Title>
                        <DescBody>
                            - Flutter <br />
                            - Firebase <br />
                            - Sqlite <br />
                            - MySQL
                        </DescBody>
                    </Description>
                    <Description>
                        <Title>For more info</Title>
                        <DescBody>
                            <Linked href="https://github.com/"color={"#080808"}>
                                Github</Linked>
                            <Linked href="https://github.com/"color={"#DD0C0C"}>
                                Youtube</Linked>
                            <Linked href="https://github.com/"color={"#482464"}>
                                Play Store</Linked>
                            <Linked href="https://github.com/"color={"#0D2412"}>
                                Website</Linked>
                        </DescBody>
                    </Description>
                </RowCard>
                {/* <br/> */}
                <RowCard>
                    <Image src={mobile}/>
                    <Image src={web}/>
                </RowCard>
            </ColCard>
            <ColCard width={"100%"}>
                <RowCard>
                    <Description>
                        <Title>Website to find scholarship</Title>
                        <DescBody>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et sapiente libero est, ducimus veniam itaque eos totam nesciunt magni tempore vero dicta odio, labore maiores.</DescBody>
                    </Description>
                    <Description>
                        <Title>Technologies</Title>
                        <DescBody>
                            - Flutter <br />
                            - Firebase <br />
                            - Sqlite <br />
                            - MySQL
                        </DescBody>
                    </Description>
                    <Description>
                        <Title>For more info</Title>
                        <DescBody>
                            <Linked href="https://github.com/"color={"#080808"}>
                                Github</Linked>
                            <Linked href="https://github.com/"color={"#DD0C0C"}>
                                Youtube</Linked>
                            <Linked href="https://github.com/"color={"#482464"}>
                                Play Store</Linked>
                            <Linked href="https://github.com/"color={"#0D2412"}>
                                Website</Linked>
                        </DescBody>
                    </Description>
                </RowCard>
                <RowCard>
                    <Image src={mobile}/>
                    <Image src={web}/>
                </RowCard>
            </ColCard>
        </Wrapper>
    )
}



export default Projects
