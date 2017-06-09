import React from 'react';
import styled from 'styled-components';
import { Helmet } from "react-helmet";
import InfoCard from '../components/InfoCard';
import CollapseBox from '../components/CollapseBox';

export default class Home extends React.Component {
  render() {
    return (
      <Container style={{height: `${window.innerHeight - 50}px`}}>
        <Helmet>
          <title>Flexa Lite - Hem</title>
          <meta name="" content="" />
        </Helmet>

      	<InfoCard icon="insert_chart" title="Välkommen">
      		<ul style={{padding: '25px'}}>
      			<li>Träningskort - 50%</li>
      			<li>Navigering - 100%</li>
      			<li>Kort skapare - 20%</li>
      			<li>Annat - ... inc</li>
      			<li>Total - 30%</li>
      		</ul>
      	</InfoCard>
        <InfoCard icon="present_to_all" title="Uppdateringar">
          <CollapseBox header="Öppna">
            <ul style={{padding: '25px'}}>
              <li>Layout uppdaterat</li>
              
            </ul>
          </CollapseBox>
          <CollapseBox header="Info">
            <ul style={{padding: '25px'}}>
              <li>Layout uppdaterat</li>
              
            </ul>
          </CollapseBox>
          <CollapseBox header="Nytt">
            <ul style={{padding: '25px'}}>
              <li>Layout uppdaterat</li>
              
            </ul>
          </CollapseBox>
        </InfoCard>
        <InfoCard icon="settings" title="Inställningar">
          <ul style={{padding: '25px'}}>
            <li>Layout uppdaterat</li>

          </ul>
        </InfoCard>
        <InfoCard icon="video_library" title="Egna plugins">

          <ul style={{padding: '25px'}}>
            <li>Layout uppdaterat</li>

          </ul>
        </InfoCard>
        <InfoCard icon="schedule" title="Mitt Schema">

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

//  box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14), 0 1px 5px 0 rgba(0,0,0,0.12), 0 3px 1px -2px rgba(0,0,0,0.2);