import React, { Component } from 'react';
import { View, Text, Button, TouchableOpacity, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

class MyButton extends Component {
  onPress = (event) => {
    if(!this.props.route) {
      if(this.props.title == "DELETE") {
        this.props.parentCallback("DELETE");
      }
    } else {
      this.props.parentCallback(this.props.route);
      event.preventDefault();
    }
  };

  render() {

    return (
      <TouchableOpacity style={styles.container} onPress={this.onPress}>
        <Text style={styles.text}>{this.props.title}</Text>
      </TouchableOpacity>
    );
  }
}

MyButton.propTypes = {
  title: PropTypes.string.isRequired,
  // testProp2: PropTypes.bool.isRequired,
  // testPress: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
    alignItems: "center",
    justifyContent: "center",
    // backgroundColor: "#FFFF00"
  },
  text: {
    fontWeight: "bold",
    fontSize: 18,
  }
})

export default MyButton;