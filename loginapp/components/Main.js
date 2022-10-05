import React, { Component } from 'react';
import { View, Text, Button, TextInput, KeyboardAvoidingView, StyleSheet } from 'react-native';
import MyButton from './MyButton';
import settings from "./Settings.json";

let urlSettings = `${settings.address}:${settings.port}/${settings.src}`;
let urlSettingsPost = `${settings.address}:${settings.port}/post`;

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      username: "",
      password: ""
    };
  }

  addUser = () => {
    fetch(urlSettingsPost, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: this.state.username,
        password: this.state.password
      })
    });
  }

  getUserInfo = () => {
    return fetch(urlSettings)
      .then((response) => response.json())
      .then((json) => {
        this.setState({ users: json })
        // console.log(this.state.users)
        return json;
      })
      .catch((error) => {
        console.error(error);
      });
  };

  handleCallback = (childData) => {
    this.getUserInfo().then(()=>{
      // Don't add user if one already exists with the same username
      let exists = false;
      this.state.users.forEach(user => {
        if (user.username == this.state.username) {
          exists = true;
          alert("Err: User already exists!")
          return;
        }
      });

      // If no such user exists, add new user and redirect to Users
      if (!exists && this.state.password != "") {
        this.addUser()
        this.props.navigation.navigate(childData)
      }
    })

    // Check if textInput is empty
    if (!this.state.username || !this.state.password) {
      alert("Err: Fields must not be empty!");
      return;
    }

  }

  componentDidMount() {
    this.getUserInfo();
  }

  updateClientData(type, value) {
    if (type == "Username") {
      this.setState({ username: value })
    } else {
      this.setState({ password: value })
    }
    this.getUserInfo()
  }

  render() {
    // this.getUserInfo();

    return (

      <KeyboardAvoidingView style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Register Node App</Text>
        </View>
        <View style={styles.form}>
          <Text>Username</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Username"
            onChangeText={text => this.updateClientData("Username", text)}
            // defaultValue={"Schmoob"}
          />
          <Text>Password</Text>
          <TextInput
            secureTextEntry={true}
            style={styles.textInput}
            placeholder="Password"
            onChangeText={text => this.updateClientData("Password", text)}
            // defaultValue={"sfhfuhsf"}
          />
          <MyButton style={styles.button}
            route="Users"
            title="SUBMIT"
            parentCallback={this.handleCallback}
          />
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flex: 1,
    backgroundColor: '#f48fb1',
    justifyContent: "center",
    alignItems: "center"
  },
  form: {
    flex: 2,
    padding: 10,
  },
  headerText: {
    fontSize: 35
  },
  textInput: {
    height: 40,
    backgroundColor: "#e1bee7",
    padding: 5,
    margin: 5,
    borderRadius: 10
  },
  button: {
    backgroundColor: "#af8eb5",
    marginTop: 10
  }

});


export default Main;