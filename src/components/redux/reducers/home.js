let init = [
  {
    title: "Nyheter",
    icon: "new_releases",
    iColor: "",
    content: [
        {
          type: 'list',
          text: 'Vad som har ändrats på sidan till exempel, vad som är nytt inom träningen etc.. bla bla..'
        },
        {
          type: 'space'
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
    iColor: "white",
    content: [
        {
          type: 'collapse',
          bcolor: 'primary',
          header: 'INFO',
          text: 'Typ av kollaps knappar'
        },
        {
          type: 'collapse',
          bcolor: 'danger',
          header: 'VARNING',
          text: 'Göm vad du vill här'
        },
        {
          type: 'collapse',
          bcolor: 'news',
          header: 'NYHET',
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
          bcolor: '#9c27b0',
          header: 'FÖRSTA UPPLÄGGET',
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
    title: "Mina Tillägg",
    icon: "note_add",
    iColor: "#ffd180",
    content: [
        {
          type: 'list',
          text: 'Tanken är att det ska finnas extra tillägg för sidan, egna statistik mätare och annat.'
        }
    ]
  },
]
export default (state=init, action) => {
	switch(action.type) {
		case 'ADD_INFO_CARD':
			return [...state, ...action.payload]
		case 'REMOVE_INFO_CARD':
			return state.filter((item, i) => action.payload !== i)
		default:
			return state
	}
}