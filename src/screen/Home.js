import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Button, View, Text, TouchableOpacity, FlatList, Alert, StyleSheet } from 'react-native';

class Home extends Component {

    state = {
        data: [],
        totalInvestimento: 0
    }

    async componentDidMount() {
        const response = await fetch(`http://www.mocky.io/v2/5e76797e2f0000f057986099`)
        const responseJson = await response.json()
        
        if (responseJson.response.status == 200) {
            var total = 0
            var meusInvestimentos = responseJson.response.data.listaInvestimentos;
            for (const index in meusInvestimentos) {
                total = total + meusInvestimentos[index].saldoTotalDisponivel
            }

            this.setState({ data: meusInvestimentos, totalInvestimento: total.toFixed(2) })
        }
    }

    _renderItem = ({ item }) => {
        return (
            <TouchableOpacity onPress={() => this._onItemPress(item)}>
                <View style={styles.viewItem}>
                    <View style={{ flexDirection: 'column', }}>
                        <Text style={{ fontWeight: 'bold', }}>{item.nome}</Text>
                        <Text>{item.objetivo}</Text>
                    </View>
                    <View style={{ flexDirection: 'column', justifyContent:'center'}}>
                        <Text style={{ fontWeight: 'bold', }}>{item.saldoTotalDisponivel}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }

    _onItemPress = (item) => {
        if (item.indicadorCarencia == 'N') {
            this.props.navigation.push('Description', { investimento: item })
        } else {
            this._showAlert()
        }
    }

    _showAlert() {
        Alert.alert(
            'Error ',
            'O investimento ainda esta no prazo de carência, não podendo ser resgatado no momento.',
            [{ text: 'OK' },],
            { cancelable: false }
        )
    }

    render() {
        return (
            <View style={styles.body}>
                <View style={styles.hr} />
                <View style={styles.viewHeader}>
                    <Text style={styles.textTitle}>Investimento</Text>
                    <Text style={styles.textDetail}>R$ {this.state.totalInvestimento}</Text>
                </View>
                <View style={styles.viewInvestimentos}>
                    <FlatList
                        data={this.state.data}
                        renderItem={this._renderItem}
                        ItemSeparatorComponent={() => <View style={{ height: 2, backgroundColor: '#f7f7f7' }} />}
                    />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    body: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        backgroundColor: '#f7f7f7',
    },
    hr: {
        backgroundColor: '#fccb00',
        height: 5,
    },
    viewHeader: {
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    textTitle: {
        fontSize: 20,
        color: '#697689',
        marginLeft: 20,
        fontWeight: "bold"
    },
    textDetail: {
        fontSize: 20,
        color: '#697689',
        marginRight: 20,
        fontWeight: "bold"
    },
    viewInvestimentos: {
        marginTop: 20,
        flexDirection: 'column',
        backgroundColor: '#FFFFFF',
    },
    viewItem: { 
        flexDirection: 'row', 
        padding : 15,
        justifyContent: 'space-between',
    },
});

export default Home;