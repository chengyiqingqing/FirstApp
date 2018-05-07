/**
 * Created by Shaowenwen on 2018-05-01 23:45
 */
import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';

export default  class Sww05_RefTest extends Component<Props>{

    state={
        size:80,
    }

    getSizeFromSww(){
        console.log('走了getSizeFromSww')
        return this.state.size;
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
                    Sww05: {this.state.size}
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
                    Sww05:  {this.state.size}
                </Text>
            </View>
        )
    }

}