import React from 'react';
import {
  View,
  Text,
  Button
} from 'react-native';

class ChatScreen extends React.Component {
  static navigationOptions = {
     // Nav options can be defined as a function of the navigation prop:
    title: ({ state }) => {
      if(state.params.mode === 'info') {
        return `${state.params.user}'s Contact Info`;
      }
      return `Chat with ${state.params.user}`;
    },
    header: ({ state, setParams }) => {
      let right = (
        <Button
          title={`${state.params.user}'s info`}
          onPress={() => setParams({ mode: 'info' })}
          />
        );

      if (state.params.mode === 'info') {
        right = (
          <Button
            title="Done"
            onPress={() => setParams({ mode: 'none' })}
            />
          );
      }

      return {
        right,
        tintColor: 'blue'
      };
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
