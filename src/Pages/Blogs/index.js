import React from 'react'
import './style.css'
import {Wrapper} from '../../Components/Style-Components/Wrapper'
import {Image} from '../../Components/Style-Components/ImageView'
import {ColCard,RowCard} from '../../Components/Style-Components/CardView'
import Title from '../../Components/Style-Components/Title'
import Linked from '../../Components/Style-Components/Linked'
import {Description,DescBody,DescBox} from '../../Components/Style-Components/Description'


import web from '../../Database/images/web2.jpg'
import mobile from '../../Database/images/mobile.jpg'
import phone from '../../Database/images/phone.png'
import phone1 from '../../Database/images/phone1.png'
import edu1 from '../../Database/images/elsone-prof.jpeg'
import edu2 from '../../Database/images/alex-elsone.JPG'

function Blogs() {
    return (
        <Wrapper>
            <ColCard width={"300px"}>
                <RowCard>
                    <Image src={mobile}/>
                    <Image src={web}/>
                    <Image src={phone1}/>
                    <Image src={edu2}/>
                    {/* <Image src={phone1}/>
                    <Image src={edu2}/> */}
                </RowCard>
                <DescBox>
                    <DescBody>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea delectus vel quis similique veniam quaerat, consectetur dicta? Nostrum culpa quis deleniti placeat provident corporis quas, eaque neque deserunt voluptates. Laudantium modi explicabo obcaecati assumenda necessitatibus voluptatem optio saepe cumque, quod blanditiis enim accusantium facere consequuntur aut rerum voluptates totam. Natus exercitationem cupiditate, voluptates neque velit repellat rerum sapiente ratione eum hic suscipit modi dolores, ad cumque minus repudiandae iure tenetur optio est temporibus. Delectus vitae laudantium qui placeat aut corporis quaerat molestias, est illum, quo libero consequatur at. Ullam, et.</DescBody>
                    <DescBody>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea delectus vel quis similique veniam quaerat, consectetur dicta? Nostrum culpa quis deleniti placeat provident corporis quas,</DescBody>
                </DescBox>
                <Linked href="https://github.com/"color={"#080808"}>Read more</Linked>                
            </ColCard>
            <ColCard width={"300px"}>
                <RowCard>
                    <Image src={mobile}/>
                    <Image src={web}/>
                    <Image src={phone1}/>
                    <Image src={edu2}/>
                </RowCard>
                <DescBox>
                    <DescBody>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea delectus vel quis similique veniam quaerat, consectetur dicta? Nostrum culpa quis deleniti placeat provident corporis quas, eaque neque deserunt voluptates. Laudantium modi explicabo obcaecati assumenda necessitatibus voluptatem optio saepe cumque, quod blanditiis enim accusantium facere consequuntur aut rerum voluptates totam. Natus exercitationem cupiditate, voluptates neque velit repellat rerum sapiente ratione eum hic suscipit modi dolores, ad cumque minus repudiandae iure tenetur optio est temporibus. Delectus vitae laudantium qui placeat aut corporis quaerat molestias, est illum, quo libero consequatur at. Ullam, et.</DescBody>
                    <DescBody>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea delectus vel quis similique veniam quaerat, consectetur dicta? Nostrum culpa quis deleniti placeat provident corporis quas,</DescBody>
                </DescBox>
                <Linked href="https://github.com/"color={"#080808"}>Read more</Linked>                
            </ColCard>
            <ColCard width={"300px"}>
                <RowCard>
                    <Image src={mobile}/>
                    <Image src={web}/>
                    {/* <Image src={phone1}/>
                    <Image src={edu2}/> */}
                </RowCard>
                <DescBox>
                    <DescBody>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea delectus vel quis similique veniam quaerat, consectetur dicta? Nostrum culpa quis deleniti placeat provident corporis quas, eaque neque deserunt voluptates. Laudantium modi explicabo obcaecati assumenda necessitatibus voluptatem optio saepe cumque, quod blanditiis enim accusantium facere consequuntur aut rerum voluptates totam. Natus exercitationem cupiditate, voluptates neque velit repellat rerum sapiente ratione eum hic suscipit modi dolores, ad cumque minus repudiandae iure tenetur optio est temporibus. Delectus vitae laudantium qui placeat aut corporis quaerat molestias, est illum, quo libero consequatur at. Ullam, et.</DescBody>
                    <DescBody>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea delectus vel quis similique veniam quaerat, consectetur dicta? Nostrum culpa quis deleniti placeat provident corporis quas,</DescBody>
                </DescBox>
                <Linked href="https://github.com/"color={"#080808"}>Read more</Linked>                
            </ColCard>
            <ColCard width={"300px"}>
                <RowCard>
                    <Image src={mobile}/>
                    <Image src={web}/>
                    <Image src={phone1}/>
                    <Image src={edu2}/>
                </RowCard>
                <DescBox>
                    <DescBody>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea delectus vel quis similique veniam quaerat, consectetur dicta? Nostrum culpa quis deleniti placeat provident corporis quas, eaque neque deserunt voluptates. Laudantium modi explicabo obcaecati assumenda necessitatibus voluptatem optio saepe cumque, quod blanditiis enim accusantium facere consequuntur aut rerum voluptates totam. Natus exercitationem cupiditate, voluptates neque velit repellat rerum sapiente ratione eum hic suscipit modi dolores, ad cumque minus repudiandae iure tenetur optio est temporibus. Delectus vitae laudantium qui placeat aut corporis quaerat molestias, est illum, quo libero consequatur at. Ullam, et.</DescBody>
                    <DescBody>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea delectus vel quis similique veniam quaerat, consectetur dicta? Nostrum culpa quis deleniti placeat provident corporis quas,</DescBody>
                </DescBox>
                <Linked href="https://github.com/"color={"#080808"}>Read more</Linked>                
            </ColCard>
        </Wrapper>
    )
}

export default Blogs
