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
    this.state = {// 初始设为显示加载动画
      animating: true,
    };
  }

  // 按钮响应方法，切换显示与隐藏
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
      {/* 切换显示或隐藏的按钮 */}
        <TouchableOpacity underlayColor="#fff" style={styles.btn} onPress={
          this.showOrHide.bind(this)}>
            <Text style={{color:'#fff', fontSize: 20}}>显示/隐藏</Text>
        </TouchableOpacity>
      {/* 小号的指示器 */}
        <ActivityIndicator
          animating={this.state.animating}
          style={[styles.centering, {height: 80}]}
          size="small" />
      {/* 大号的指示器 */}
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
