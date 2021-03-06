import styled from 'styled-components'

const Image = styled.img`
/* max-height:500px; */
max-width: 99%;
height: auto;
width: auto;
padding:0.5%;
margin: 0%;
object-fit: cover;
/* border-radius:3% 0% 0% 3%; */
`;
const Image2 = styled.img`
/* max-height:500px; */
max-width: 49%;
height: auto;
width: auto;
padding:0.5%;
margin: 0%;
object-fit: cover;
/* border-radius:3% 0% 0% 3%; */
`;
const Profile = styled.img`
    height:${props=>props.width};
    width: ${props=>props.width};
    margin:3%;
    object-fit: cover;
    border-radius:50% 50%;
`;

const Icon = styled.img`
    height:5vw;
    width: 5vw;
    padding:0%;
    margin: 0%;
    object-fit: cover;
    border-radius:5vw 5vw;
`;
export {Image,Image2,Profile, Icon}