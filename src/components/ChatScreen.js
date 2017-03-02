import React from 'react';
import {
  View,
  Text,
  Button
} from 'react-native';

class ChatScreen extends React.Component {
  static navigationOptions = {
     // Nav options can be defined as a function of the navigation prop:
    title: ({ state }) => `Chat with ${state.params.user}`,
    header: {
      right: <Button title="Info" />,
    }
  };

  render() {
     // The screen's current route is passed in to `props.navigation.state`:
    const { params } = this.props.navigation.state;

    return (
      <View>
        <Text>
          Chat with {params.user}
        </Text>
      </View>
    )
  }
}

export default ChatScreen;
