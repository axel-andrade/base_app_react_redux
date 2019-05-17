import React, { Component } from 'react';
import { View, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import utils from '../Utils';

//actions
import { setEmail, validateEmail, recoverPassword} from '../actions/AuthActions';


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

class RecoverPassword extends Component {

    render() {
        let {  email, errorEmail } = this.props;
        return (
            <Container>
                <Header style={{ backgroundColor: 'transparent', justifyContent: 'center' }}>
                    <Left>
                        <Button transparent onPress={() => Actions.Login()}>
                            <Icon name="arrow-left" size={22.5} color='#269cda' />
                        </Button>
                    </Left>
                    <Body>
                        <Title style={{ color: '#269cda' }}>Recuperar senha</Title>
                    </Body>
                    <Right>
                    </Right>
                </Header>
                <Content>
                    <View style={{ paddingTop: '5%' }}>
                        
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
                    
                    </View>

                    <View style={{ padding: '5%' }}>
                        <Button block style={{ backgroundColor: '#E07A2F' }} onPress={() => { this.props.recoverPassword(email)}}>
                            <Text uppercase={false}>Enviar</Text>
                        </Button>
                    </View>

                

                </Content>

    



            </Container>
        );
    }
}

const mapStateToProps = state => ({
    
    email: state.AuthReducer.email,
    errorEmail: state.AuthReducer.errorEmail,

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
 
    setEmail,
    validateEmail,
    recoverPassword
   
})(RecoverPassword);