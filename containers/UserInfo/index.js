import {View, Text, TextInput, Button, StyleSheet, Modal} from 'react-native';
import {useAsyncStorage} from '@react-native-async-storage/async-storage';
import AsyncStorage from '@react-native-async-storage/async-storage';

function UserInfo(props) {
  const [fields, setFields] = useState({
    firstName: '',
    lastName: '',
    age: '',
  });

  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    console.log('Text updated:', fields);
  }, [fields]);

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
    modalContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    modalContent: {
      backgroundColor: 'white',
      padding: 20,
      borderRadius: 10,
      alignItems: 'center',
    },
  });

  function handleFieldChange(name, text) {
    // console.log('test');
    setFields({...fields, [name]: text});
  }

  const onStoreDataPress = useCallback(async UserObject => {
    try {
      const userObjectStringified = JSON.stringify(UserObject);
      await AsyncStorage.setItem('userObjectStr', userObjectStringified);
      console.log('Data saved');
    } catch (error) {
      console.log('Error', error);
    }
  }, []);

  const onRetrieveDataPress = useCallback(async () => {
    try {
      const userObjectStringified = await AsyncStorage.getItem('userObjectStr');
      if (userObjectStringified) {
        const UserObject = JSON.parse(userObjectStringified);
        setFields(UserObject);
        console.log('Data found');
      } else {
        console.log('No data found');
      }
    } catch (error) {
      console.log('Error', error);
    }
  }, []);

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
      <Button title="Submit Data" onPress={onStoreDataPress} />
      <Button title="Retrieve Data" onPress={onRetrieveDataPress} />
      {/* <Button title="Submit" onPress={() => setShowModal(true)} /> */}

      <Modal
        visible={showModal}
        animationType="fade"
        transparent={true}
        onRequestClose={() => setShowModal(false)}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.result}>
              Your name is {fields.firstName} {fields.lastName}. You are{' '}
              {fields.age} years old.
            </Text>
            <Button title="close" onPress={() => setShowModal(false)} />
          </View>
        </View>
      </Modal>

      <Button
        title="Go back to first screen in stack"
        onPress={() => props.navigation.popToTop()}
      />
    </View>
  );
}

export default React.memo(UserInfo);
