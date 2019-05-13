import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { TextField } from 'react-native-material-textfield';
import { Actions } from 'react-native-router-flux';

//acesso aos reducers 
import { connect } from 'react-redux';

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

const Home = props => {

    return (
        <Container style={{ justifyContent: 'center', alignItems: 'center' }}>

            <Icon name="home" size={100} color="#269cda" />
            <View style={{ padding: '5%' }}>
                <Text style={{ color: '#269cda', fontSize: 24 }}> Bem Vindo!</Text>
            </View>

        </Container>
    );
}

const mapStateToProps = state => ({

});

export default connect(mapStateToProps, {})(Home);

/* <ImageBackground
            source={require("../../assets/background.jpg")}
            imageStyle={{resizeMode: 'stretch'}}
            style={{flex: 1}}
        >
        </ImageBackground> */