import { createStackNavigator } from 'react-navigation';

import SingIn from './pages/signIn';

import SingUp from './pages/signUp';

import Main from './pages/main';

const Routes = createStackNavigator({
    SingIn,
    SingUp,
    Main
});

export default Routes;
