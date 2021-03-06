import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { Helmet } from "react-helmet";
import { connect } from 'react-redux';

import InfoCard from '../components/InfoCard';
import CollapseBox from '../components/CollapseBox';



const mapStateToProps = (state) => ({
  InfoData: state.home
})

@connect(mapStateToProps, {})
export default class Home extends React.Component {
  render() {
    const theme = {
      InfoCardIconColor: '#64b5f6'
    }
    const { InfoData} = this.props;

    return (
    <ThemeProvider theme={theme}>
      <Container style={{height: `${window.outerHeight - 50}px`}}>
        <Helmet>
          <title>Flexa Lite - Hem</title>
          <meta name="" content="" />
        </Helmet>

        <InfoCards data={InfoData}/>

        <Space />
      </Container>
    </ThemeProvider>
    );
  }
}



const InfoCards = ({data}) => {
  return (
    <div>
      {
        data.map((item, i) => 
          <InfoCard 
            title={item.title} 
            icon={item.icon} 
            iColor={item.iColor}
            key={i}>
              <ul>
                {item.content.map((content, index) => type_checker(content, index))}
              </ul>
            
          </InfoCard>)
      }
    </div>
  )
}

function type_checker(data, key) {
    switch(data.type) {
      case "collapse":
        return <CollapseBox header={data.header} bcolor={data.bcolor} key={key}>{data.text}</CollapseBox>
      case "list":
        return <li key={key}>{data.text}</li>
      case "space": return <br key={key}/>
      default:
        return <div key={key}/>
    }
}

const Space = styled.div`
  height: 0px;
`
const Container = styled.div`
  padding: 50px 0px 0px;
	position: fixed;
	left: 0;
	right: 0;
  overflow: scroll;
`;

//  box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14), 0 1px 5px 0 rgba(0,0,0,0.12), 0 3px 1px -2px rgba(0,0,0,0.2);