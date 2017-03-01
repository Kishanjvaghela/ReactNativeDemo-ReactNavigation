import React from 'react';
import {
  Text,
  View,
  Button
} from 'react-native';

class RecentChatScreen extends React.Component {

  static navigationOptions = {
    tabBar: ({ state }) => ({
      label: 'Recents'
    })
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Text> List of recent chats </Text>
        <Button
          onPress={ () => navigate('Chat', { user: 'KIshan'})}
          title="Chat"
        />
      </View>
    )
  }
}

export default RecentChatScreen;
