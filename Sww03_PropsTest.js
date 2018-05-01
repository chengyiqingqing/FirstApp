/**
 * Created by Shaowenwen on 2018-05-01 20:08
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
    Platform,
    StyleSheet,

    Text,
    View
} from 'react-native';

export default class Sww03_PropsTest extends Component<Props>{
    // 赋值符号是：而不再是等号了。
    static defaultProps={
        names:'小红',
        ages:23,
        sex:"男"
    }

    static propTypes={
        name:PropTypes.string,
        age:PropTypes.number,
        sex:PropTypes.string.isRequired,
    }

    render(){
        return (
            <View>
                <Text style={{backgroundColor:'red'}}>
                    Hello,{this.props.name}</Text>
                <Text style={{backgroundColor:'red'}}>
                    Hello,{this.props.age}</Text>
                <Text style={{backgroundColor:'red'}}>
                    Hello,{this.props.sex}</Text>
            </View>
            )
    }

}