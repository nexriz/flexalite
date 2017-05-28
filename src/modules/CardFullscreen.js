import React from 'react';
import styled from 'styled-components';
import { Helmet } from "react-helmet";
import { Player, ControlBar, ReplayControl,
  ForwardControl, CurrentTimeDisplay,
  TimeDivider, VolumeMenuButton
} from 'video-react';
import "video-react/dist/video-react.css";


export default class CardFullscreen extends React.Component {
  render() {
    return (
      <Container>
        <Helmet>
          <title>Flexa Lite - Favoriter</title>
          <meta name="" content="" />
        </Helmet>
        <CardBox>
          <Videoplayer />
        </CardBox>
        <InfoContainer style={{height: `${window.innerHeight - 300}px`}}>
          <InfoCard color="#e8f5e9">
            <h4 style={{textAlign: 'center'}}>Kort Info</h4>
            <ul style={{padding: '25px'}}>
              <li>Koncept</li>
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
          <div style={{height: '40px'}}/>
        </InfoContainer>
      </Container>
    );
  }
}
function Videoplayer({src, poster}) {
  return (
      <VideoContainer>
          <Player
            src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
            playsInline={true}
            poster="https://www.mathiaszachau.com/wp-content/uploads/2016/07/bygg-underarmar-och-greppstyrka-e1468830512143.jpg">
            <ControlBar disabled>
              <ReplayControl seconds={10} order={1.1} />
              <ForwardControl seconds={10} order={1.2} />
              <CurrentTimeDisplay disabled />
              <TimeDivider disabled />
              <VolumeMenuButton disabled />
            </ControlBar>
          </Player>
        </VideoContainer>   
    );
}

const InfoCard = styled.div`
  margin: auto;
  max-width: 400px;
  margin-bottom: 0px;
  min-height: 350px;
  border-radius: 2px;
  overflow: scroll;
  background-color: ${props => props.color ? props.color : '#fffde7'};
  
`
// box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14), 0 1px 5px 0 rgba(0,0,0,0.12), 0 3px 1px -2px rgba(0,0,0,0.2);
const InfoContainer = styled.div`
  position: relative;
  left: 0;
  right: 0;
  overflow: scroll;
  padding-top: 0px;
  z-index: 200;
`;
const VideoContainer = styled.div`
  margin: auto;
  margin-top: 40px;
  z-index: 200;
  padding-top: 5px;

`;
const CardBox = styled.div`
  max-width: 400px;
  margin: auto;
`;
const Container = styled.div`
  z-index: 100;
  width: 100%;
  height: 100%;
  margin: auto;
  overflow: scroll;
`;

