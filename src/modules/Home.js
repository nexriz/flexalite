import React from 'react';
import styled from 'styled-components';
import { Helmet } from "react-helmet";


export default class Home extends React.Component {
  render() {
    const Test = (e) => console.log(e)
    const Pop = () => {
      return Test => {
        test('hello')
      }
    }
    Pop()
    return (
      <Container style={{height: `${window.innerHeight - 52}px`}}>
        <Helmet>
          <title>Flexa Lite - Hem</title>
          <meta name="" content="" />
        </Helmet>

      	<InfoCard>
      		<h4 style={{textAlign: 'center'}}>Välkommen</h4>
      		<ul style={{padding: '25px'}}>
      			<li>Träningskort - 50%</li>
      			<li>Navigering - 100%</li>
      			<li>Kort skapare - 20%</li>
      			<li>Annat - ... inc</li>
      			<li>Total - 30%</li>
      		</ul>
      	</InfoCard>
        <InfoCard>
          <h4 style={{textAlign: 'center'}}>Uppdateringar</h4>
          <ul style={{padding: '25px'}}>
            <li>Layout uppdaterat</li>

          </ul>
        </InfoCard>
        <Space />
      </Container>
    );
  }
}


const Space = styled.div`
  height: 50px;
`
const Container = styled.div`
  padding-top: 60px;
	position: fixed;
	left: 0;
	right: 0;
  overflow: scroll;
`;
const InfoCard = styled.div`
	margin: auto;
  margin-top: 10px;
	width: 320px;
	min-height: 350px;
	border-radius: 2px;
	overflow: scroll;
	background-color: ${props => props.color ? props.color : '#fffde7'};
  box-shadow: 0 2px 2px 0 rgba(0,0,0,0.04), 0 1px 5px 0 rgba(0,0,0,0.04), 0 3px 1px -2px rgba(0,0,0,0.04);
`
//  box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14), 0 1px 5px 0 rgba(0,0,0,0.12), 0 3px 1px -2px rgba(0,0,0,0.2);