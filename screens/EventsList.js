import React from 'react';
import {View, FlatList, TouchableOpacity} from 'react-native';
import {fakeEventItems} from '../constants/FakeEventItems';
import { observer } from 'mobx-react';
import EventCard from '../components/EventCard';
import Icon from 'react-native-vector-icons/FontAwesome';

@observer
class EventsList extends React.Component {
    static navigationOptions = ({ navigation }) => {
        const headerLeft = (
            <TouchableOpacity
                onPress={() => navigation.goBack()}
                style={{paddingLeft: 15}}
            >
                <Icon size={18} name='arrow-left'/>
            </TouchableOpacity>
        );
        return({
            title: 'Events',
            headerLeft: headerLeft,
        });
    };

    constructor(props) {
        super(props);
        this.state = {
            heading: 'Events',
        };
    }

    render() {
        const { navigation } = this.props;
        return (
            <View style={{flex:1, height:'100%'}}>
                    <FlatList
                        data={fakeEventItems}
                        keyExtractor={item => item.id.toString()}
                        renderItem={eventInformation => (
                            <EventCard
                                navigation={navigation}
                                eventInformation={eventInformation.item}
                            />
                        )}
                    />
                </View>
        );
    }
}

export default EventsList;
