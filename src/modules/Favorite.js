import React from 'react';
import styled from 'styled-components';
import { Helmet } from "react-helmet";


export default class Favorite extends React.Component {
  render() {
    return (
      <Container>
        <Helmet>
          <title>Flexa Lite - Favoriter</title>
          <meta name="" content="" />
        </Helmet>
      	<InfoCard>
      		<h3 style={{textAlign: 'center'}}>Favoriter</h3>
      		<ul style={{padding: '25px'}}>
      			<li>Ej klar</li>
      		</ul>
      	</InfoCard>
      </Container>
    );
  }
}

const Container = styled.div`
	margin-top: 100px;
	position: fixed;
	left: 0;
	right: 0;
`;
const InfoCard = styled.div`
	margin: auto;
	width: 320px;
	min-height: 350px;
	border-radius: 2px;
	overflow: scroll;
	background-color: ${props => props.color ? props.color : '#fffde7'};
	box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14), 0 1px 5px 0 rgba(0,0,0,0.12), 0 3px 1px -2px rgba(0,0,0,0.2);
`
