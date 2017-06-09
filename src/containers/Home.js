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
      <Container style={{height: `${window.innerHeight - 50}px`}}>
        <Helmet>
          <title>Flexa Lite - Hem</title>
          <meta name="" content="" />
        </Helmet>

      	<InfoCard>
      		<div><I>insert_chart</I><h5>Välkommen</h5></div>
      		<ul style={{padding: '25px'}}>
      			<li>Träningskort - 50%</li>
      			<li>Navigering - 100%</li>
      			<li>Kort skapare - 20%</li>
      			<li>Annat - ... inc</li>
      			<li>Total - 30%</li>
      		</ul>
      	</InfoCard>
        <InfoCard>
      		<div><I>present_to_all</I><h5>Uppdateringar</h5></div>
          <ul style={{padding: '25px'}}>
            <li>Layout uppdaterat</li>

          </ul>
        </InfoCard>
        <InfoCard>
      		<div><I>settings</I><h5>Inställningar</h5></div>
          <ul style={{padding: '25px'}}>
            <li>Layout uppdaterat</li>

          </ul>
        </InfoCard>
        <InfoCard>
      		<div><I>video_library</I><h5>Egna plugins</h5></div>
          <ul style={{padding: '25px'}}>
            <li>Layout uppdaterat</li>

          </ul>
        </InfoCard>
        <InfoCard>
      		<div><I>schedule</I><h5>Mitt Schema</h5></div>
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
  height: 0px;
`
const Container = styled.div`
  padding-top: 51px;
	position: fixed;
	left: 0;
	right: 0;
  overflow: scroll;
`;
const InfoCard = styled.div`
	margin: auto;
	max-width: 400px;
	min-height: 350px;
  margin-bottom: 1px;
	overflow: scroll;
  color: rgba(255,255,255,1);
	background-color: ${props => props.color ? props.color : '#242829'};
  box-shadow: 0 2px 2px 0 rgba(0,0,0,0.04), 0 1px 5px 0 rgba(0,0,0,0.04), 0 3px 1px -2px rgba(0,0,0,0.04);
  border-top: 1px solid rgba(255,255,255,0.03);
  div:first-child {
    width: 100%;
    background-color: #292D2E;
    border-bottom: 1px solid rgba(255,255,255,0.03);
    h5 {
      margin-top: 0;
      font-size: 18px;
      font-weight: small;
      padding: 11px 0px 0px 40px;
    }
    i {
      transform: translate(8px, 8px);
    }
  }
`

const I = styled.i.attrs({
  className: 'material-icons'
})`
  position: absolute;
	color: white;
 	cursor: pointer;
`;
//  box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14), 0 1px 5px 0 rgba(0,0,0,0.12), 0 3px 1px -2px rgba(0,0,0,0.2);