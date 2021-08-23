import styled from 'styled-components'

const Description = styled.div`
    display: flex;
    /* flex: 1; */
    min-width:300px;
    flex-wrap: wrap;
    flex-direction: column;
    /* background-color:#E2E7E6FA ; */
    margin:0.5%;
`;

const DescBox = styled.div`
    height:fit-content;
    max-height:100px;
    padding:2%;
    text-overflow: ellipsis;
    overflow: hidden;
`;

const DescBody = styled.p`
    flex: 0.2;
    text-align: left;
    font-weight: 400;
    font-family: 'Times New Roman', Times, serif;
    text-overflow: ellipsis;
`;

export {Description,DescBody,DescBox}