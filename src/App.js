import React from 'react';
import { connect } from 'react-redux';
import styled, { injectGlobal } from 'styled-components';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { RouteTransition } from 'react-router-transition';
//import './modules/video.css';
// Pages
import Home from './modules/Home';
import Login from './modules/Login';
import Cards from './modules/Cards';
import Favorite from './modules/Favorite';
import Profile from './modules/Profile';
import Create from './modules/Create';
import CardFullscreen from './modules/CardFullscreen';

import NavbarBottom from './components/NavbarBottom';
import patternsport from './Sports.png';
import Navigation from './components/Navigation';

import { fetchCards, dispatchsortCards } from './components/redux/actions/cardActions';
import Authenticate from './utilz/Authenticate';


const mapStateToProps = (state) => {
	return {
		cards: state.cards,
		isAuth: state.user.isAuth
	}
}
@connect(mapStateToProps, { fetchCards, dispatchsortCards })
export default class App extends React.Component {
  render() {
  	const { isAuth } = this.props;
    return (
    	<Router>
				<Route render={({location, history, match}) => {
					return (
						<Page id="page">
							<Navigation location={location} history={history}/>
						    	<RouteTransition
							      	component="div"
							        pathname={location.pathname}
							        atEnter={{ translateX: 15, opacity: 0 }}
							        atLeave={{ translateX: 15, opacity: 0 }}
							        atActive={{ translateX: 0, opacity: 1 }}
							        mapStyles={styles => ({ 
							        	transform: `translateX(${styles.translateX}%)`, 
							        	opacity: `${styles.opacity}`, position: 'fixed', 
							        	left: '0', 
							        	right: '0',
							        	height: '100%'
						        })}>
							      <Switch key={location.key} location={location}>
				    				<Route exact path="/" component={Home}/>		
				    				<Route exact static path="/kort" component={Cards}/>
				    				<Route path="/kort/:id" component={CardFullscreen}/>
								    <Route path="/skapa" component={Authenticate(Create)} />	    
								    <Route path="/favoriter" component={Authenticate(Favorite)}/>	    
								    <Route path="/profil" component={Authenticate(Profile)}/>	    
								    <Route path="/login" component={Login} />
								  </Switch>
								</RouteTransition>
							<NavbarBottom isAuth={isAuth && isAuth}/>
						</Page>
					);
				}} />
    	</Router>
    );
  }
}

const Page = styled.main`
`;

/* eslint-disable */
injectGlobal`
	@import url('https://fonts.googleapis.com/css?family=Anton|Audiowide|Chewy|Rubik+Mono+One');
	@font-face {
		font-family: 'Audiowide', cursive;
	}
	* {
		font-family: 'Audiowide', cursive;
		-webkit-font-smoothing: antialiased;
		user-select: none;
		-webkit-tap-highlight-color:  rgba(255, 255, 255, 0);
		list-style-type: none;
	}
	*:focus {
    	outline: none;
	}
	a {
		color: rgba(255,255,255,1);
	}
	body {
		margin: 0;
		padding: 0;
		background: url(${patternsport});
		overflow-x: hidden;
	}
	.my-menu {
		transition: background-color 0.15s ease-in-out;
		&:hover {
			background-color: #EA454B;
		}
	}
	.navbar-hide {
		height: 0px;
	}
	::-webkit-scrollbar { 
    display: none; 
	}
	.active {
		color: #EA454B;
	}
`;

const Footer = styled.footer`
	position: relative;
	bottom: 0px;
	height: 300px;
	width: 100%;
	background-color: rgba(241,241,241,0.7);
	color: black;
	display: flex;
	align-items: center;
	border: 1px solid rgba(0,0,0,0.1);
`;