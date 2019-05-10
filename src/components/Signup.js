import React from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { TextField } from 'react-native-material-textfield';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';

//actions
import { setName, setEmail, setPassword, setRepeatPassword } from '../actions/AuthActions';


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

const Signup = props => {
    console.log(props);
    let { name, email, password, repeatPassword } = props;
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
                        onChangeText={(name) => props.setName( name )}
                    />
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
                        onChangeText={(password) => props.setPassword( password )}
                    />

                    <TextField
                        secureTextEntry={true}
                        label="Repetir Senha"
                        textColor='#555555'
                        labelHeight={20}
                        tintColor='#E07A2F'
                        baseColor='#269cda'
                        value={repeatPassword}
                        onChangeText={(repeatPassword) => props.setRepeatPassword( repeatPassword )}
                    />


                </View>
            </Content>

            <View style={{ padding: '5%' }}>
                <Button block style={{ backgroundColor: '#269cda' }} onPress={() => console.log("login")}>
                    <Text>Cadastrar</Text>
                </Button>
            </View>

        </Container>
    );
}

const mapStateToProps = state => ({
    name: state.AuthReducer.name,
    email: state.AuthReducer.email,
    password: state.AuthReducer.password,
    repeatPassword:  state.AuthReducer.repeatPassword
});

export default connect(mapStateToProps, {setName, setEmail, setPassword, setRepeatPassword})(Signup);