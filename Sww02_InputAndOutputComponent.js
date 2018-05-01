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

type Props = {};
var name='sww';
var age=23;
export {name,age};

/**
 * 方式一：使用ES6的方式创建组件；（推荐）最新的语法；
 * 定义方式如下：
 * 使用方式：import 该文件；<HelloComponent/>
 */
export default class Sww02_InputAndOutputComponent extends Component<Props> {
    render() {
        return (
                <Text style={{fontSize:20,backgroundColor:'#00ff00'}}>
                    ES6的方式创建组件：HelloComponent {this.props.name}
                </Text>

        );
    }
}

export function sum(a,b) {
    return a+b;
}