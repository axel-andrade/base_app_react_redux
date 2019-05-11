import React, { Component } from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { TextField } from 'react-native-material-textfield';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';

//actions
import {
    setName,
    setEmail,
    setPassword,
    setRepeatPassword,
    signUp
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
        let { name, email, password, repeatPassword, errorSignUp } = this.props;
        return (
            <Container>
                <Header style={{ backgroundColor: '#269cda' }}>
                    <Left>
                        <Button transparent onPress={() => Actions.Login()}>
                            <Icon name="arrow-left" size={22.5} color='white' />
                        </Button>
                    </Left>
                    <Body>
                        <Title style={{ color: 'white' }}>Cadastrar</Title>
                    </Body>
                    <Right>
                    </Right>
                </Header>
                <Content>
                    <View style={{ padding: '5%', paddingBottom: '2%' }}>
                        <TextField
                            label="Nome"
                            textColor='#555555'
                            labelHeight={20}
                            tintColor='#E07A2F'
                            baseColor='#269cda'
                            value={name}
                            onChangeText={(name) => this.props.setName(name)}
                        />
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

                        <TextField
                            secureTextEntry={true}
                            label="Repetir Senha"
                            textColor='#555555'
                            labelHeight={20}
                            tintColor='#E07A2F'
                            baseColor='#269cda'
                            value={repeatPassword}
                            onChangeText={(repeatPassword) => this.props.setRepeatPassword(repeatPassword)}
                        />

                    </View>

                    <View style={{paddingLeft: '5%' }}>
                        <Text style={{ color: '#ff0000', fontSize: 14 }}>{errorSignUp}</Text>
                    </View>

                </Content>


                <View style={{ padding: '5%' }}>
                    <Button block style={{ backgroundColor: '#269cda' }} onPress={() => this._signUp()}>
                        <Text>Cadastrar</Text>
                    </Button>
                </View>

            </Container>
        );
    }
}

const mapStateToProps = state => ({
    name: state.AuthReducer.name,
    email: state.AuthReducer.email,
    password: state.AuthReducer.password,
    repeatPassword: state.AuthReducer.repeatPassword,
    errorSignUp: state.AuthReducer.errorSignUp
});

export default connect(mapStateToProps, { setName, setEmail, setPassword, setRepeatPassword, signUp })(Signup);