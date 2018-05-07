/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import LifecycleComponent from  './LifecycleComponent';

import {
    Platform,
    StyleSheet,
    Text,
    View
} from 'react-native';
import Sww02_InputAndOutputComponent,{name,age,sum} from "./Sww02_InputAndOutputComponent";
import Sww03_PropsTest from "./Sww03_PropsTest";
import Sww04_StateTest from "./Sww04_StateTest";
import Sww05_RefTest from "./Sww05_RefTest";
import Sww06_Student from "./Sww06_Student";
import Sww06_XiaoMingStudent from "./Sww06_XiaoMingStudent";
import Sww07_Layout from "./Sww07_Layout";
import Sww08_Button from "./Sww08_Button";

/*const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
    android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});*/
type Props = {};

export default class setup extends Component<Props> {
    // 当前类的属性 使用：进行赋值操作。
    constructor(props) {
        super(props);
        console.log('--setup.render--');
        this.state = ({
            // 这里直接进行了变量声明和初始化
            remove:false,
            result:'',
            size:0
        })
        //初始化这个类的对象。
        // this.stu=new Sww06_Student('学生','性别男',23);
        this.stu=new Sww06_XiaoMingStudent();
    }

    render(){
        // return this.renderSww02()
        // return this.renderSww03()
        // return this.renderSww04()
        // return this.renderSww05()
        // return this.renderSww07()
        return this.renderSww08()
    }

    renderSww08(){
        return (
            <View>
                <Sww08_Button></Sww08_Button>
            </View>
        )
    }

    renderSww07(){
        return (
            <View >
                <Sww07_Layout/>
            </View>
        )
    }

    renderSww05(){
        return (
            <View style={styles.container}>
                <Text
                    style={{fontSize:20}}
                    onPress={()=>{
                        // var size=this.refs.reftest.getSize();
                        var size=this.refs['reftest'].getSizeFromSww();
                        console.log('打印size的大小：'+size);
                        this.setState({
                            size:size,
                        })
                    }}
                >
                获取气球的大小：{this.state.size}  --
                    {this.stu.getDescription()}
                </Text>
                <Sww05_RefTest
                    ref='reftest'
                />
            </View>
        )
    }

    renderSww04(){
        return (
            <View style={styles.container}>
                <Sww04_StateTest
                />
            </View>
        )
    }


    // 非当前类的属性。就只能进行别的方式进行了。
    renderSww03(){
        var params={ name:'张三', age:123,sex:'男 '};
        return (
            <View style={styles.container}>
                {/*name={222} name="哈哈哈" name={'哈哈哈'} 而且会覆盖默认的name */}
                <Sww03_PropsTest
                    // name={'哈哈哈'}
                    // sex={"男男"}
                    {...params}
                />
            </View>
        )
    }

    renderSww02(){
        return (
            <View style={styles.container}>
                <Text style={{font:20}}>名字：{name}</Text>
                <Text style={{font:20}}>年龄：{age}</Text>
                <Text style={{font:20}}
                    onPress={()=>{
                        var it=sum(2,3)
                        this.setState({
                            result:it,
                        })
                    }}
                >点击我看求和：{this.state.result}</Text>
            </View>
        )
    }

    renderLifeCycleComponent() {
        //定义一个view，而且呢view是一个不确定类型。它可以代表一个组件也可以代表别的东西。
        var viewsww=this.state.remove?null:<LifecycleComponent/>;
        var textsww=this.state.remove ? "被加载" : "被干掉了" ;
        // var textsww=this.state.remove ? '被加载': '被干掉';
        console.log('没有走吗'+this.state.remove);
        console.log('--setup.render--');
        console.log('--text--'+textsww);
        return (
            <View style={styles.container}>
                <LifecycleComponent
                name="小明"/>
                <Text
                    style={{fontSize:20}}
                    onPress={()=>{
                        this.setState({
                            remove:!this.state.remove
                        })

                    }}
                >
                {textsww}</Text>
                {viewsww}
                {/*在Html中引用java中的代码，大括号括住的是java代码中的是变量或者是方法。*/}
            </View>
        );
    }
}
// 这里是style的一个内联样式：包含四个id;
const styles = StyleSheet.create({
    //flex是
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
        marginTop:20
    },
    // 字体大小为20，文本居中，外边距为10；
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },

    // 文本居中，颜色，外边距底部为10；
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },

});
