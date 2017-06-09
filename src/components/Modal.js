import React from 'react';
import styled from 'styled-components';
import { Motion, spring } from 'react-motion';

export default class Modal extends React.Component {
  state = {
  	id: getRandomId(),
  	isOpen: false
  }
  componentWillMount() {
  	this.body = document.body;
  	
  }
  getRandomId() {
    return Math.random().toString(36).substring(2)
  }
  render() {
  	const { button, view } = this.props;
    return (
      <Container>
      	
      </Container>
    );
  }
}

const Container = styled.div`

`;