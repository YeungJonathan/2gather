import React from 'react';
import {View, FlatList, Text} from 'react-native';
import {fakeEventItems} from '../constants/FakeEventItems';
import { observer } from 'mobx-react';
import EventCard from '../components/EventCard';

@observer
class loginScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        const { navigation } = this.props;
        return (
            <View>
            </View>
        );
    }
}

export default loginScreen;
