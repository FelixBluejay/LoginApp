import React, { Component } from 'react';
import { View, Text, Button, FlatList } from 'react-native';
import ListItem from './ListItem'
import MyButton from './MyButton'
import settings from "./Settings.json";

let urlSettings = `${settings.address}:${settings.port}/${settings.src}`;
// console.log(urlSettings)

class Users extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    };
  }

  handleCallback = (childData) => {
    this.props.navigation.navigate(childData)
  }

  reloadData = () => {
    this.getUserInfo();
  }

  componentDidMount() {
    this.getUserInfo();
  }

  getUserInfo = () => {
    return fetch(urlSettings)
      .then((response) => response.json())
      .then((json) => {
        this.setState({ users: json })
        return json;
      })
      .catch((error) => {
        console.error(error);
      });
  };

  render() {
    return (
      <View>
        <MyButton title="Back to login page" route="Main" parentCallback={this.handleCallback}/>
        <FlatList
          keyExtractor={(item) => item.id.toString()}
          data={this.state.users}
            renderItem={({ item }) => <ListItem username={item.username} id={item.id} password={item.password} time={item.time} navigation={this.props.navigation} parentReload={this.reloadData}/>}
        />
      </View>
    );
  }
}

export default Users;