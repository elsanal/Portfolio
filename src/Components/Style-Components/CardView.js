import styled from 'styled-components'

const RowCard = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    flex:1;
    align-items: flex-start;
    justify-items: space-evenly;
    justify-content: space-evenly;
    background-color:${props=>props.color};
    height:fit-content;
    /* width:100%; */
    border-radius:0.5% 0.5%;
`;

const ColCard = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
    justify-items: start;
    height: auto;
    /* width: 100%; */
    min-width: ${props=>props.width};
    /* max-width: ${props=>props.width}; */
    margin: 1%;
    margin-bottom: 5%;
    padding-bottom:1%;
    background-color:#FFFFFFFA ;
    border-radius:0.5% 0.5%;
    
`;

export {ColCard,RowCard};
