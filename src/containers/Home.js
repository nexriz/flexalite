import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { Helmet } from "react-helmet";
import InfoCard from '../components/InfoCard';
import CollapseBox from '../components/CollapseBox';

export default class Home extends React.Component {
  render() {
    const theme = {
      InfoCardIconColor: '#64b5f6'
    }
    return (
    <ThemeProvider theme={theme}>
      <Container style={{height: `${window.innerHeight - 50}px`}}>
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

const InfoData = [
  {
    title: "Välkommen",
    icon: "new_releases",
    iColor: "",
    content: [
        {
          type: 'list',
          text: 'Träningskort - 50%'
        },
        {
          type: 'list',
          text: 'Kort skapare - 20%'
        },
        {
          type: 'list',
          text: 'Annat - ... inc'
        },
        {
          type: 'list',
          text: 'Navigering - 100%'
        },
        {
          type: 'list',
          text: 'Total - 30%'
        }
    ]
  },
  {
    title: "Uppdateringar",
    icon: "settings_remote",
    iColor: "#ffeb3b",
    content: [
        {
          type: 'collapse',
          header: 'Öppna',
          text: 'Typ av kollaps knappar'
        },
        {
          type: 'collapse',
          header: 'Info',
          text: 'Göm vad du vill här'
        },
        {
          type: 'collapse',
          header: 'Nytt',
          text: 'Senaste nytt utan att spoila'
        }
    ]
  },
  {
    title: "Mitt Schema",
    icon: "schedule",
    iColor: "#aeea00",
    content: [
        {
          type: 'list',
          text: 'Här kan du ha ditt schema.'
        },
        {
          type: 'space'
        },
        {
          type: 'collapse',
          header: 'Första Upplägg',
          text: 'Göm vad du vill här'
        }
    ]
  },
  {
    title: "Inställningar",
    icon: "settings",
    iColor: "white",
    content: [
        {
          type: 'list',
          text: 'Ska finnas inställningar för utseende och annat.'
        }
    ]
  },
  {
    title: "Egna plugins",
    icon: "note_add",
    iColor: "#ffd180",
    content: [
        {
          type: 'list',
          text: 'Tanken är att det ska finnas extra till lägg för sidan, egna statistik mätare och annat.'
        }
    ]
  },
]

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
            <Input />
          </InfoCard>)
      }
    </div>
  )
}

function type_checker(data, key) {
    switch(data.type) {
      case "collapse":
        return <CollapseBox header={data.header} key={key}>{data.text}</CollapseBox>
      case "list":
        return <li key={key}>{data.text}</li>
      case "space": return <br key={key}/>
      default:
        return <div key={key}/>
    }
}

const Input = styled.input`
  opacity: 1!important;
  position: relative!important;
  left: 0!important;
`;
const Space = styled.div`
  height: 0px;
`
const Container = styled.div`
  padding-top: 51px;
	position: fixed;
	left: 0;
	right: 0;
  overflow: scroll;
`;

//  box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14), 0 1px 5px 0 rgba(0,0,0,0.12), 0 3px 1px -2px rgba(0,0,0,0.2);