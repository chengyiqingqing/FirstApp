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
export default class LifecycleComponent extends Component<Props> {

    /**
     * 1.构造方法：
     * @param props
     */
    constructor(props){
        super(props);
        console.log('--1.constructor--');
        this.state={
            count:0,
        }
    }

    /**
     * 3.渲染组件；
     * @returns {*}
     */
    render() {
        console.log('--3.render--');
        return (<View>
                    <Text style={{fontSize:20,backgroundColor:'#00ff00'}}
                          // 给该组件设置一个点击事件
                    onPress={()=>{
                        this.setState({
                            count:this.state.count+1,
                        })
                    }}
                    >
                        LifecycleComponent 显示{this.props.name}
                    </Text>
                    <Text >显示：{this.state.count}</Text>
            </View>
        );
    }

    /**
     * 2.服务器端和客户端都只调用一次，在初始化渲染执行之前立刻调用
     *  完成组件装载；
     */
    componentWillMount(){
        console.log('--2.componentWillMount--');
    }

    /**
     * 3.
     */
    componentDidMount(){
        console.log('--4.componentDidMount--');
    }

    componentWillReceiveProps(nextProps){
        console.log('--5.componentWillReceiveProps--');
    }

    /**
     * 6.组件再次完成更新行为时。
     * @param nextProps
     * @param nextState
     * @returns {boolean}
     */
    shouldComponentUpdate(nextProps,nextState){
        console.log('--6.shouldComponentUpdate--');
        return true;
    }

    /**
     * 7.组件即将更新。
     */
    componentWillUpdate(){
        console.log('--7.componentWillUpdate--');
    }

    /**
     * 3.render()完成组件的更新渲染。
     * 8.组件更新完毕；
     */
    componentDidUpdate(){
        console.log('--8.componentDidUpdate--');
    }

    /**
     * 退出程序会调用将要卸载组件。
     */
    componentWillUnmount(){
        console.log('--9.componentWillUnmount--');
    }

}
