import React, { Component } from 'react';
import { View, TouchableOpacity, TouchableWithoutFeedback, ToastAndroid } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { TextField } from 'react-native-material-textfield';
import { Actions } from 'react-native-router-flux';
import { SocialIcon } from 'react-native-elements';
import utils from '../Utils';
import Toast from 'react-native-root-toast';

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

    _renderButton() {

        if (this.props.tryLogin)
            return (
                <View style={{ paddingTop: '10%', paddingLeft: '15%', paddingRight: '15%' }}>
                    <Button block style={{ backgroundColor: '#E07A2F'}}>
                        <Spinner size='small' color='white' />
                    </Button>
                </View>

            );
        else
            return (
                <View style={{paddingTop: '10%', paddingLeft: '15%', paddingRight: '15%' }}>
                    <Button block style={{ backgroundColor: '#E07A2F'}} onPress={() => this._logIn()}>
                        <Text uppercase={false} style={{ color: 'white' }}>Entrar</Text>
                    </Button>
                </View>

            )
    };

    _renderToast(message) {
        // let toast = utils.renderToast(message);
        // toast;
        ToastAndroid.showWithGravityAndOffset(
            message,
            ToastAndroid.SHORT,
            ToastAndroid.BOTTOM,
            25,
            50,
        );
    }

    render() {
        console.log(this.props);
        let { email, password, errorEmail, errorLogIn, errorPassword, hidePassword } = this.props;
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
                            <Text style={{ fontSize: 12, color: '#269cda' }}>{errorEmail}</Text>
                        </View>


                        <View style={{ paddingLeft: '5%', paddingRight: '5%', paddingBottom: '3%' }}>
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
                            <Text style={{ fontSize: 12, color: '#269cda' }}>{errorPassword}</Text>
                        </View>

                    </View>

                    {this._renderButton()}


                    <View style={{ alignItems: 'center', padding: '3%' }}>
                        <Text style={{ color: '#DCDCDC', fontSize: 10 }}> ──────────────── OU  ────────────────</Text>
                    </View>

                    <View style={{ paddingBottom: '5%', paddingLeft: '25%', paddingRight: '25%' }}>

                        <Button iconLeft block style={{ backgroundColor: '#5371b1'}}>
                            <Icon name='facebook' color='white' size={20} />
                            <Text uppercase={false} style={{ color: 'white' }}>Facebook</Text>
                        </Button>
                    </View>



                    <View style={{ alignItems: 'center', paddingBottom: '5%' }}>
                        <TouchableWithoutFeedback onPress={() => Actions.Signup()}>
                            <Text style={{ fontSize: 12, color: '#555555' }}>Ainda não tem cadastro?<Text style={{ color: '#269cda', fontSize: 14, fontWeight: 'bold' }}> Cadastre-se </Text></Text>
                        </TouchableWithoutFeedback>
                    </View>

                    {errorLogIn.length > 0 ? this._renderToast(errorLogIn) : null}


                </Content>

            </Container>
        );
    }
}

const mapStateToProps = state => ({
    email: state.AuthReducer.email,
    password: state.AuthReducer.password,
    errorEmail: state.AuthReducer.errorEmail,
    errorPassword: state.AuthReducer.errorPassword,
    errorLogIn: state.AuthReducer.errorLogIn,
    tryLogin: state.AuthReducer.tryLogin,
    hidePassword: state.AuthReducer.hidePassword
});

export default connect(mapStateToProps, { setEmail, setPassword, logIn, validateEmail, validatePassword, showPassword })(Login);