import React, { Component } from 'react';

import {
  View,
  Text,
  StyleSheet,
} from 'react-native';


export default class CustomLabel extends Component {

  render() {
    return(
        <View style={styles.viewItem}>
            <Text style={styles.title}>{this.props.labelTitle}</Text>
            <Text style={styles.detail}>{this.props.labelDetail}</Text>
        </View>
    )
  }
}

const styles = StyleSheet.create({
    viewItem: {
        flexDirection: 'row',
        padding: 10,
        justifyContent: 'space-between',
    },
    title: { 
        fontWeight: 'bold', 
        fontSize : 14
    },
    detail: { fontSize : 14}
});
