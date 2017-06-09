import React from 'react';
import styled from 'styled-components';
import { Helmet } from "react-helmet";

import InfoCard from '../components/InfoCard';
import VideoPlayer from '../components/VideoPlayer';
import 'video.js/dist/video-js.css';
import './video.css';


export default class CardFullscreen extends React.Component {
  render() {
    const videoJsOptions = {
      autoplay: false,
      controls: true,
      inactivityTimeout: 200,
      preload: 'metadata',
      sources: [{
        src: this.props.videosrc || 'https://media.w3.org/2010/05/sintel/trailer.mp4',
        type: 'video/mp4'
      }]
    }
    return (
      <Container>
        <Helmet>
          <title>Flexa Lite - Favoriter</title>
          <meta name="" content="" />
        </Helmet>
        <CardBox>
          <VideoPlayer 
            className="video-js vjs-sublime-skin" 
            width={window.innerWidth >= 400 ? '400px' : window.innerWidth + 'px'} 
            { ...videoJsOptions }/>
        </CardBox>
        <InfoCards />
      </Container>
    );
  }
}
const InfoCards = () => 
       <InfoContainer style={{height: `${window.innerHeight}px`}}>
          <InfoCard title="Kort Information">
            <ul style={{padding: '25px'}}>
              <li>Träningskort - 50%</li>
              <li>Navigering - 100%</li>
              <li>Kort skapare - 20%</li>
              <li>Annat - ... inc</li>
              <li>Total - 30%</li>
            </ul>
          </InfoCard>
          <InfoCard>
            <ul style={{padding: '25px'}}>
              <li>Layout uppdaterat</li>
            </ul>
          </InfoCard>
          <div style={{height: '40px'}}/>
      </InfoContainer>




// const animteplay = keyframes`
//   0% {
//     opacity: 1;
//   }
//   99% {
//     transform: scale(7);
//     opacity: 0;
//   }
//   100% {
//     opacity: 0;
//     display: none;
//     visibility: hidden;
//   }
// `
// box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14), 0 1px 5px 0 rgba(0,0,0,0.12), 0 3px 1px -2px rgba(0,0,0,0.2);
const InfoContainer = styled.div`
  position: relative;
  left: 0;
  right: 0;
  overflow: scroll;
  padding-top: 0px;
  z-index: 200;
`;
const CardBox = styled.div`
  max-width: 400px;
  margin: auto;
  margin-top: 50px;
`;
const Container = styled.div`
  z-index: 100;
  height: 100%;
  margin: auto;
  overflow: scroll;
`;

