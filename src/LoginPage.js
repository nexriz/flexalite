import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import {setUser} from './components/redux/actions/userActions';
import Navigation from './components/Navigation';
import { withRouter } from 'react-router-dom';

@connect((state) => ({isAuth: state.user.isAuth}), {setUser})
class LoginPage extends React.Component {
  state = {
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
  render() {
    return (
    	<Container>
      		<LoginForm onSubmit={this.onSubmit}>
      			<div style={{margin: 'auto'}}>
            <p>Logga in med admin admin</p>
  	    			<label>Name</label><br/>
  	    			<input name="username" onChange={this.onChange} type="text"/><br/>
  	    			<label>Pass</label><br/>
  	    			<input name="password" onChange={this.onChange} type="password"/><br/>
  	    			<button>login</button>
      			</div>
          </LoginForm>
            <button onClick={() => this.props.history.push('/skapa')}>Skapa</button>
    	</Container>
    );
  }
}

export default LoginPage

const Container = styled.section`
	width: 300px;
  background-color: rgba(0,0,0,0.3);
  display: flex;
  padding: 20px;
  align-items: center;
  margin: auto;
  margin-top: 100px;
`;

const LoginForm = styled.form`
`;