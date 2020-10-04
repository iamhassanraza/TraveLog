import { createStackNavigator } from 'react-navigation-stack';

import Settings from './Settings'


const SettingsStack = createStackNavigator({
    Settings,
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