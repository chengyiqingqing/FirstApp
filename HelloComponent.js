/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
// 1.从react中导入react
import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View
} from 'react-native';

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
    android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
/**
 * 方式一：使用ES6的方式创建组件；（推荐）最新的语法；
 * 定义方式如下：
 * 使用方式：import 该文件；<HelloComponent/>
 */
export default class HelloComponent extends Component<Props> {
    render() {
        return (
                <Text style={{fontSize:20,backgroundColor:'#00ff00'}}>
                    ES6的方式创建组件：HelloComponent {this.props.name}
                </Text>

        );
    }
}

/**
 * 方式二：使用ES5的方式创建组件；（不推荐，不过也没生效） (这样设置了，但是没有生效React.createClass方法没有找到)
 * 会看到以前的方式创建；记得要将它迁移成ES6的方式。
 */
/*var HelloComponent = React.createClass({
    render() {
        return (
            <Text style={{fontSize:20,backgroundColor:'#00ffff'}}>
                ES5的方式创建组件：HelloComponent1
            </Text>
        );
    }
})
module.exports=HelloComponent;*/

/**
 * 方式三：函数式的。
 */
/*function HelloComponent(props) {
    return <Text style={{fontSize:20,backgroundColor:'#00ff00'}}>Hello  {props.name}</Text>;
}
module.exports=HelloComponent;*/

