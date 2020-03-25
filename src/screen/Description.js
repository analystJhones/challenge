import React, { Component } from 'react';
import { Button, View, Text, TouchableOpacity, FlatList, Alert} from 'react-native';

class Description extends Component {
    render() {
        console.log(this.props.route.params);
        const  investimento  = this.props.route.params.investimento
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>{investimento.nome}</Text>
            </View>
        );
    }
}

export default Description;