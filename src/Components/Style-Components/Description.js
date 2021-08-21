import styled from 'styled-components'

const Description = styled.div`
    display: flex;
    flex: 1;
    align-items: top;
    align-content: top;
    justify-content: top;
    justify-items: top;
    flex-direction: column;
    background-color:#F0EAEAE3 ;
    margin:0.5%;
`;

const DescBody = styled.p`
    flex: 0.2;
    text-align: left;
    font-weight: 400;
    font-family: 'Times New Roman', Times, serif;
    /* background-color:#945454E3; */
`;

export {Description,DescBody}