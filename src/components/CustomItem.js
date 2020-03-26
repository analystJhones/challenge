import React, { Component } from 'react';
import CustomLabel from './CustomLabel';

import {
    View,
    Text,
    StyleSheet,
    TextInput,
    Keyboard,
} from 'react-native';


export default class CustomItem extends Component {

    constructor(props) {
        super(props);
        this.state = {
            acao: props.acao,
            color : '#ededed',
            valorResgate: '',
            extorou: false
        };
        Keyboard.addListener("keyboardDidShow", this._keyboardDidShow);
        Keyboard.addListener("keyboardDidHide", this._keyboardDidHide);
    }

    changeValueResgate = (evente) => {
        const {eventCount, target, text} = evente.nativeEvent;

        this.setState({ valorResgate: text });
        var valor = parseFloat(text)
  
        if (valor < this.state.acao.valor) {
            this.setState({ extorou: false });
        }else{
            this.setState({ extorou: true });
        }        
    }

    _keyboardDidShow = () => {
        this.setState({
            color: '#004dcf'
        })
    };
    
    _keyboardDidHide = () => {
        this.setState({
            color: '#ededed'
        })

        if (this.state.valorResgate != '') {
            console.log('passou ' + this.state.valorResgate);
        
            this.props.setValue(this.state.valorResgate);
        }
    };

    _renderLabel = () => {
        if (this.state.extorou) {
            return (
                <Text style={{ fontSize: 12, color : '#db3e00' }}>Valor a resgatar é maior que o total</Text>
            );
        } else {
            return null;
        }
    }

    render() {
        return (
            <View>
                <CustomLabel labelTitle={'Ação'} labelDetail={this.state.acao.nome} />
                <View style={{ height: 1, backgroundColor: '#f7f7f7' }} />
                <CustomLabel labelTitle={'Saldo acumulado'} labelDetail={'R$ ' + this.state.acao.valor.toFixed(2)} />
                <View style={{ height: 1, backgroundColor: '#f7f7f7' }} />
                <View style={styles.viewInput}>
                    <Text style={{ fontSize: 12, color : this.state.color }}>Valor a resgatar</Text>
                    <TextInput
                        placeholder="R$ Valor"
                        value={ this.state.valorResgate }
                        
                        keyboardType={ 'phone-pad'}
                        onChangeText={(valorResgate) => this.setState({valorResgate})}
                        onChange={(event) => this.changeValueResgate(event)}
                        onSubmitEditing={Keyboard.dismiss}
                    />
                    {this._renderLabel()}
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    viewInput: {
        padding: 10,
        marginLeft: 10,
        marginRight : 10,
    },
});
