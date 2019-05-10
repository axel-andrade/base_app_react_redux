import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { TextField } from 'react-native-material-textfield';
import { Actions } from 'react-native-router-flux';

//acesso aos reducers 
import { connect } from 'react-redux';

//actions
import { setEmail, setPassword } from '../actions/AuthActions';

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

const Login = props => {

    console.log(props);
    let { email, password } = props;

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
                            onChangeText={(email) => props.setEmail(email)}
                        />
                        <TextField
                            secureTextEntry={true}
                            label="Senha"
                            textColor='#555555'
                            labelHeight={20}
                            tintColor='#E07A2F'
                            baseColor='#269cda'
                            value={password}
                            onChangeText={(password) => props.setPassword(password)}
                        />
                    </View>

                    <View style={{ alignItems: 'center' }}>
                        <TouchableOpacity onPress={() => Actions.Signup()}>
                            <Text style={{ fontSize: 14 }}>Ainda não tem cadastro? Cadastre-se</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Content>

            <View style={{ padding: '5%' }}>
                <Button block style={{ backgroundColor: '#269cda' }} onPress={() => console.log("login")}>
                    <Text>Acessar</Text>
                </Button>
            </View>

        </Container>
    );
}

const mapStateToProps = state => ({
    email: state.AuthReducer.email,
    password: state.AuthReducer.password
});

export default connect(mapStateToProps, { setEmail, setPassword })(Login);