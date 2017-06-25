import React from 'react';
import styled from 'styled-components';
import { Motion, spring } from 'react-motion';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
  modal: state.modal
})

@connect(mapStateToProps, {})
export default class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this._getRandomId(),
    }
    this.body = document.body;
  }
  _getRandomId() {
    const getRnd = () => Math.random()
    return 'modal-' + (getRnd() * getRnd()).toString(36).substring(2)
  }
  render() {
    const { id  } = this.state;
  	const { button, view, children, style, modal } = this.props;
    if(modal.isOpen) 
      return (
        <Container id={id} style={style}>
          {children}
        </Container>
      );
    else
      return null
  }
}

const Container = styled.div`
  position: fixed;
  height: 100%;
  width: 100%;
  z-index: 200;
  background-color: black;
`;