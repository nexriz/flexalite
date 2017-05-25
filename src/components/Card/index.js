import React from 'react';
import styled from 'styled-components';
//import athlete from '../svg/weightlifting.svg';
//import exerc from '../svg/exercise.svg';
//import legdips from '../svg/legdips.svg';
//import medal from '../svg/medal.svg';
import corner from '../../svg/corner-handle.svg';
import CardPicture from './CardPicture';
import { SortableElement, SortableHandle } from 'react-sortable-hoc';
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
  	const { title, picture, infoItems} = props;	
		return (
    		<Contain>
        		<Event add={[{ type: 'dblclick', func: next}]}><CardPicture picture={picture && picture}/></Event>
        		<CardTitle title={title} onClick={next}/>
        		<PictureInfoItems infoItems={infoItems}/>
        		<Handle />
    		</Contain>
		);
}


const Contain = styled.div`
	width: 320px;
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
const CardTitle = (props) => <TitleBox><Event tap={props.onClick}><Icons className="material-icons">assessment</Icons></Event><Title>{props.title}</Title></TitleBox>

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
		width: 314px;
	}
	overflow: hidden;
	cursor: pointer;
	user-select: none;
	-webkit-tap-highlight-color:  rgba(255, 255, 255, 0);
	z-index: 2;
	font-size: 15px;
`;

const InfoBox = styled.div`
	height: 80px;
	width: 50px;
	position: absolute;
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
	position: absolute;
	top: 0;
	width: inherit;
	height: 50px;
	background-color: rgba(0,0,0,0);
`;
// #37474f

const CardContainer = styled.div`
	margin: auto;
	width: 320px;
	min-height: 200px;
	border-radius: 2px;
	overflow: hidden;
	background-color: ${props => props.color ? props.color : '#fffde7'};
	box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14), 0 1px 5px 0 rgba(0,0,0,0.12), 0 3px 1px -2px rgba(0,0,0,0.2);
`;