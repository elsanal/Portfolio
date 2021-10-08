import styled from 'styled-components'

const Linked = styled.a`
background: ${props=>props.color};
  border: none;
  color: white;
  text-align: center;
  text-decoration: none;
  padding: 3% 5%;
  margin: 2%;
  border-radius: 5px 5px;
`;

export default Linked