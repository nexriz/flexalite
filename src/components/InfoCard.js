import React from 'react';
import styled from 'styled-components';


export default ({ icon, title, children}) => {
    return (
        <InfoCard>
            <div><I>{icon || 'view_quilt'}</I><h5>{title || 'Välkommen'}</h5></div>
            <Content>
                {children}
            </Content>
        </InfoCard>       
    )
}
const Content = styled.div`
    margin: 20px 15px 10px;
`;
const InfoCard = styled.div`
    margin: auto;
    max-width: 400px;
    margin-top: 1px;
    min-height: 350px;
    overflow: scroll;
    color: ${props => props.theme.InfoCardTextColor ? props.theme.InfoCardTextColor : 'rgba(255,255,255,0.9)'};
    background-color: ${props => props.theme.InfoCardBackColor ? props.theme.InfoCardBackColor : '#242829'};
    box-shadow: 0 2px 2px 0 rgba(0,0,0,0.04), 0 1px 5px 0 rgba(0,0,0,0.04), 0 3px 1px -2px rgba(0,0,0,0.04);
    div:first-child {
        width: 100%;
        background-color: ${props => props.theme.InfoCardTitleColor ? props.theme.InfoCardTitleColor : '#292D2E'};
        border-bottom: 1px solid rgba(255,255,255,0.03);
        h5 {
            margin-top: 0;
            font-size: 18px;
            padding: 11px 0px 0px 40px;
        }
        i {
            transform: translate(8px, 8px);
        }
    }
`

const I = styled.i.attrs({
  className: 'material-icons'
})`
  position: absolute;
	color: rgba(255,255,255,1);
 	cursor: pointer;
`;