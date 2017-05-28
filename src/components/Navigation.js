import React from 'react';
import styled from 'styled-components';

export default ({header, location, history}) => {
    return (
        <Navbar>
          <Contain>
            {location.pathname !== '/' ? <BackButton onClick={history.goBack}>{"<"}</BackButton> : null}
            <Header>
              {LocationHeader(location.pathname)}
            </Header>
          </Contain>
        </Navbar>
    );
}

function LocationHeader(locations) {
      if(locations === "/") return 'Hem' 
      let temp = locations.substring(1)
      let checktemp = temp.indexOf('/')
      if(checktemp !== -1)
        return temp.charAt(0).toUpperCase() + temp.slice(1).replace('/', ' - ')
      else
        return temp.charAt(0).toUpperCase() + temp.slice(1)
}

const BackButton = styled.div`
  position: absolute;
  top: 5px;
  font-size: 28px;
  margin-left: 10px;
  cursor: pointer;
  color: white;
  user-select: none;
  z-index: 200;
  transition: color 0.3s;
  &:hover {
    color: #EA454B;
  } 
  &:focus {
    color: #EA454B;
  }
`;
const Contain = styled.div`
  width: 320px;
  margin: auto; 
`;
const Header = styled.h4`
  margin-top: 12px;
  font-size: 24px;
  color: white;
  text-align: center;
  height: inherit;
`;

const Navbar = styled.header`
	width: 100%;
	height: 50px;
	background-color: #111111;
	border-bottom: 1px solid rgba(0,0,0,0.2);
	z-index: 100;
	position: fixed;
	transition: height 0.2s linear;
	overflow: hidden;
  top: 0;
`
