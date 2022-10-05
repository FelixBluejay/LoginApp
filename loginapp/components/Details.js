import React, { Component } from 'react';
import { View, Text, Button, StyleSheet, Image } from 'react-native';
import MyButton from './MyButton'

class Details extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.imageContainer}>
                    <Image style={styles.image} source={require('../gfx/UserIcon.png')} />
                </View>
                <View style={styles.textContainer}>
                    <View style={styles.textColumn}>
                        <Text style={styles.text}>Username:</Text>
                        <Text style={styles.text}>Password:</Text>
                        <Text style={styles.text}>Time:</Text>
                    </View>
                    <View style={styles.textColumn}>
                        <Text style={styles.textContent}> {this.props.route.params.username}</Text>
                        <Text style={styles.textContent}> {this.props.route.params.password}</Text>
                        <Text style={styles.textContent}> {this.props.route.params.time}</Text>
                    </View>
                </View>
            </View>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        flex: 1
    },
    imageContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    image: {
        width: 300,
        height: 300
    },
    textContainer: {
        flex: 1,
        flexDirection: "row",
    },
    textContent: {
        color: "#AF8EB5",
        fontSize: 20
    },
    textColumn: {
        marginRight: 10
    },
    text: {
        fontSize: 20

    }
})


export default Details;