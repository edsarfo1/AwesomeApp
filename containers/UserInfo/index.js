import React, {useState} from 'react';
import {View, Text, TextInput, Button, StyleSheet} from 'react-native';

function UserInfo(props) {
  const [fields, setFields] = useState({
    firstName: '',
    lastName: '',
    age: '',
  });

  const [showResult, setShowResult] = useState(false);

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    title: {
      fontSize: 30,
      fontWeight: 'bold',
      marginBottom: 20,
    },
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
      width: '80%',
    },
    result: {
      marginTop: 20,
    },
  });

  function handleFieldChange(name, text) {
    console.log('test');
    setFields({...fields, [name]: text});
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Enter your information</Text>

      <TextInput
        placeholder="First name"
        style={styles.input}
        onChangeText={text => handleFieldChange('firstName', text)}
        value={fields.firstName}
      />

      <TextInput
        placeholder="Last name"
        style={styles.input}
        onChangeText={text => handleFieldChange('lastName', text)}
        value={fields.lastName}
      />

      <TextInput
        placeholder="Age"
        style={styles.input}
        onChangeText={text => handleFieldChange('age', text)}
        value={fields.age}
        inputMode="numeric"
      />

      <Button
        title="Submit"
        onPress={() => setShowResult(currentResult => !currentResult)}
      />

      {showResult && (
        <Text style={styles.result}>
          Your name is {fields.firstName} {fields.lastName}. You are{' '}
          {fields.age} years old.
        </Text>
      )}
      <Button
        title="Go back to first screen in stack"
        onPress={() => props.navigation.popToTop()}
      />
    </View>
  );
}

export default UserInfo;
