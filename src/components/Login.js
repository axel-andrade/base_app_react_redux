import React, { Component } from 'react';
import { View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { TextField } from 'react-native-material-textfield';
import { Actions } from 'react-native-router-flux';

//acesso aos reducers 
import { connect } from 'react-redux';

//actions
import { setEmail, setPassword, logIn} from '../actions/AuthActions';

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

class Login extends Component {

    _logIn() {
        let { email, password } = this.props;
        this.props.logIn({ email, password });
    };

    render() {
        let { email, password, errorLogIn } = this.props;
        return (
            <Container style={{ justifyContent: 'center' }}>
                <Content>
                    <View>
                        <View style={{ padding: '5%', paddingBottom: '2%' }}>
                            <TextField
                                label="Email"
                                textColor='#555555'
                                labelHeight={20}
                                tintColor='#E07A2F'
                                baseColor='#269cda'
                                value={email}
                                onChangeText={(email) => this.props.setEmail(email)}
                            />
                            <TextField
                                secureTextEntry={true}
                                label="Senha"
                                textColor='#555555'
                                labelHeight={20}
                                tintColor='#E07A2F'
                                baseColor='#269cda'
                                value={password}
                                onChangeText={(password) => this.props.setPassword(password)}
                            />

                            <View style={{ paddingLeft: '5%' }}>
                                <Text style={{ color: '#ff0000', fontSize: 10 }}>{errorLogIn}</Text>
                            </View>
                        </View>


                        <View style={{ alignItems: 'center' }}>
                            <TouchableOpacity onPress={() => Actions.Signup()}>
                                <Text style={{ fontSize: 14 }}>Ainda não tem cadastro? Cadastre-se</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Content>

                <View style={{ padding: '5%' }}>
                    <Button block style={{ backgroundColor: '#269cda' }} onPress={() => this._logIn()}>
                        <Text>Acessar</Text>
                    </Button>
                </View>

            </Container>
        );
    }
}

const mapStateToProps = state => ({
    email: state.AuthReducer.email,
    password: state.AuthReducer.password,
    errorLogIn: state.AuthReducer.errorLogIn
});

export default connect(mapStateToProps, { setEmail, setPassword, logIn})(Login);