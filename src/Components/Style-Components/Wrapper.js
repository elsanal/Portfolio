import styled from 'styled-components'

const Wrapper = styled.div`
display: flex;
align-items: flex-start;
align-content: flex-start;
justify-content: flex-start;
flex-direction: row;
flex-wrap:wrap;
min-height: 90vh;
height:fit-content;
width:fit-content;
padding: 2%;
background-color:#0C0B0BA8;
`;

const HeaderWrapper = styled.div`
    padding:1%;
    /* width: 100%; */
    justify-items:center;
    align-items:center;
    background-color:#0C0B0BA8;
`;
const ResumeWrapper = styled.div`
    display: flex;
    align-items: flex-start;
    align-content: flex-start;
    justify-content: flex-start;
    flex-direction: row;
    flex-wrap:wrap;
    min-height: 90vh;
    height:fit-content;
    width:100%;
    background-color:#0C0B0BA8;
`;

export {Wrapper,HeaderWrapper,ResumeWrapper}