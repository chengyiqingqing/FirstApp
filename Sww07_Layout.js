/**
 * Created by Shaowenwen on 2018-05-04 10:34
 */
import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';

export default class Sww07_Layout extends Component{

    // 1.方向属性测试 flexDiretion:     'row,row-reverse,column,column-reverse'
    render(){
        // return this.test01_FlexDiretion()
        // return this.test02_FlexWrap()
        // return this.test03_JustifyContent()
        // return this.test04_AlignItems()
        // return this.test05_AlignSelf()
        return this.test06_flex()
    }

    test01_FlexDiretion(){
        return (
            // 1.方向属性测试 flexDiretion:     'row, row-reverse, column（默认）, column-reverse'
            <View style={ {flexDirection:'column',backgroundColor:"darkgray",marginTop:20}}>
                <View style={ {width:40,height:40,backgroundColor:"darkcyan",margin:5}}>
                    <Text style={ {fontSize:16}}>1</Text>
                </View>
                <View style={ {width:40,height:40,backgroundColor:"darkcyan",margin:5}}>
                    <Text style={ {fontSize:16}}>2</Text>
                </View>
                <View style={ {width:40,height:40,backgroundColor:"darkcyan",margin:5}}>
                    <Text style={ {fontSize:16}}>3</Text>
                </View>
                <View style={ {width:40,height:40,backgroundColor:"darkcyan",margin:5}}>
                    <Text style={ {fontSize:16}}>4</Text>
                </View>
            </View>

        )
    }

    test02_FlexWrap(){
        return (
            // 1.换行属性测试 flexWrap: 'wrap 换行, （默认）nowrap隐藏'
            <View style={ {flexDirection:'row',backgroundColor:"darkgray",marginTop:20,flexWrap:'wrap' }}>
                <View style={ {width:100,height:40,backgroundColor:"darkcyan",margin:5}}>
                    <Text style={ {fontSize:16}}>1</Text>
                </View>
                <View style={ {width:100,height:40,backgroundColor:"darkcyan",margin:5}}>
                    <Text style={ {fontSize:16}}>2</Text>
                </View>
                <View style={ {width:100,height:40,backgroundColor:"darkcyan",margin:5}}>
                    <Text style={ {fontSize:16}}>3</Text>
                </View>
                <View style={ {width:100,height:40,backgroundColor:"darkcyan",margin:5}}>
                    <Text style={ {fontSize:16}}>4</Text>
                </View>
                <View style={ {width:100,height:40,backgroundColor:"darkcyan",margin:5}}>
                    <Text style={ {fontSize:16}}>5</Text>
                </View>
            </View>
        )
    }

    test03_JustifyContent(){
        return (
            // 1.顺着主轴分配空间 justifyContent：((默认)'flex-start', 'flex-end', 'center', 'space-between', 'space-around')
            // justifyContent属性定义了浏览器如何分配顺着父容器主轴的弹性（flex）元素之间及其周围的空间，默认为flex-start。
            <View style={ {justifyContent:'space-around', flexDirection:'row',backgroundColor:"darkgray",marginTop:20,flexWrap:'wrap' }}>
                <View style={ {width:40,height:40,backgroundColor:"darkcyan",margin:5}}>
                    <Text style={ {fontSize:16}}>1</Text>
                </View>
                <View style={ {width:40,height:40,backgroundColor:"darkcyan",margin:5}}>
                    <Text style={ {fontSize:16}}>2</Text>
                </View>
                <View style={ {width:40,height:40,backgroundColor:"darkcyan",margin:5}}>
                    <Text style={ {fontSize:16}}>3</Text>
                </View>

            </View>
        )
    }

    test04_AlignItems(){
        return (
            // 1.alignItems属性以与justify-content相同的方式在侧轴方向上将当前行上的弹性元素对齐，默认为stretch。
            // alignItems:('flex-start', 'flex-end', 'center',  (默认：按照该语言的阅读习惯进行设置)( 'stretch')
            //flex-start 就是让组件左对齐，end是右对齐，center是居中。
            <View style={ {alignItems:'flex-end', flexDirection:'column',backgroundColor:"darkgray",marginTop:20,flexWrap:'wrap' }}>
                <View style={ {width:40,height:40,backgroundColor:"darkcyan",margin:5}}>
                    <Text style={ {fontSize:16}}>1</Text>
                </View>
                <View style={ {width:50,height:40,backgroundColor:"darkcyan",margin:5}}>
                    <Text style={ {fontSize:16}}>2</Text>
                </View>
                <View style={ {width:60,height:40,backgroundColor:"darkcyan",margin:5}}>
                    <Text style={ {fontSize:16}}>3</Text>
                </View>
            </View>
        )
    }

    test05_AlignSelf(){
        return (
            // 1.alignSelf属性以属性定义了flex容器内被选中项目的对齐方式。
            // 注意：alignSelf 属性可重写灵活容器的 alignItems 属性。
            // alignSelf enum('auto', 'flex-start', 'flex-end', 'center', 'stretch')//就是前三个包裹内容左右中。后一个是拉伸左
            <View style={ {flexDirection:'column',backgroundColor:"red",marginTop:20,flexWrap:'wrap' }}>
                <View style={ {alignSelf:'center',width:40,height:40,backgroundColor:"darkcyan",margin:5}}>
                    <Text style={ {fontSize:16}}>1</Text>
                </View>
                <View style={ {alignSelf:'flex-end',width:50,height:40,backgroundColor:"darkcyan",margin:5}}>
                    <Text style={ {fontSize:16}}>2</Text>
                </View>
            </View>
        )
    }

    test06_flex() {
        return (
            // 1.flex属性就是权重。
            // 注意：alignSelf 属性可重写灵活容器的 alignItems 属性。
            // alignSelf enum('auto', 'flex-start', 'flex-end', 'center', 'stretch')//就是前三个包裹内容左右中。后一个是拉伸左
            <View style={{
                alignSelf: 'flex-start',
                flexDirection: 'row',
                backgroundColor: "red",
                marginTop: 20,
                flexWrap: 'wrap',
            }}>
                <View style={{flex:1,width: 0, height: 40, backgroundColor: "darkcyan", margin: 5}}>
                    <Text style={{fontSize: 16}}>1</Text>
                </View>
                <View style={{flex:2,width: 0, height: 40, backgroundColor: "darkcyan", margin: 5}}>
                    <Text style={{backgroundColor:'red',fontSize: 16}}>2</Text>
                </View>
                <View style={{flex:3,width: 0, height: 40, backgroundColor: "darkcyan", margin: 5}}>
                    <Text style={{fontSize: 16}}>3</Text>
                </View>
                <View style={{flex:4,width: 0, height: 40, backgroundColor: "darkcyan", margin: 5}}>
                    <Text style={{fontSize: 16}}>4</Text>
                </View>
            </View>
        )

    }

}