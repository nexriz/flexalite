import React from 'react';
import styled, { keyframes } from 'styled-components';

//import athlete from '../svg/weightlifting.svg';
//import exerc from '../svg/exercise.svg';
//import legdips from '../svg/legdips.svg';
//import medal from '../svg/medal.svg';
//import corner from '../../svg/corner-handle.svg';
import CardPicture from './CardPicture';
import { SortableElement } from 'react-sortable-hoc';
import Event from '../Event';

 export default SortableElement(({props, style, history}) => {
  	const { color } = props;	
    	return (
    		<li style={{...style }}>
	        	<CardContainer color={color}>
	        		<Card props={props} history={history} />
	            </CardContainer>
    		</li>
        );
})

const Card = ({props, history}) => {
	const next = (e) => {
		e.preventDefault();
		history.push('/kort/23')
	}
  	const { title, picture } = props;	
		return (
    		<Contain>
        		<Event add={[{ type: 'dblclick', func: next}]}><CardPicture picture={picture && picture}/></Event>
        		<CardTitle title={title}/>
        		<Event tap={next}><Middle><MIcon>visibility</MIcon></Middle></Event>

        		<IconContainer><Ic><InfoB x="-63" y="7">Statistik</InfoB>assessment</Ic><Ic><InfoB x="-97" y="4">Kommentarer</InfoB>comment</Ic></IconContainer>
    		</Contain>
		);
}
//         		<PictureInfoItems infoItems={infoItems}/>

// function BoxFunc() {
// 	return (
// 		<CardBox>
// 			<li>Styrka</li>
// 			<li>Flexibilitet</li>
// 			<li>Koncentration</li>
// 		</CardBox>
// 	)
// }
const CardBox = styled.ul`
	position: absolute;
	top: 75px;
	left: 0px;
	width: 30%;
	max-height: 60%;
	transform: translateX(-100px);
	background-color: rgba(0,0,0,0);
	padding: 10px;
	border-radius: 2px;
	color: rgba(255,255,255,0);
	font-size: 10px;
	li {
		margin-bottom: 5px;
		margin-left: 10px;
	}
`;
const IconContainer = styled.div`
	position: absolute;
	display: flex;
	flex-direction: column;
	bottom: 20px;
	right: 15px;
	margin: auto;

`
const InfoB = styled.div`
	position: absolute;
	visibility: hidden;
	font-size: 12px;
	font-weight: 100;
	opacity: 0;
	position: absolute;
	transform: translate(${props => props.x ? props.x : '-40'}px,${props => props.y ? props.y : '7'}px);
`;

const animateInfo = keyframes`
	from {
		opacity: 0;
	}
	to {
		opacity: 0.7;
	}
`;
const Ic = styled.i.attrs({
	className: 'material-icons'
})`
 	cursor: pointer;
 	border: 1px solid rgba(0,0,0,0);
 	width: 27px;
	transform: scale(1.3);
	text-shadow: 0 2px 2px 0 rgba(0,0,0,0.15), 0 1px 5px 0 rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.14);
	color: rgba(255,255,255, 0.55);
	&:hover {
		color: rgba(255,255,255, 0.96);
		${InfoB} {
			visibility: visible;
			animation: ${animateInfo} 0.1s forwards;
			text-shadow: 0 2px 2px 0 rgba(0,0,0,0.15), 0 1px 5px 0 rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.14);
			color: white;
		}
	}

	&:focus {
		color: rgba(255,255,255, 0.8);
	}
	margin-top: 25px;
	transition: color 0.1s ease-in-out;

`;


// <PictureInfoItems infoItems={infoItems}/>

const Middle = styled.div`
	position: absolute;
	right: 0;
	left: 0;
	top: 100px;
	margin: auto;
	width: 50px;
`;

const MIcon = Ic.extend`
	position: absolute;
	padding-left: 4px;
	margin: 0;
	opacity: 0;
	visibility: hidden;
	transform: scale(3.3);
	transition: color 0.1s ease-in-out, opacity 0.3s ease-in-out, transform 0.1s ease-in-out;
	text-shadow: 0 2px 2px 0 rgba(0,0,0,0.15), 0 1px 5px 0 rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.14);
	&:hover {
		opacity: 0.8;
		transform: scale(3.5);
		color: white;
	}
	&:focus {
		color: white;
	}	
`;


const Contain = styled.div`
	max-width: 400px;
	height: 200px;
	border-radius: 2px;
	overflow: hidden;
	}
	${props => props.shadow 
		&& `box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14), 0 1px 5px 0 rgba(0,0,0,0.12), 0 3px 1px -2px rgba(0,0,0,0.2);`}
`;


//const Handle = SortableHandle(() => <HandleIcon  width="30px" height="30px" style={{position: 'absolute'}} src={corner} alt=""/>)
// const HandleIcon = styled.img`
// 	transform: translate(289px, -31px) rotate(0deg);
// `;
const CardTitle = (props) => <TitleBox><Icons className="material-icons">view_quilt</Icons><Title>{props.title}</Title></TitleBox>

const Icons = styled.i`
	position: absolute;
	border: 1px solid rgba(0,0,0,0);
	top: 15px;
	left: 12px;
	color: rgba(255,255,255,1);
 	cursor: pointer;
 	transform: scale(1.3);
 	transition: color 0.2s ease-in-out;
 	&:hover {
 		color: #EA454B;
 	}
`;

const Title = styled.h3`
	position: absolute;
	top: 15px;
	left: 45px;
	color: rgba(255,255,255,1);
	font-size: 24px;
	padding: 0;
	margin: 0;
	font-family: 'Audiowide', cursive;
	letter-spacing: 1px;
	font-weight: 200;
	cursor: pointer;
	text-shadow: 0 0 10px rgba(0,0,0,0.2);
`;
const TitleBox = styled.div`
	position: absolute;
	top: 0px;
	left: 5px;
	width: 300px;
	height: 50px;
	background-color: rgba(0,0,0,0);
`;
// #37474f

const CardContainer = styled.div`
	margin: auto;
	max-width: 400px;
	min-height: 200px;
	border-radius: 2px;
	overflow: hidden;
	background-color: ${props => props.color ? props.color : '#fffde7'};
	box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14), 0 1px 5px 0 rgba(0,0,0,0.12), 0 3px 1px -2px rgba(0,0,0,0.2);
	&:hover {
		${CardBox} {
			transition: background-color 0.5s ease-in-out, color 0.5s ease-in-out, transform 0.3s ease-in-out;
			background-color: rgba(0,0,0,0.3);
			color: rgba(255,255,255,0.8);
			transform: translateX(0px);
		}
		${MIcon} {
			visibility: visible;
			opacity: 0.7;
		}
	}
`;