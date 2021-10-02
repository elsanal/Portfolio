import styled from 'styled-components'

const Title = styled.h4`
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: 1.4em;
    color: ${props=>props.color};;
    text-align: center;
    background-color:${props=>props.backgroundColor};
    width: 100%;
    margin: 0%;
    padding: 0%;
    
`;
const BlogTitle = styled.h4`
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: 1.7em;
    color: ${props=>props.color};;
    text-align: center;
    background-color:#6B684C8C ;
    /* width: 100%; */
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

export {Title,Span,BlogTitle}
