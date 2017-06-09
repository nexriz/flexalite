import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { setUser } from '../components/redux/actions/userActions';
import { Row, Input, Button } from 'react-materialize'
import { Helmet } from "react-helmet";

@connect((state) => ({isAuth: state.user.isAuth}), {setUser})
class LoginPage extends React.Component {
  state = {
    loginDisplay: true,
    username: '',
    password: ''
  }
  onChange = (e) => {
  	const { name, value } = e.target;
  	this.setState({[name]: value})
  }
  onSubmit = (e) => {
  	e.preventDefault();
  	this.props.setUser(this.state);
  }
  createAcc = (e) => {
    e.preventDefault();
    this.setState({loginDisplay: !this.state.loginDisplay})
  }
  render() {
    return (
    	<Container>
          <Helmet>
            <title>Flexa Lite - Logga in</title>
            <meta name="" content="" />
          </Helmet>
      		<LoginForm onSubmit={this.onSubmit}>
          {
            this.state.loginDisplay
                ? <LoginLayout />
                : <CreateLayout />
          }
          {
            this.state.loginDisplay
                ? <span><Button style={{backgroundColor: '#EA454B'}} waves='light'>Logga in</Button> <Button onClick={this.createAcc} style={{backgroundColor: '#EA454B', marginLeft: '10px'}} waves='light'>Skapa</Button></span>
                : <Button onClick={this.createAcc} style={{backgroundColor: '#EA454B', marginLeft: '10px'}} waves='light'>Skapa</Button>
          }
          </LoginForm>
    	</Container>
    );
  }
}
const LoginLayout = () => {
  return (
        <Row>
          <Input s={12} label="Användarnamn" />

          <Input type="password" label="Lösenord" s={12} />
        </Row>
  )
}
const CreateLayout = () => {
  return (
      <Row>
        <Input s={6} label="Användarnamn" />
        <Input s={6} label="Visnings Namn" />
        <Input type="text" label="E-port" s={12} />

        <Input type="password" label="Lösenord" s={12} />
        <Input type="password" label="Lösenord igen" s={12} />
      </Row>
  )
}

export default LoginPage

const Container = styled.section`
  margin: auto;
  max-width: 600px;
  padding: 20px;
  align-items: center;
  margin-top: 50px;
  border-radius: 2px;
`;

const LoginForm = styled.form`
  overflow: scroll;
`;