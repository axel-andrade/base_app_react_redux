import React, { Component } from 'react';
import { View, TouchableOpacity, TouchableWithoutFeedback, ToastAndroid, StyleSheet, TouchableHighlight } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Actions } from 'react-native-router-flux';
import { Overlay } from 'react-native-elements';
import utils from '../Utils';
//acesso aos reducers 
import { connect } from 'react-redux';
//actions
import { setEmail, setPassword, logIn, validateEmail, validatePassword, showPassword } from '../actions/AuthActions';
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
    Footer,
    Label
} from "native-base";


class Login extends Component {

    _logIn() {
        let { email, password } = this.props;
        this.props.logIn({ email, password });
    };

    render() {
        console.log(this.props);
        console.log("connection", utils.verifyConnection());

        let { email, password, errorEmail, errorPassword, hidePassword } = this.props;
        return (
            <Container style={{ justifyContent: 'center' }}>
                <Content>
                    <View style={{ paddingTop: '10%' }}>
                        <View style={{ paddingLeft: '5%', paddingRight: '5%' }}>
                            <Item style={{ borderColor: '#269cda' }}>
                                <Icon active name='account' size={23} style={{ color: '#269cda' }} />
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
                            <Text style={{ color: '#E07A2F', fontSize: 10 }}>{errorEmail}</Text>
                        </View>
                        <View style={{ paddingLeft: '5%', paddingRight: '5%' }}>
                            <Item style={{ borderColor: '#269cda', paddingTop: 5 }}>
                                <Icon active name='lock' size={23} style={{ color: '#269cda' }} />
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
                            <Text style={{ color: '#E07A2F', fontSize: 10 }}>{errorPassword}</Text>

                        </View>
                    </View>

                    <TouchableWithoutFeedback onPress={() => Actions.RecoverPassword()}>
                        <View style={{ alignItems: 'flex-end', paddingRight: '5%' }}>
                            <Text uppercase={false} style={{ color: '#555555', fontSize: 12 }}>Recuperar senha</Text>
                        </View>
                    </TouchableWithoutFeedback>


                    <View style={{ paddingTop: '10%', paddingLeft: '5%', paddingRight: '5%' }}>
                        <Button block style={{ backgroundColor: '#E07A2F' }} onPress={() => this._logIn()}>
                            <Text uppercase={false} style={{ color: 'white' }}>Entrar</Text>
                        </Button>
                    </View>



                    <View style={{ alignItems: 'center', padding: '3%' }}>
                        <Text style={{ color: '#DCDCDC', fontSize: 10 }}> ──────────────── OU  ────────────────</Text>
                    </View>

                    <View style={{ paddingBottom: '5%', paddingLeft: '5%', paddingRight: '5%' }}>

                        <Button iconLeft block style={{ backgroundColor: '#5371b1' }}>
                            <Icon name='facebook' color='white' size={20} />
                            <Text uppercase={false} style={{ color: 'white' }}>Facebook</Text>
                        </Button>
                    </View>

                    <TouchableWithoutFeedback style={{ paddingTop: '10%' }} onPress={() => Actions.Signup()}>
                        <View style={{ alignItems: 'center', paddingBottom: '5%' }}>

                            <Text style={{ fontSize: 14, color: '#555555' }}>Ainda não tem cadastro?</Text>
                            <Text style={{ color: '#269cda', fontSize: 14 }}> Cadastre-se </Text>
                        </View>
                    </TouchableWithoutFeedback>


                    {utils.returnLoading(this.props.tryLogin)}

                </Content>

            </Container>
        );
    }
}
const styles = StyleSheet.create({

    input: {
        color: '#269cda', fontSize: 12,
    },
});

const mapStateToProps = state => ({
    email: state.AuthReducer.email,
    password: state.AuthReducer.password,
    errorEmail: state.AuthReducer.errorEmail,
    errorPassword: state.AuthReducer.errorPassword,
    tryLogin: state.AuthReducer.tryLogin,
    hidePassword: state.AuthReducer.hidePassword
});

export default connect(mapStateToProps, { setEmail, setPassword, logIn, validateEmail, validatePassword, showPassword })(Login);