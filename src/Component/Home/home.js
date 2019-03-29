import React,{Component} from 'react';
import {SafeAreaView,TextInput,View,Text,Button} from 'react-native';
import styles from './styles';

export default class Home extends Component{
    render(){
        return(
            <SafeAreaView style={{justifyContent: 'center',flex: 1}}>
<View>
<Text style={styles.heading}>Login</Text>
<TextInput
style={[styles.input,{marginTop: 20}]}
                placeholder={'Enter name'}
                />
<TextInput
style={[styles.input,{marginTop: 20}]}
secureTextEntry={true}
placeholder={'Enter Passsword'}/>

<Button title={'Login'}/>
</View>             

</SafeAreaView>
        )
    }
}