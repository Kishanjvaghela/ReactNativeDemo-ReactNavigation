import React from 'react';
import { StackNavigator,TabNavigator } from 'react-navigation';
import HomeScreen from './components/HomeScreen';
import ChatScreen from './components/ChatScreen';
import RecentChatsScreen from './components/RecentChatsScreen';
import AllContactsScreen from './components/AllContactsScreen';

const mainScreenNavigator = TabNavigator ({
  Recent: { screen: RecentChatsScreen },
  All: { screen: AllContactsScreen },
},{
  tabBarOptions : {
    style: {
      backgroundColor: '#42a5f5',
    }
  }
});

mainScreenNavigator.navigationOptions = {
  title: 'My Chats',
  header: {
    tintColor: 'white',
    style: {
      backgroundColor: '#42a5f5',
   }
 },
};

const App = StackNavigator({
  Home: { screen: mainScreenNavigator },
  Chat: { screen: ChatScreen}
});

export default App;
