import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


import asyncFunc from './notification';


export default class App extends React.Component {
      
  componentDidMount() {
     
    asyncFunc().then(data => { console.log(data) })

  };

  

  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
      </View>
    );
  }
  
 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
