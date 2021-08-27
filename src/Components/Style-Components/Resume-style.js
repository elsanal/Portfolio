import styled from 'styled-components'

const ResumeWrapper = styled.div`
    display: flex;
    flex:1;
    align-items: flex-start;
    align-content: flex-start;
    justify-content: flex-start;
    justify-items: flex-start;
    text-align: left;
    flex-direction: row;
    flex-wrap:wrap;
    min-height: 90vh;
    height:fit-content;
    /* width:fit-content; */
    padding-right: 2%;
    padding-left: 2%;
    background-color:#FFFFFF;
`;



const ResumeRow = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    height:fit-content;
    width:100%;
`;

const ResumeCol = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
    align-content: center;
    justify-items: space-around;
    justify-content: space-around;
    height: 100%;
    width: auto;
    /* max-width:100%; */
    max-width: ${props=>props.mxwidth};
    margin: 1%;
    margin-bottom: 5%;
    padding-bottom:1%;
    background-color:${props=>props.backgroundColor};
    border-radius:1% 1% 1% 1%;
    
`;
const LevelContainer = styled.div`
    display: flex;
    flex: 1;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-items: flex-start;
    height: fit-content;
    width: 100%;
    min-width: 250px;
    /* background-color:white; */
    border: 1px solid #030303FA ;
`;
const Level = styled.div`
    height: 15px;
    width: ${props=>props.width};
    background-color:black;
`;

const Box = styled.div`
    height: ${props=>props.height};
    width: ${props=>props.width};
`;


const Title = styled.h4`
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: 1.4em;
    color: ${props=>props.color};;
    text-align: center;
    background-color:${props=>props.backgroundColor};
    /* width: 100%; */
    margin: 0%;
    padding: 10px 15px;
    border-radius : 5px 5px;
`;

const SubTitle = styled.h4`
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: 1.2em;
    color: black;
    text-align: left;
    /* background-color:${props=>props.backgroundColor}; */
    margin: 0%;
    padding: 0%; 
`;


export {ResumeCol,ResumeRow,ResumeWrapper,Title,SubTitle,LevelContainer,Level,Box};
