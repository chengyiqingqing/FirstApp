/**
 * Created by Shaowenwen on 2018-05-04 14:42
 */
import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    TouchableWithoutFeedback,
    Alert,
    TouchableHighlight
} from 'react-native';

export default class Sww08_Button extends Component{

    constructor(props){
        super(props);
        //使用state定义并初始化成员变量。
        this.state={
            count:0,
            text:'',
        }
    }

    render(){
        // return this.test01_TouchableWithoutFeedback()
        // return this.test02_TouchableWithoutFeedbackDisable()
        // return this.test03_OnPressInAndOnPressOut()
        return this.test04_HighLight()
    }

    test01_TouchableWithoutFeedback(){
        return(
            //return 方法里不能并列返回两个视图。
            <View>
                {/*1.这里的WithoutFeedback是点击没有任何动画效果，只是有个点击事件*/}
                <TouchableWithoutFeedback
                    onPress={()=> {
                        //在onPress里面对成员变量进行初始化设置。
                        this.setState({
                            count: this.state.count+1})
                        //3.disabled属性设置点击事件的不响应。
                    }}

                    // 2.如果没有设置，那么长按的效果相应的将是单击事件。
                    onLongPress={()=>{
                        Alert.alert(
                            '提示',           //弹窗：标题
                            '确定要删除吗?小淘气',  //弹窗：信息
                            [
                                {text: '取消', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                                {text: '确实', onPress: () => console.log('OK Pressed')},
                            ]
                        )
                    }}
                >
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>
                            我是TouchableWithoutFeedback,单击我
                        </Text>
                    </View>
                </TouchableWithoutFeedback>

                <Text style={styles.text}>
                    您单击了:{this.state.count}次</Text>
            </View>
        )
    }

    test02_TouchableWithoutFeedbackDisable(){
        return(
            //return 方法里不能并列返回两个视图。
            <View>
                {/*这里的WithoutFeedback是点击没有任何动画效果，只是有个点击事件*/}
                <TouchableWithoutFeedback
                    //点击事件自己带的效果
                    disabled={this.state.waiting}
                    onPress={()=> {
                        //在onPress里面对成员变量进行初始化设置。只需要定义text就行了。waiting不需要好像有值和text一样。
                        this.setState({
                            text: '正在登陆。。', waiting: true
                        })
                        //设置了点击的时间间隔。在此时间内响应该次状态改变操作。
                        setTimeout(()=>{
                            this.setState({
                                text: '登陆中请等待。。', waiting: false
                            })
                        },3000)
                    }}
                >
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>
                            我是TouchableWithoutFeedback,单击我
                        </Text>
                    </View>
                </TouchableWithoutFeedback>

                <Text style={styles.text}>
                    {this.state.text}</Text>
            </View>
        )
    }

    test03_OnPressInAndOnPressOut(){
        return(
            //这两个方法分别是当用户开始点击按钮时与点击结束后被回调。(点击按钮时开始和结束的回调)
            // 通过这两个方法我们可以计算出用户单击按钮所用的时长， 另外也可以做一些其它个性化的功能。
            // 现在我们将通过一个例子来计算出用户点击按钮所用的时长。
            <View>
                <TouchableWithoutFeedback
                    //startTime是TouchableWithoutFeedback它自带的属性。
                    onPressIn={()=> {
                        this.setState({text:'触摸开始',startTime:new Date().getTime()})
                    }}
                    onPressOut={()=>{
                        this.setState({text:'触摸结束,持续时间:'+(new Date().getTime()-this.state.startTime)+'毫秒'})
                    }}
                >
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>
                            点我
                        </Text>
                    </View>
                </TouchableWithoutFeedback>

                <Text style={styles.text}>{this.state.text}</Text>

            </View>
        )
    }

    test04_HighLight(){
        // 通过改变这个View的背景色及透明度来达到这一效果
        return (
            <View>
                <TouchableHighlight
                    style={styles.button}
                    // 透明度
                    activeOpacity={0.7}
                    // 北京颜色
                    underlayColor='green'
                    onHideUnderlay={()=>{
                        this.setState({text:'衬底被隐藏'})
                    }}
                    onShowUnderlay={()=>{
                        this.setState({text:'衬底显示'})
                    }}
                    onPress={()=>{

                    }}
                >
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>
                            TouchableHighlight
                        </Text>
                    </View>
                </TouchableHighlight>

                <Text style={styles.text}>{this.state.text}</Text>

            </View>
        )
    }

    test05_Opacity(){
        return (
            <View>
                <TouchableHighlight
                    style=
                        activeOpacity={0.7}
                    underlayColor='green'
                    onHideUnderlay={()=>{
                        this.setState({text:'衬底被隐藏'})
                    }}
                    onShowUnderlay={()=>{
                        this.setState({text:'衬底显示'})
                    }}
                    onPress={()=>{

                    }}
                >
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>
                            TouchableHighlight
                        </Text>
                    </View>
                </TouchableHighlight>

                <Text style={styles.text}>{this.state.text}</Text>

            </View>
        )
    }

}

const styles=StyleSheet.create({

    button:{
        borderWidth:1,
        borderRadius:5
    },

    buttonText:{
        fontSize:18
    },

    text:{
      fontSize:20
    }

})