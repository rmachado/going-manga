import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { fade } from 'material-ui/utils/colorManipulator';
import { fullWhite, grey800, grey900, deepPurple900,
  deepPurpleA100, deepPurpleA200, deepPurpleA400
} from 'material-ui/styles/colors';

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: deepPurple900,
    primary2Color: grey900,
    primary3Color: grey800,
    accent1Color: deepPurpleA200,
    accent2Color: deepPurpleA400,
    accent3Color: deepPurpleA100,
    textColor: fullWhite,
    secondaryTextColor: fade(fullWhite, 0.7),
    alternateTextColor: fullWhite,
    canvasColor: '#303030',
    borderColor: fade(fullWhite, 0.3),
    disabledColor: fade(fullWhite, 0.3),
    pickerHeaderColor: fade(fullWhite, 0.12),
    clockCircleColor: fade(fullWhite, 0.12),
  },
  drawer: {
    color: grey900,
    textColor: fullWhite
  }
});

export default muiTheme;
