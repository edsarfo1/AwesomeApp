import React from 'react';
import {View, Text, TextInput} from 'react-native';

const UserDetailsFunct = () => {
  const [Firstname, setFirstName] = useState('');
  const [LastName, setLastName] = useState('');
  const [Gender, setGender] = useState('');

  return (
    <View style={{flex: 1}}>
      <TextInput
        onChangeText={text => setFirstName(text)}
        value={Firstname}
        placeholder="First Name"
      />
      <TextInput
        onChangeText={text => setLastName(text)}
        value={LastName}
        placeholder="Last Name"
      />
      <TextInput
        onChangeText={text => setGender(text)}
        value={Gender}
        placeholder="Gender"
      />
      <Text> Hello World! </Text>
    </View>
  );
};

export default UserDetailsFunct;
