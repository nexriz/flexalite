import React from 'react';
import styled from 'styled-components';
import { Helmet } from "react-helmet";
import { connect } from 'react-redux';
import { Button } from 'react-materialize'

import { logout } from '../components/redux/actions/userActions';

const mapStateToProps = (state) => {
  return {
    isAuth: state.user.isAuth
  }
}

@connect(mapStateToProps, { logout })
export default class Profile extends React.Component {
  render() {
    return (
      <Container>
        <Helmet>
          <title>Flexa Lite - Profil</title>
          <meta name="" content="" />
        </Helmet>
      	<InfoCard>
      		<h3 style={{textAlign: 'center'}}>Profil</h3>
      		<ul style={{padding: '25px'}}>
      			<li>Bygg pågår</li>
      		</ul>
          <Button onClick={this.props.logout}>Logga ut!</Button>
      	</InfoCard>
      </Container>
    );
  }
}

const Container = styled.div`
	margin-top: 100px;
	position: fixed;
	left: 0;
	right: 0;
`;
const InfoCard = styled.div`
	margin: auto;
	width: 320px;
	min-height: 350px;
	border-radius: 2px;
	overflow: scroll;
  & > button {
    margin-left: 30px;
  }
	background-color: ${props => props.color ? props.color : '#fffde7'};
	box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14), 0 1px 5px 0 rgba(0,0,0,0.12), 0 3px 1px -2px rgba(0,0,0,0.2);
`
