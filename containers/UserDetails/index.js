import React from 'react';
import {View, TextInput, Text} from 'react-native';

class UserDetails extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: props?.user?.firstName,
      lastName: props?.user?.lastName,
    };
  }

  renderPersonalFields = () => {
    const {firstName, lastName} = this.state;

    return (
      <View>
        <TextInput
          onChangeText={ChangedText => {
            this.setState({firstName: ChangedText});
          }}
          value={firstName}
          placeholder="First Name"
        />
        <TextInput
          onChangeText={ChangedText => {
            this.setState({lastName: ChangedText});
          }}
          value={lastName}
          placeholder="Last Name"
        />
      </View>
    );
  };

  render() {
    return (
      <View>
        {this.renderPersonalFields()}
        <Text>
          {this.state.firstName} {this.state.lastName}
        </Text>
      </View>
    );
  }
}

export default UserDetails;
