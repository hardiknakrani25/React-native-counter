import React, { Component } from "react";
import { SafeAreaView, TextInput, View, Text, Button } from "react-native";
import styles from "./styles";

export default class Home extends Component {
  state = {
    username: "",
    Passsword: ""
  };

  onLogin = () => {
    const { username, Passsword } = this.state;
    if (username == "Admin" && Passsword == "123") {
      console.warn("Login ok");
    }
  };

  render() {
    return (
      <SafeAreaView
        style={{
          justifyContent: "center",
          flex: 1
        }}
      >
        <View>
          <Text style={styles.heading}>Login</Text>
          <TextInput
            onChangeText={text =>
              this.setState({
                username: text
              })
            }
            style={[
              styles.input,
              {
                marginTop: 20
              }
            ]}
            placeholder={"Enter name"}
          />
          <TextInput
            onChangeText={pass =>
              this.setState({
                Passsword: pass
              })
            }
            style={[
              styles.input,
              {
                marginTop: 20
              }
            ]}
            secureTextEntry={true}
            placeholder={"Enter Passsword"}
          />
          <Button title={"Login"} onPress={() => this.onLogin()} />
        </View>
      </SafeAreaView>
    );
  }
}
