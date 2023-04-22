import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from './app/pages/splashScreen';
import LoginPage from './app/pages/login';
import RegisterPage from './app/pages/signup';
import SelectAvatar from './app/pages/selectAvatar';
import ChatAssist from './app/pages/chatAssist';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen name="Splash" component={SplashScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={LoginPage} options={{ title: 'Login', headerShown: false}} />
        <Stack.Screen name="Register" component={RegisterPage} options={{ title: 'Register', headerShown: false}} />
        <Stack.Screen name="SelectAvatar" component={SelectAvatar} options={{ title: 'SelectAvatar' }} />
        <Stack.Screen name="ChatAssist" component={ChatAssist} options={{ title: 'AI Assistant' }} />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
