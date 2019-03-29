import React,{Component} from 'react';
import {SafeAreaView,TextInput,View} from 'react-native';

export default class Home extends Component{
    render(){
        return(
            <SafeAreaView>
<View>
<TextInput
                placeholder={'Enter name'}
                />
                <TextInput
                placeholder={'Enter Passsword'}/>
</View>
             
            </SafeAreaView>
        )
    }
}