import React from 'react';
import { StackNavigator } from 'react-navigation';
import HomeScreen from './components/HomeScreen';
import ChatScreen from './components/ChatScreen';

const App = StackNavigator({
  Home: { screen: HomeScreen },
  Chat: { screen: ChatScreen}
});

export default App;
