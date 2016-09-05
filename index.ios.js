/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  TouchableOpacity
} from 'react-native';

class RNActivityIndicatorDemo extends Component {

  constructor(props) {
    super(props);
    this.state = {
      animating: true,
    };
  }

  showOrHide() {
    if (this.state.animating) {
      this.setState({
        animating: false
      });
    } else {
      this.setState({
        animating: true
      });
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity underlayColor="#fff" style={styles.btn} onPress={
          this.showOrHide.bind(this)}>
            <Text style={{color:'#fff', fontSize: 20}}>显示/隐藏</Text>
        </TouchableOpacity>
        <ActivityIndicator
          animating={this.state.animating}
          style={[styles.centering, {height: 80}]}
          size="small" />
        <ActivityIndicator
          animating={this.state.animating}
          style={[styles.centering, {height: 80}]}
          size="large" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  centering: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
  },
  btn:{
    marginTop:10,
    width:150,
    height:35,
    backgroundColor:'#3BC1FF',
    justifyContent:'center',
    alignItems:'center',
    borderRadius:4,
  },
});

AppRegistry.registerComponent('RNActivityIndicatorDemo', () => RNActivityIndicatorDemo);
