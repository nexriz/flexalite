import React from 'react';
import styled from 'styled-components';


export default function CardPicture({ picture }) {
		return (
				<Picture style={{
						background: `url(${picture || 'http://cdn-mf0.heartyhosting.com/sites/mensfitness.com/files/_main_chest_2.jpg'}) center`,
	 			}}/>

		)
}

const Picture = styled.div`
	height: 200px;
	max-width: 100%;
	background-size: cover!important;
	transition: filter 0.3s
`;
