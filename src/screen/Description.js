import React, { Component } from 'react';
import { Button, View, Text, TouchableOpacity, FlatList, Alert} from 'react-native';

class Description extends Component {
    _renderItem = ({ item }) => {
        return (
            <View>
                <Text>Nome {item.nome}</Text>
            </View>
        )
    }

    _onItemPress = (item) => {
        if (item.indicadorCarencia == 'N') {
            this.props.navigation.push('Description',{investimento: item})
        }else{
            this._showAlert()
        }
    }

    render() {
        console.log(this.props.route.params);
        const  investimento  = this.props.route.params.investimento
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <View style={{height:10, backgroundColor: '#fccb00'}}/>
                <Text>DADOS DO INVESTIMENTO</Text>
                <View style={{height:10, backgroundColor: '#fccb00'}}/>
                <Text>Nome {investimento.nome}</Text>
                <Text>Saldo total disonivel {investimento.saldoTotalDisponivel}</Text>
                <FlatList
                    data={investimento.acoes}
                    renderItem={this._renderItem}
                />
                <Text>DADOS DO INVESTIMENTO</Text>
            </View>
        );
    }
}

export default Description;