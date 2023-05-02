import React, {Component, useState} from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  TextInput,
  Button,
} from 'react-native';
import {isEqual} from 'lodash';

class FlatListDemo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      firstName: '',
      listData: [
        {
          title: 'First Item',
          firstName: 'Edward',
        },
        {
          title: 'Second Item',
          firstName: 'Victor',
        },
        {
          title: 'Third Item',
          firstName: 'Ali',
        },
      ],
    };
  }

  shouldComponentUpdat(nextProps, nextState) {
    return !_.isEqual(this.state, nextState);
    console.log(this.shouldComponentUpdate);
  }

  render() {
    const Item = props => (
      <View style={styles.item}>
        <Text style={styles.title}>{props.data.title}</Text>
        <Text>{props.data.firstName}</Text>
      </View>
    );

    return (
      <SafeAreaView style={styles.container}>
        <FlatList
          data={this.state.listData}
          renderItem={({item}) => {
            return <Item data={item} />;
          }}
        />
        <TextInput
          value={this.state.title}
          placeholder="Please enter title"
          onChangeText={changedText => {
            this.setTitle({title: changedText});
          }}
        />
        <TextInput
          value={this.state.firstName}
          placeholder="Please enter first name"
          onChangeText={changedText => {
            this.setState({firstName: changedText});
          }}
        />
        <Button
          title="Submit"
          onPress={() => {
            if (!title || !firstName) {
              return;
            }

            const newRecord = {title: title, firstName: firstName};

            setListData([...listData, newRecord]);
            setTitle('');
            setFirstName('');
          }}
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

export default FlatListDemo;
