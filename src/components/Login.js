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
import { setEmail, setPassword, logIn, validateEmail, validatePassword } from '../actions/AuthActions';


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
                <View style={{ paddingTop: '10%', paddingLeft: '20%', paddingRight: '20%' }}>
                    <Button block style={{ backgroundColor: '#E07A2F', borderRadius: 24 }}>
                        <Spinner size='small' color='white' />
                    </Button>
                </View>

            );
        else
            return (
                <View style={{ paddingTop: '10%', paddingLeft: '20%', paddingRight: '20%' }}>
                    <Button block style={{ backgroundColor: '#E07A2F', borderRadius: 24 }} onPress={() => this._logIn()}>
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
        let { email, password, errorEmail, errorLogIn, errorPassword } = this.props;
        return (
            <Container style={{ justifyContent: 'center' }}>
                <Content>
                    <View>
                        <View style={{ paddingLeft: '5%', paddingRight: '5%' }}>
                            <TextField
                                label="Email"
                                textColor='#555555'
                                labelHeight={20}
                                tintColor='#269cda'
                                baseColor='#269cda'
                                value={email}
                                onChangeText={(email) => this.props.setEmail(email)}
                                animationDuration={0.5}
                                error={errorEmail}
                                errorColor='#269cda'
                                keyboardType='email-address'
                                onBlur={() => this.props.validateEmail(email)}
                            />
                        </View>

                        <View style={{ paddingLeft: '5%', paddingRight: '5%' }}>
                            <TextField
                                secureTextEntry={true}
                                label="Senha"
                                textColor='#555555'
                                labelHeight={20}
                                tintColor='#269cda'
                                baseColor='#269cda'
                                value={password}
                                onChangeText={(password) => this.props.setPassword(password)}
                                animationDuration={0.5}
                                error={errorPassword}
                                errorColor='#269cda'
                                onBlur={() => this.props.validatePassword(password)}
                            />


                        </View>

                    </View>


                    {email && password && utils.validateEmail(email) && password.length >=6
                        ? this._renderButton()
                        : <View style={{ paddingTop: '10%', paddingLeft: '20%', paddingRight: '20%' }}>
                            <Button disabled block style={{ backgroundColor: 'rgba(224,122,47,0.5)', borderRadius: 24 }}>
                                <Text uppercase={false} style={{ color: 'white' }}>Entrar</Text>
                            </Button>
                        </View>
                    }


                    <View style={{ paddingTop: '4%', paddingBottom: '5%', paddingLeft: '20%', paddingRight: '20%' }}>

                        <Button iconLeft block style={{ borderColor: '#269cda', borderRadius: 20 }}>
                            <Icon name='facebook' color='white' size={20} />
                            <Text uppercase={false} style={{ color: 'white' }}>Facebook</Text>
                        </Button>
                    </View>

                    <View style={{ alignItems: 'center', paddingBottom: '5%' }}>
                        <TouchableWithoutFeedback onPress={() => Actions.Signup()}>
                            <Text style={{ fontSize: 12, color: '#555555' }}>Ainda não tem cadastro?<Text style={{ color: '#269cda', fontSize: 12, fontWeight: 'bold' }}> Cadastre-se </Text></Text>
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
    tryLogin: state.AuthReducer.tryLogin
});

export default connect(mapStateToProps, { setEmail, setPassword, logIn, validateEmail, validatePassword })(Login);