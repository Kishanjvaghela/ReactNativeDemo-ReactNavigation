import React from 'react';
import {
  Text,
  View,
  Button
} from 'react-native';

class AllContactsScreen extends React.Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Text> List of all contacts.</Text>
        <Button
          onPress={ () => navigate('Chat', { user: 'KIshan'})}
          title="Chat"
        />
      </View>
    )
  }
}

export default AllContactsScreen;
