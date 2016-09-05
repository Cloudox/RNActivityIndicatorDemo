# RNActivityIndicatorDemo
React Native的加载指示器简单实用demo

这里讲一下React Native中的一个组件——ActivityIndicator，这是一个加载指示器，俗称菊花，很常见的，效果如下所示：

![](https://github.com/Cloudox/RNActivityIndicatorDemo/blob/master/DemoScreen.gif)

可以看到图中有两个加载指示器，一大一小，这是尺寸不是我设置的，这个组件本身就有一个属性是设置其大小的，两个选项，一大一小。这里顺便就介绍一些该组件的属性：

* animating：这个参数接受布尔型的值，表示是否显示加载指示器。
* color：string型参数，用来设置指示器的颜色，默认是灰色的，我们一般也不管他。
* hidesWhenStopped（仅iOS可用）：在没有动画的时候，是否要隐藏指示器（默认为true）。
* size：这就是设置尺寸的，就两个选项，small和large，一小一大。

能设置的就这几个参数，接下来我们看看这个例子。例子中有一个按钮，控制了指示器的显示和隐藏。按钮我们用TouchableOpacity组件来实现，这个组件可以添加一个响应方法，下面我们放一小一大两个指示器，代码如下：

```JavaScript
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
```

看代码，我们首先就在state中加了一个变量animating，用来控制指示器的显示与隐藏，初始是显示的。然后看我们的界面元素部分，即render中的部分，除了最外面一层view外，最上面就是一个TouchableOpacity，onPress属性指向了一个响应方法，即showOrHide方法，在这个方法中我们可以看到，很简单地实现了一个通过animating变量切换显示与隐藏的功能。因此下面的ActivityIndicator元素中我们的animating属性是用state中的animating变量来控制的，其余的属性我们基本是默认的，size一小一大，很简单的例子。

查看[我的博客](http://blog.csdn.net/Cloudox_/article/details/52440547)获取更多内容
