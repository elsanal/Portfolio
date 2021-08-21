import styled from 'styled-components'

const RowCard = styled.div`
    display: flex;
    flex-direction: row;
    flex:1;
    align-items: top;
    justify-items: space-between;
    justify-content: space-between;
    height:100vw;
    width: 100%;
    background-color:#FFFFFF;
    border-radius:3% 3% 3% 3%;
`;
const ColCard = styled.div`
    display: flex;
    flex-direction: column;
    flex:1;
    align-items: top;
    justify-items: center;
    height:fit-content;
    width: fit-content;
    margin: 1%;
    margin-bottom: 5%;
    padding-bottom:1%;
    background-color:#FFFFFF;
    border-radius:1% 1% 1% 1%;
`;

export {ColCard,RowCard};
