import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import user from './reducers/user';
import cards from './reducers/cards';
import home from './reducers/home';
import modal from './reducers/modal';

const reducers = combineReducers({
	user,
	cards,
	home,
	modal
})

const store = createStore(reducers, applyMiddleware(thunk));

export default store;