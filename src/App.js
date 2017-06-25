import React from 'react';
import { connect } from 'react-redux';
import styled, { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { RouteTransition } from 'react-router-transition';
//import './modules/video.css';

// Containers
import Home from './containers/Home';
import Login from './containers/Login';
import Cards from './containers/Cards';
import Favorite from './containers/Favorite';
import Profile from './containers/Profile';
import Create from './containers/Create';
import CardFullscreen from './containers/CardFullscreen';

// Components
import NavbarBottom from './components/NavbarBottom';
import Navigation from './components/Navigation';

import { fetchCards, dispatchsortCards } from './components/redux/actions/cardActions';
import { toggleModal } from './components/redux/actions/modalActions';
import Authenticate from './utilz/Authenticate';
// Assets
import './App.css';


const mapStateToProps = (state) => {
	return {
		cards: state.cards,
		isAuth: state.user.isAuth
	}
}
@connect(mapStateToProps, { fetchCards, dispatchsortCards, toggleModal })
export default class App extends React.Component {
  render() {

  	const { isAuth } = this.props;
	const theme = {
		NavTopColor: '',
		NavBottomColor: '',
		InfoCardBackColor: '',
		InfoCardTextColor: '',
		InfoCardTitleColor: ''
	}
    return (
    	<Router>
			<Route render={({location, history, match}) => {
				return (
					<ThemeProvider theme={theme}>
						<Page id="page">
							<Navigation location={location} history={history} modal={this.props.toggleModal}/>
								<Transition location={location}>
									<Switch key={location.key} location={location}>
										<Route exact path="/" component={Home}/>		
										<Route exact static path="/kort" component={Cards}/>
										<Route path="/kort/:id" component={CardFullscreen}/>
										<Route path="/skapa" component={Authenticate(Create)} />	    
										<Route path="/favoriter" component={Authenticate(Favorite)}/>	    
										<Route path="/profil" component={Authenticate(Profile)}/>	    
										<Route path="/login" component={Login} />
									</Switch>
								</Transition>
							<NavbarBottom isAuth={isAuth && isAuth} />
						</Page>
					</ThemeProvider>
				);
			}} />
    	</Router>
    );
  }
}

const Page = styled.main`
`;

const Transition = ({location, children}) => {
	return (
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
		{children}
		</RouteTransition>
	)
}

