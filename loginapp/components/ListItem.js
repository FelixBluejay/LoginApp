import React, { Component } from 'react';
import { View, Text, Button, StyleSheet, Image } from 'react-native';
import MyButton from './MyButton'
import settings from "./Settings.json"

let urlSettingsDelete = `${settings.address}:${settings.port}/delete`;

class ListItem extends Component {

    deleteUser = () => {
        fetch(urlSettingsDelete, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: this.props.id
            })
        });
    }

    handleCallback = (childData) => {
        if (childData != "DELETE") {
            this.props.navigation.navigate(childData, { username: this.props.username, password: this.props.password, time: this.props.time })
        } else {
            this.deleteUser()
            this.props.parentReload()
            // this.props.navigation.navigate("Main")
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Image style={styles.image} source={require('../gfx/UserIcon.png')} />
                <Text style={styles.text}>{this.props.id}: {this.props.username}</Text>
                <View style={styles.buttonContainer}>
                    <MyButton route="Details" title="DETAILS" parentCallback={this.handleCallback} />
                    <MyButton title="DELETE" parentCallback={this.handleCallback} />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center"
    },
    image: {
        flex: 1,
        width: 70,
        height: 70,
        resizeMode: 'contain',
        margin: 10
    },
    text: {
        flex: 3,
        fontSize: 20,
        color: "gray"
    },
    buttonContainer: {
        flex: 4,
        flexDirection: "row",
        justifyContent: "space-around"
    }
})


export default ListItem;