import styled from 'styled-components'

const Title = styled.h4`
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: 1.4em;
    color: ${props=>props.color};;
    text-align: center;
    text-decoration: none;
    background-color:${props=>props.backgroundColor};
    /* width: 90%; */
    margin: 0%;
    padding: 2%;
    
`;
const BlogTitle = styled.h4`
    width: 90%;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: 1.7em;
    color: #D3D2D2FB;
    text-align: center;
    background-color:#000000 ;
    /* width: 100%; */
    margin: 3%;
    padding: 1%; 
`;

const DetailTitle = styled.h4`
    width: 90%;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: 3.5em;
    color: #3F3C3CFB;
    text-align: center;
    margin: 3%;
    padding: 1%; 
`;
const Span = styled.span`
    margin-top: 1%;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: 1em;
    color: ${props=>props.color};
    text-align: center;
    /* background-color:#161414E3 ; */
    margin-bottom:1%;
`;

export {Title,Span,BlogTitle,DetailTitle}
