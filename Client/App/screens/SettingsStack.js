import { createStackNavigator } from 'react-navigation-stack';
import Contact from './Contact'
import Settings from './Settings'
import FAQ from './FAQ'

const SettingsStack = createStackNavigator({
    Settings,
    Contact,
    FAQ
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