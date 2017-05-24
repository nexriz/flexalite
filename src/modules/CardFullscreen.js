import React from 'react';
import styled from 'styled-components';
import { Helmet } from "react-helmet";


export default class CardFullscreen extends React.Component {
  render() {
    return (
      <Container>
        <Helmet>
          <title>Flexa Lite - Favoriter</title>
          <meta name="" content="" />
        </Helmet>
        <CardBox>
          <VideoContainer>
            <video style={{maxWidth: '400px'}} controls>
              <source src="https://media.giphy.com/media/26xBFigHfSls66eMU/giphy.mp4" type="video/mp4"/>
              <source src="movie.ogg" type="video/ogg"/>
            </video>
          </VideoContainer>
        </CardBox>
        <InfoContainer style={{height: `${window.innerHeight - 390}px`}}>
          <InfoCard color="#e8f5e9">
            <h4 style={{textAlign: 'center'}}>Välkommen</h4>
            <ul style={{padding: '25px'}}>
              <li>Träningskort - 50%</li>
              <li>Navigering - 100%</li>
              <li>Kort skapare - 20%</li>
              <li>Annat - ... inc</li>
              <li>Total - 30%</li>
            </ul>
          </InfoCard>
          <InfoCard color="#fbe9e7">
            <h4 style={{textAlign: 'center'}}>Uppdateringar</h4>
            <ul style={{padding: '25px'}}>
              <li>Layout uppdaterat</li>

            </ul>
          </InfoCard>
          <InfoCard color="#f9fbe7">
            <h4 style={{textAlign: 'center'}}>Uppdateringar</h4>
            <ul style={{padding: '25px'}}>
              <li>Layout uppdaterat</li>

            </ul>
          </InfoCard>
          <InfoCard color="#e0f7fa">
            <h4 style={{textAlign: 'center'}}>Uppdateringar</h4>
            <ul style={{padding: '25px'}}>
              <li>Layout uppdaterat</li>

            </ul>
          </InfoCard>
        </InfoContainer>
      </Container>
    );
  }
}
const InfoCard = styled.div`
  margin: auto;
  max-width: 400px;
  margin-bottom: 10px;
  min-height: 350px;
  border-radius: 2px;
  overflow: scroll;
  background-color: ${props => props.color ? props.color : '#fffde7'};
  box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14), 0 1px 5px 0 rgba(0,0,0,0.12), 0 3px 1px -2px rgba(0,0,0,0.2);
`

const InfoContainer = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  overflow: scroll;
`;
const VideoContainer = styled.div`
  margin-top: 60px;
`;
const CardBox = styled.div`
  width: 400px;
  margin: auto;
`;
const Container = styled.div`
  z-index: 100;
  width: 100%;
  height: 100%;
  background-color: #111111;
  margin: auto;
`;

