import React, { Component } from 'react';
import { Button, View, Text, StyleSheet, FlatList, Alert, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import CustomLabel from '../components/CustomLabel';

class Description extends Component {
    constructor(props) {
        super(props);
        this.state = { investimento: props.route.params.investimento };
    }

    _renderItem = ({ item }) => {
        return (
            <View style={styles.viewItem}>
                <CustomLabel labelTitle={'Ação'} labelDetail={item.nome} />
                <View style={{ height: 1, backgroundColor: '#f7f7f7' }} />
                <CustomLabel labelTitle={'Saldo acumulado'} labelDetail={item.percentual} />
                <View style={{ height: 1, backgroundColor: '#f7f7f7' }} />
                <View style={styles.viewInput}>
                    <Text style={{ fontSize: 12, }}>Valor a resgatar</Text>
                    <TextInput
                        placeholder="R$ Valor"
                    />
                </View>
            </View>
        )
    }

    _onItemPress = (item) => {
        Alert.alert(
            'RESGATE EFETUADO ',
            'O valor solicitado estará em sua conte em até 5 dias úteis.',
            [{ text: 'NOVO RESGATE' },],
            { cancelable: false }
        )
    }

    render() {
        return (
            <View style={styles.body}>
                <View style={{ height: 10, backgroundColor: '#fccb00' }} />
                <ScrollView>
                    <View style={styles.viewHeader}>
                        <Text style={styles.textTitle}>DADOS DO INVESTIMENTO</Text>
                    </View>
                    <View style={styles.viewInvestimentos}>
                        <CustomLabel labelTitle={'Nome'} labelDetail={this.state.investimento.nome} />
                        <View style={{ height: 1, backgroundColor: '#f7f7f7' }} />
                        <CustomLabel labelTitle={'Saldo total disonivel'} labelDetail={this.state.investimento.saldoTotalDisponivel} />
                    </View>
                    <View style={styles.viewHeader}>
                        <Text style={styles.textTitle}>RESGATE DO SEU JEITO</Text>
                    </View>
                    <View style={styles.viewInvestimentos}>
                        <FlatList
                            data={this.state.investimento.acoes}
                            renderItem={this._renderItem}
                            ItemSeparatorComponent={() => <View style={{ height: 10, backgroundColor: '#f7f7f7' }} />}
                        />
                    </View>
                    <View style={styles.viewInvestimentos}>
                        <CustomLabel labelTitle={'Valor total a resgatar'} labelDetail={'R$ ' + this.state.investimento.nome} />
                    </View>
                    <TouchableOpacity onPress={() => this._onItemPress()} 
                        style={{ height: 40, marginTop: 20 , backgroundColor: "#fccb00", alignItems: 'center', alignContent: 'center', flexDirection: 'column',}}>
                        <Text style={{color: '#004dcf', fontWeight: 'bold', fontSize: 15}}>CONFIRMAR RESGATE</Text>
                    </TouchableOpacity>
                </ScrollView>
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
        fontSize: 15,
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
        flexDirection: 'column',
        backgroundColor: '#FFFFFF',
    },
    viewInput: {
        padding: 10,
    }
});

export default Description;