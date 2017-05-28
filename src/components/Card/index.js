import React from 'react';
import styled, { keyframes } from 'styled-components';
import { spring, Motion } from 'react-motion';
//import athlete from '../svg/weightlifting.svg';
//import exerc from '../svg/exercise.svg';
//import legdips from '../svg/legdips.svg';
//import medal from '../svg/medal.svg';
import corner from '../../svg/corner-handle.svg';
import CardPicture from './CardPicture';
import { SortableElement, SortableHandle } from 'react-sortable-hoc';
import Event from '../Event';

import iconchat from './chat.svg';
import iconglass from './glass.svg';

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
  	const { title, picture, infoItems} = props;	
		return (
    		<Contain>
        		<Event add={[{ type: 'dblclick', func: next}]}><CardPicture picture={picture && picture}/></Event>
        		<CardTitle title={title}/>
        		<Event tap={next}><Middle><MIcon>aspect_ratio</MIcon></Middle></Event>
        		<IconContainer><Ic><InfoB x="-63" y="7">Statistik</InfoB>assessment</Ic><Ic><InfoB x="-97" y="5">Kommentarer</InfoB>comment</Ic></IconContainer>
    		</Contain>
		);
}
//         		<PictureInfoItems infoItems={infoItems}/>

const IconContainer = styled.div`
	position: absolute;
	display: flex;
	flex-direction: column;
	bottom: 20px;
	right: 25px;
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
		opacity: 1;
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
	color: rgba(255,255,255, 0.65);
	&:hover {
		color: rgba(255,255,255, 0.96);
		${InfoB} {
			visibility: visible;
			animation: ${animateInfo} 0.1s forwards;
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
	margin: 0;
	opacity: 0.15;
	transform: scale(3);
	transition: color 0.2s ease-in-out, opacity 0.2s ease-in-out;
	text-shadow: 0 2px 2px 0 rgba(0,0,0,0.15), 0 1px 5px 0 rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.14);
	&:hover {
		opacity: 0.4;
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
	${props => props.shadow 
		&& `box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14), 0 1px 5px 0 rgba(0,0,0,0.12), 0 3px 1px -2px rgba(0,0,0,0.2);`}
`;


const Handle = SortableHandle(() => <HandleIcon  width="30px" height="30px" style={{position: 'absolute'}} src={corner} alt=""/>)
const HandleIcon = styled.img`
	transform: translate(289px, -31px) rotate(0deg);
`;
const CardTitle = (props) => <TitleBox><Icons className="material-icons">view_quilt</Icons><Title>{props.title}</Title></TitleBox>

const PictureInfoItems = ({infoItems}) => infoItems
										   		? <InfoBox>{infoItems.map((item, i) => <InfoItem>{item.name}</InfoItem>)}</InfoBox>
										   		: <InfoBox>
											   		<InfoItem>Styrka</InfoItem>
											   		<InfoItem>Flexibilitet</InfoItem>
											   		<InfoItem>Koncentration</InfoItem>
										   		  </InfoBox>






const Icons = styled.i`
	position: absolute;
	top: 15px;
	left: 12px;
	color: white;
 	cursor: pointer;
 	transform: scale(1.3);
 	transition: color 0.2s ease-in-out;
 	&:hover {
 		color: #EA454B;
 	}
`;



const InfoItem = styled.div`
	height: 20px;
	width: 22px;
	background-color: rgba(15,15,15, 0.8);
	transition: width 0.5s;
	color: white;
	padding-left: 6px;
	letter-spacing: 5px;
	&:hover {
		max-width: 400px;
	}
	overflow: hidden;
	cursor: pointer;
	user-select: none;
	-webkit-tap-highlight-color:  rgba(255, 255, 255, 0);
	z-index: 2;
	font-size: 15px;
`;

const InfoBox = styled.div`
	position: absolute;
	height: 80px;
	width: 50px;
	top: 0;
	transform: translate(0, -100px);
	z-index: 2;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	user-select: none;
	-webkit-tap-highlight-color:  rgba(255, 255, 255, 0);
`
const Title = styled.h3`
	position: absolute;
	top: 14px;
	left: 45px;
	color: rgba(255,255,255,1);
	font-size: 24px;
	padding: 0;
	margin: 0;
	font-family: 'Audiowide', cursive;
	letter-spacing: 1px;
	font-weight: 200;
	cursor: pointer;
	text-shadow: 0 0 10px rgba(0,0,0,0.5);
`;
const TitleBox = styled.div`
	width: inherit;
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
`;