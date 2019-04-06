import React, { Component } from 'react';
import {Text, TextInput, Button, View, StyleSheet,Alert, AppRegistry} from 'react-native';
export default class Create extends Component{

    constructor(props){
        super(props);
        this.state = {
            sessionName: props.name,
            ExpectedSkills: props.name,
            text: '',
        };
    }


    render(){
        const {sessionName, ExpectedSkills, text} = this.state;
        return(
            <View style = {{ flex: 2, alignItems: "center"}}>
                <Text> Create Session </Text>
                <Text> Category Type: </Text>
                <Text> Session Name :
                 <TextInput
                 style = {{height: 40}}
                 placeholder = "Type here to Enter the name!"
                 value={text}
                 onChangeText={text =>  this.setState({text: text})}
                 />
                </Text>

                <Text> Expected Skills:  </Text>
                <TextInput
                style = {{height: 40}}
                placeholder = " Type here to enter the expected skills!"
                />
            </View>
        );
    }

}

AppRegistry.registerComponent('2gather', () => Create);