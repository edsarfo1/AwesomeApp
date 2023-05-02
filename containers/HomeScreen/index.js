import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';

class HomeScreen extends Component {
  render() {
    return (
      <View
        style={{
          paddingHorizontal: 20,
          justifyContent: 'center',
          height: '100%',
        }}>
        <Text
          style={{
            fontSize: 40,
            fontWeight: 'bold',
            textAlign: 'center',
            paddingBottom: 10,
          }}>
          Welcome!
        </Text>
        <Button
          title="Enter"
          onPress={() => {
            this.props.navigation.navigate('Personal Info');
          }}
        />
        <Button
          title="Image"
          onPress={() => {
            this.props.navigation.navigate('Image');
          }}
        />
      </View>
    );
  }
}

export default HomeScreen;
