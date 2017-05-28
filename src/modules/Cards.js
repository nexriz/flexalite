import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { SortableContainer, arrayMove } from 'react-sortable-hoc';
import VirtualList from 'react-tiny-virtual-list';
import { fetchCards, dispatchsortCards } from '../components/redux/actions/cardActions';
import { Helmet } from "react-helmet";

import Card from '../components/Card';




const mapStateToProps = (state) => {
	return {
		cards: state.cards,
		isAuth: state.user.isAuth
	}
}
@connect(mapStateToProps, { fetchCards, dispatchsortCards })
export default class CardComponent extends React.Component {
	constructor() {
		super();
	}
	componentWillMount() {
  		this.props.fetchCards({})
  	}
	onSortEnd = ({oldIndex, newIndex}) => {
	  	const newCards = arrayMove(this.props.cards, oldIndex, newIndex);
	  	this.setState({close: null})
  	}
	render() {
		return (
			<Container>
		        <Helmet>
		          <title>Flexa Lite - Kort</title>
		          <meta name="" content="" />
		        </Helmet>
				<CardsContainer>
						<InfiniteScroll key={'awdawd'} history={this.props.history} cards={this.props.cards} closeColl={this.closeColl} onSortEnd={this.onSortEnd}/>
				</CardsContainer>
			</Container>
		)
	}
}

const StyledVirtualList = styled(VirtualList)`
	-ms-overflow-style: -ms-autohiding-scrollbar;	
`;

const CardsContainer = styled.div`
	max-width: 400px;
	margin: auto;
	-ms-overflow-style: -ms-autohiding-scrollbar;
`;
const Container = styled.div`
	margin-top: 52px;
	-ms-overflow-style: -ms-autohiding-scrollbar;
`;

const InfiniteScroll = ({ cards, closeColl, onSortEnd, history }) => {
	return <CardList
			history={history}
			cards={cards} 
			closeColl={closeColl} 
			onSortEnd={onSortEnd}
			useDragHandle={true}
			lockAxis="y"/>
}


const CardList = SortableContainer(({cards, history}) => {
	return <StyledVirtualList

			    width='auto'
			    height={window.innerHeight - 104}
			    itemCount={cards.length}
			    itemSize={202}
			    scrollDirection='vertical'
			    renderItem={({index, style}) => <Card history={history} style={style} key={`item-${index}`} index={index} myKey={index} props={cards[index]} />}
		    />
	}
)
