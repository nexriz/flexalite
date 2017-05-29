import React from 'react';
import styled, { keyframes, css } from 'styled-components';
import { Helmet } from "react-helmet";
import videojs from 'video.js'
import 'video.js/dist/video-js.css';
import './video.css';

export default class CardFullscreen extends React.Component {
  render() {
    const videoJsOptions = {
      autoplay: false,
      controls: true,
      inactivityTimeout: 200,
      preload: '<metadata></metadata>',
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
          <VideoPlayer className="video-js vjs-sublime-skin" width={window.innerWidth >= 400 ? '400px' : window.innerWidth + 'px'} { ...videoJsOptions }/>
        </CardBox>
        <InfoCards />
      </Container>
    );
  }
}
const InfoCards = ({}) => 
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



class VideoPlayer extends React.Component {
  componentDidMount() {
    this.player = videojs(this.videoNode, this.props, function onPlayerReady() {
      console.log('onPlayerReady', this)
    });
  }
  componentWillUnmount() {
    if (this.player) {
      this.player.dispose()
    }
  }
  render() {
    return (
      <div data-vjs-player>
        <video ref={ node => this.videoNode = node } className="video-js"></video>
      </div>
    )
  }
}


const animteplay = keyframes`
  0% {
    opacity: 1;
  }
  99% {
    transform: scale(7);
    opacity: 0;
  }
  100% {
    opacity: 0;
    display: none;
    visibility: hidden;
  }
`
const Playbtn = styled.i.attrs({className: 'material-icons'})`
  position: absolute;
  color: white;
  opacity: 0.4;
  transition: color 0.2s, opacity 0.2s, transform 0.2s, visibility 0s;
  cursor: pointer;
  transform: scale(3);
  z-index: 290;
  ${props => props.animate === true 
    ? css`
      animation: ${animteplay} 0.4s forwards;
    `
    : ''}
  &:hover {
    transform: scale(4.2);
    opacity: 0.5;
    color: #EA454B;
  }
`;
const animatetoggle = keyframes`
  from {
    opacity: 1;
  }
  to {
    transform: scale(7);
    opacity: 0;
  }
`
const Togglebtn = styled.i.attrs({className: 'material-icons'})`
  position: absolute;
  color: white;
  opacity: 0;
  transition: color 0.2s, opacity 0.2s, transform 0.2s, visibility 0s;
  cursor: pointer;
  transform: scale(3);
    ${props => props.animate === true 
    ? css`
      animation: ${animatetoggle} 0.5s forwards;
    `
    : ''}
  &:hover {}
`
const Controls = styled.div`
  position: absolute;
  width: 50px;
  top: 150px;
  right: 0;
  left: 0;
  margin: auto;
`
const VideoContainer = styled.div`
  margin: auto;
  margin-top: 50px;
  min-width: 320px;
  z-index: 200;
  cursor: pointer;
`;
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

