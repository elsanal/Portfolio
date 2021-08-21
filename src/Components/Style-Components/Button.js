import styled from 'styled-components'

const Button = styled.button`
  background-color: ${props=>props.color}; /* Green */
  border: none;
  color: white;
  /* padding: 15px 32px; */
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  border-radius: 4px;
  margin: 2%;
  height:fit-content;
  width:fit-content; 
`;

export default Button