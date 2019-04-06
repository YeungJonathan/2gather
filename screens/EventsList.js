import React from 'react';
import {View, FlatList, Text} from 'react-native';
import {fakeEventItems} from '../constants/FakeEventItems';
import { observer } from 'mobx-react';
import EventCard from '../components/EventCard';

@observer
class EventsList extends React.Component {
    static navigationOptions = ({ navigation }) => {
        const headerTitle = <Text style={{fontSize: 18}}>Events</Text>
        return({
            title: 'Events',
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
                <View style={{flex:9}}>
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
            </View>
        );
    }
}

export default EventsList;
