import React, { Component } from 'react';
import { View, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { TextField } from 'react-native-material-textfield';
import { Actions } from 'react-native-router-flux';
import { SocialIcon } from 'react-native-elements';
import utils from '../Utils';
import Toast from 'react-native-root-toast';

//acesso aos reducers 
import { connect } from 'react-redux';

//actions
import { setEmail, setPassword, logIn } from '../actions/AuthActions';


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
                    <Button bordered block style={{ borderColor: '#E07A2F', borderRadius: 24 }}>
                        <Spinner size='small' color='#E07A2F' />
                    </Button>
                </View>

            );
        else
            return (
                <View style={{ paddingTop: '10%', paddingLeft: '20%', paddingRight: '20%' }}>
                    <Button bordered block style={{ borderColor: '#E07A2F', borderRadius: 24 }} onPress={() => this._logIn()}>
                        <Text uppercase={false} style={{ color: '#E07A2F' }}>Entrar</Text>
                    </Button>
                </View>

            )
    };

    _renderToast(message){
        let toast = utils.renderToast(message);
        toast;
    }

    render() {
        let { email, password, errorEmail, errorLogIn } = this.props;
        return (
            <Container style={{ justifyContent: 'center' }}>

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
                            keyboardType='email-address'
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
                        />


                    </View>

                </View>


                {email && password && utils.validateEmail(email)
                    ? this._renderButton()
                    : <View style={{ paddingTop: '10%', paddingLeft: '20%', paddingRight: '20%' }}>
                        <Button disabled bordered block style={{ borderColor: 'rgba(224,122,47,0.5)', borderRadius: 24 }}>
                            <Text uppercase={false} style={{ color: 'rgba(224,122,47,0.5)' }}>Entrar</Text>
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
                        <Text style={{ fontSize: 12 }}>Ainda não tem cadastro?<Text style={{ color: '#269cda', fontSize: 12, fontWeight: 'bold' }}> Cadastre-se </Text></Text>
                    </TouchableWithoutFeedback>
                </View>

                {errorLogIn.length > 0 ? this._renderToast(errorLogIn) : null}


            </Container>
        );
    }
}

const mapStateToProps = state => ({
    email: state.AuthReducer.email,
    password: state.AuthReducer.password,
    errorEmail: state.AuthReducer.errorEmail,
    errorLogIn: state.AuthReducer.errorLogIn,
    tryLogin: state.AuthReducer.tryLogin
});

export default connect(mapStateToProps, { setEmail, setPassword, logIn })(Login);