import { createStackNavigator } from 'react-navigation-stack';
import Contact from './Contact'
import Settings from './Settings'

const SettingsStack = createStackNavigator({
    Settings,
    Contact
    // Help,
    // Terms,
    // Support,
    // ChangePassword
  },
  {
    initialRouteName: 'Settings',
    headerLayoutPreset: 'center',
    defaultNavigationOptions: {
      header: null
    },
    navigationOptions : {
        header : null
    }
  }
  );

  export default SettingsStack;