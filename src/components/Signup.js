import React, { Component } from 'react';
import { View, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { TextField } from 'react-native-material-textfield';
import { Overlay } from 'react-native-elements';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import utils from '../Utils';

//actions
import {
    setName,
    setEmail,
    setPassword,
    setRepeatPassword,
    setPhone,
    setBirthday,
    signUp,
    showPassword,
    validateEmail,
    validatePassword,
    showRepeatPassword

} from '../actions/AuthActions';


import {
    Container,
    Content,
    Header,
    Body,
    Title,
    Form,
    Item,
    Input,
    Spinner,
    Button,
    Text,
    Left,
    Right,
    Footer
} from "native-base";

class Signup extends Component {

    _signUp() {
        let { name, email, password, repeatPassword } = this.props;
        this.props.signUp({ name, email, password, repeatPassword });
    };

    render() {
        let { name, email, password, repeatPassword, phone, birthday, errorName, errorEmail, errorPassword, errorRepeatPassword, hidePassword, hideRepeatPassword, trySignup } = this.props;
        return (
            <Container>
                <Header style={{ backgroundColor: 'transparent', justifyContent: 'center' }}>
                    <Left>
                        <Button transparent onPress={() => Actions.Login()}>
                            <Icon name="arrow-left" size={22.5} color='#269cda' />
                        </Button>
                    </Left>
                    <Body>
                        <Title style={{ color: '#269cda' }}>Cadastrar</Title>
                    </Body>
                    <Right>
                    </Right>
                </Header>
                <Content>
                    <View style={{ paddingTop: '5%' }}>
                        <View style={{ paddingLeft: '5%', paddingRight: '5%' }}>
                            <Item style={{ borderColor: '#269cda' }}>
                                <Input
                                    placeholder='Nome'
                                    autoCapitalize='sentences'
                                    style={{ fontFamily: 'Exo Medium', color: '#555555' }}
                                    placeholderTextColor='#269cda'
                                    value={name}
                                    onChangeText={(name) => this.props.setName(name)}

                                />
                            </Item>
                            <Text style={styles.error}>{errorName}</Text>
                        </View>
                        <View style={{ paddingLeft: '5%', paddingRight: '5%' }}>
                            <Item style={{ borderColor: '#269cda' }}>
                                <Input
                                    placeholder='Email'
                                    style={{ fontFamily: 'Exo Medium', color: '#555555' }}
                                    placeholderTextColor='#269cda'
                                    value={email}
                                    onChangeText={(email) => this.props.setEmail(email)}
                                    keyboardType='email-address'
                                    onBlur={() => this.props.validateEmail(email)}
                                />
                            </Item>
                            <Text style={styles.error}>{errorEmail}</Text>
                        </View>
                        <View style={{ paddingLeft: '5%', paddingRight: '5%' }}>
                            <Item style={{ borderColor: '#269cda' }}>
                                <Input
                                    placeholder='Telefone'
                                    keyboardType='numeric'
                                    maxLength={15}
                                    style={{ fontFamily: 'Exo Medium', color: '#555555' }}
                                    placeholderTextColor='#269cda'
                                    value={phone}
                                    onChangeText={(phone) => this.props.setPhone(utils.formatPhone(phone))}
                                />

                            </Item>
                            <Text></Text>
                        </View>
                        <View style={{ paddingLeft: '5%', paddingRight: '5%' }}>
                            <Item style={{ borderColor: '#269cda' }}>
                                <Input
                                    placeholder='Data de nascimento'
                                    keyboardType='numeric'
                                    maxLength={10}
                                    style={{ fontFamily: 'Exo Medium', color: '#555555' }}
                                    placeholderTextColor='#269cda'
                                    value={birthday}
                                    onChangeText={(birthday) => this.props.setBirthday(utils.formatDate(birthday))}
                                />

                            </Item>
                            <Text></Text>
                        </View>
                        <View style={{ paddingLeft: '5%', paddingRight: '5%' }}>
                            <Item style={{ borderColor: '#269cda' }}>
                                <Input
                                    secureTextEntry={hidePassword}
                                    placeholder='Senha'
                                    style={{ fontFamily: 'Exo Medium', color: '#555555' }}
                                    placeholderTextColor='#269cda'
                                    value={password}
                                    onChangeText={(password) => this.props.setPassword(password)}
                                    onBlur={() => this.props.validatePassword(password)} />
                                {hidePassword
                                    ? <Icon active name='eye' size={23} style={{ color: '#269cda' }} onPress={() => this.props.showPassword(!hidePassword)} />
                                    : <Icon active name='eye-off' size={23} style={{ color: '#269cda' }} onPress={() => this.props.showPassword(!hidePassword)} />
                                }
                            </Item>
                            <Text style={styles.error}>{errorPassword}</Text>
                        </View>
                        <View style={{ paddingLeft: '5%', paddingRight: '5%' }}>
                            <Item style={{ borderColor: '#269cda' }}>
                                <Input
                                    secureTextEntry={hideRepeatPassword}
                                    placeholder='Repetir senha'
                                    style={{ fontFamily: 'Exo Medium', color: '#555555' }}
                                    placeholderTextColor='#269cda'
                                    value={repeatPassword}
                                    onChangeText={(repeatPassword) => this.props.setRepeatPassword(repeatPassword)}
                                    onBlur={() => this.props.validatePassword(repeatPassword)} />
                                {hideRepeatPassword
                                    ? <Icon active name='eye' size={23} style={{ color: '#269cda' }} onPress={() => this.props.showRepeatPassword(!hideRepeatPassword)} />
                                    : <Icon active name='eye-off' size={23} style={{ color: '#269cda' }} onPress={() => this.props.showRepeatPassword(!hideRepeatPassword)} />
                                }
                            </Item>
                            <Text style={styles.error}>{errorRepeatPassword}</Text>
                        </View>
                    </View>

                    <View style={{ padding: '5%' }}>
                        <Button block style={{ backgroundColor: '#E07A2F' }} onPress={() => this._signUp()}>
                            <Text uppercase={false}>Cadastrar</Text>
                        </Button>
                    </View>

                    <TouchableWithoutFeedback style={{ paddingTop: '5%' }} onPress={() => Actions.reset("Login")}>
                        <View style={{ alignItems: 'center', paddingBottom: '5%' }}>

                            <Text style={{ fontSize: 14, color: '#555555' }}>Já tem conta?</Text>
                            <Text style={{ color: '#269cda', fontSize: 14 }}> Entrar </Text>
                        </View>
                    </TouchableWithoutFeedback>

                </Content>

                {utils.returnLoading(this.props.trySignup)}



            </Container>
        );
    }
}

const mapStateToProps = state => ({
    name: state.AuthReducer.name,
    email: state.AuthReducer.email,
    password: state.AuthReducer.password,
    repeatPassword: state.AuthReducer.repeatPassword,
    phone: state.AuthReducer.phone,
    birthday: state.AuthReducer.birthday,
    errorName: state.AuthReducer.errorName,
    errorEmail: state.AuthReducer.errorEmail,
    errorPassword: state.AuthReducer.errorPassword,
    errorRepeatPassword: state.AuthReducer.errorRepeatPassword,
    hidePassword: state.AuthReducer.hidePassword,
    hideRepeatPassword: state.AuthReducer.hideRepeatPassword,
    trySignup: state.AuthReducer.trySignup

});

const styles = StyleSheet.create({
    error: {
        color: '#E07A2F', fontSize: 10
    },
    errorView: {
        alignItems: 'flex-end'
    }
});

export default connect(mapStateToProps, {
    setName,
    setEmail,
    setPassword,
    setRepeatPassword,
    setPhone,
    setBirthday,
    signUp,
    showPassword,
    validateEmail,
    validatePassword,
    showRepeatPassword
})(Signup);