import React from 'react';
import {
  Text,
  View,
  Button
} from 'react-native';
import { StackNavigator } from 'react-navigation';

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Welcome',
  };
  render() {
    const { navigate } = this.props.navigation;
    console.log(this.props);
    return (
      <View>
        <Text>Hello, Navigation!</Text>
        <Button
          onPress={ () => navigate('Chat', { user: 'KIshan'})}
          title="Chat"
        />
      </View>
    )
    return <Text></Text>;
  }
}

export default HomeScreen;
