import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Button, View, Text, TouchableOpacity, FlatList, Alert} from 'react-native';

class Home extends Component {

    state = {
        data: []
    }

    async componentDidMount() {
        const response = await fetch(`http://www.mocky.io/v2/5e76797e2f0000f057986099`)
        const responseJson = await response.json()
        if (responseJson.response != undefined) {
            this.setState({ data: responseJson.response.data.listaInvestimentos })
        }
    }

    _renderItem = ({ item }) => {
        return (
            <TouchableOpacity onPress={() => this._onItemPress(item)} style={{ flexDirection: 'row', padding: 10, alignItems: 'center' }}>
                <View>
                    <Text>{item.nome}</Text>
                </View>
            </TouchableOpacity>
        )
    }

    _onItemPress = (item) => {
        if (item.indicadorCarencia == 'N') {
            this.props.navigation.push('Description',{investimento: item})
        }else{
            this._showAlert()
        }
    }

    _showAlert(){
        Alert.alert(
            'Error ',
            'O investimento ainda esta no prazo de carência, não podendo ser resgatado no momento.',
            [{text: 'OK'},],
            { cancelable: false }
        )
    }

    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Investimento</Text>
                <FlatList
                    data={this.state.data}
                    renderItem={this._renderItem}
                />
            </View>
        );
    }
}

export default Home;