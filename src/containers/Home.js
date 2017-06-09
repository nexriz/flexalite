import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { Helmet } from "react-helmet";
import InfoCard from '../components/InfoCard';
import CollapseBox from '../components/CollapseBox';

export default class Home extends React.Component {
  render() {
    const theme = {
      InfoCardIconColor: '#64b5f6'
    }
    return (
    <ThemeProvider theme={theme}>
      <Container style={{height: `${window.innerHeight - 50}px`}}>
        <Helmet>
          <title>Flexa Lite - Hem</title>
          <meta name="" content="" />
        </Helmet>
          <InfoCard icon="new_releases" title="Välkommen">
            <ul>
              <li>Träningskort - 50%</li>
              <li>Navigering - 100%</li>
              <li>Kort skapare - 20%</li>
              <li>Annat - ... inc</li>
              <li>Total - 30%</li>
            </ul>
          </InfoCard>
          <InfoCard iColor="white" icon="settings_remote" title="Uppdateringar">
            <CollapseBox header="Öppna">
              <ul>
                <li>Layout uppdaterat</li>
              </ul>
            </CollapseBox>
            <CollapseBox header="Info">
              <ul>
                <li>Layout uppdaterat</li>
              </ul>
            </CollapseBox>
            <CollapseBox header="Nytt">
              <ul>
                <li>Layout uppdaterat</li>
              </ul>
            </CollapseBox>
          </InfoCard>
          <InfoCard iColor="white" icon="settings" title="Inställningar">
            <ul>
              <li>Layout uppdaterat</li>
            </ul>
          </InfoCard>
          <InfoCard iColor="#aeea00" icon="schedule" title="Mitt Schema">
            <ul>
              <li>Layout uppdaterat</li>
            </ul>
          </InfoCard>
          <InfoCard iColor="#ffd180" icon="note_add" title="Egna plugins">
            <ul>
              <li>Layout uppdaterat</li>
            </ul>
          </InfoCard>
        <Space />
      </Container>
    </ThemeProvider>
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