import React from 'react';
import {View, FlatList, Text, TouchableOpacity, TextInput} from 'react-native';
import {fakeEventItems} from '../constants/FakeEventItems';
import { observer } from 'mobx-react';
import EventCard from '../components/EventCard';

@observer
class loginScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            userName:'',
            password:''
        };
    }

    render() {
        const { navigation } = this.props;
        return (
            <View>
                <TextInput
                    placeholder = "Type here to Enter the User name"
                    value={this.state.userName}
                    onChangeText={input =>  this.setState({userName: input})}
                />
                <TextInput
                    placeholder = "Type here to Enter the User name"
                    value={this.state.password}
                    onChangeText={input =>  this.setState({password: input})}
                />
                <TouchableOpacity onPress={() => this.props.navigation.navigate("Categories", {name: this.state.userName})}>
                    <Text>Log In
                    </Text>
                </TouchableOpacity>
            </View>
        );
    }
}

export default loginScreen;
