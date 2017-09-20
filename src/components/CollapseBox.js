import React from 'react';
import styled from 'styled-components';
import { Motion, spring } from 'react-motion';

export default class CollItem extends React.Component {
	state = { 
		id: Math.random().toString(32).substring(2),
		display: false
	}
	c
	componentDidMount() {
		this.header = document.getElementById(this.state.id);
		this.header.addEventListener('touchstop', this.mouseEventClick, false);
	}
	componentWillUnmount() {
		this.header.removeEventListener('touchstop', this.mouseEventClick, false);
		this.header = false;
		this.setState({display: false})
	}
	mouseEventClick = (e) => {
		e.preventDefault();
		this.setState((state) => {
			return {
				display: !state.display
			}
		})
	}
	render() {
		const { display, id } = this.state;
		const { header, bcolor } = this.props;
		return (
			<Motion 
				defaultStyle={{margin: 30, bottom: 0}} 
				style={{
					margin: spring(display ? 0 : 20, {damping: 10, stiffness: 600, precision: 1}), 
					bottom: spring(display ? 10 : 4, {damping: 23})}}>
				{styles =>
					<Collapseble bcolor={bcolor} style={{
						padding: '8px 0px',
						margin: `${styles.bottom}px ${styles.margin}px ${styles.bottom}px ${styles.margin}px`,
						borderBottom: '1px solid rgba(0,0,0,0)'
						}} >
						   	<Header id={id} ref="test" onClick={this.mouseEventClick}>
										
						   				<Title>{header}</Title>
						   	</Header>
							{display && <Content>{this.props.children}</Content>}
					</Collapseble>
				}
			</Motion>
			);
	}
}
// <i className="material-icons">present_to_all</i>
const Title = styled.h5`
	text-align: center;
	font-size: 16px;
	letter-spacing: 1px;
	font-weight: 700;
	user-select: none;
	margin: 0;
`;
						// backgroundColor: '#546e7a'

function color_checker(props) {
	switch(props.bcolor) {
		case 'primary':
			return '#0d47a1'
		case 'danger':
			return '#b71c1c'
		case 'news':
			return '#b8dd57'
		default:
			return props.bcolor || '#343434'
	}
}						
const Collapseble = styled.li`
	-webkit-tap-highlight-color: rgba(255, 255, 255, 0);
	user-select: none;
	background-color: ${props => color_checker(props)};
	border: 1px solid rgba(0,0,0,0);
	border-radius: 5px;
	cursor: pointer;
	box-shadow: 0 3px 0px 0 rgba(0,0,0,0.3), 0 3px 0px 0 rgba(0,0,0,0.1);
`;
const Header = styled.a`
	width: 100px;
	i {
		position: absolute;
		transform: translate(10px, -3px);
		color: #ff9e80;
	}
`;
const Content = styled.div`
	border-top: 1px solid rgba(255,255,255,1)
	height: 100%;
	background-color: rgba(255,255,255,0.04);
	margin-top: 15px;
	padding: 10px;
`;