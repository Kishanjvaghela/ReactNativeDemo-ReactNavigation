import React from 'react';
import { StackNavigator,TabNavigator } from 'react-navigation';
import HomeScreen from './components/HomeScreen';
import ChatScreen from './components/ChatScreen';
import RecentChatsScreen from './components/RecentChatsScreen';
import AllContactsScreen from './components/AllContactsScreen';

const MainScreenNavigator = TabNavigator ({
  Recent: { screen: RecentChatsScreen },
  All: { screen: AllContactsScreen },
});

MainScreenNavigator.navigationOptions = {
  title: 'My Chats',
};

const App = StackNavigator({
  Home: { screen: MainScreenNavigator },
  Chat: { screen: ChatScreen}
});

export default App;
