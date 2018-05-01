/**
 * Created by Shaowenwen on 2018-05-01 22:47
 */

import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';

export default class Sww04_StateTest extends Component<Props>{

    //方式1：猜想这一种可能是全局的属于类的。而第二种属于对象的。
    state={
        size:80,
    }

    //方式2：
    constructor(props){
        super(props);
        /*this.state={
            size:80,
        }*/
    }

    render(){
        return(
            <View>
                <Text
                    style={{fontSize:20 , backgroundColor:'red' }}
                    onPress={()=>{
                        this.setState({
                            size:this.state.size+20
                        })
                    }}
                >
                    {this.state.size}
                </Text>
                <Image
                    style={{width:this.state.size,height:this.state.size}}
                    source={require('./bom.png')}
                />
                <Text
                    style={{fontSize:20 , backgroundColor:'red' }}
                    onPress={()=>{
                        this.setState({
                            size:this.state.size-20
                        })
                    }}
                >
                    {this.state.size}
                </Text>
            </View>
        )
    }

}