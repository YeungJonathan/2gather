import React from 'react';
import {View, FlatList, TouchableOpacity} from 'react-native';
import { observer } from 'mobx-react';
import EventCard from '../components/EventCard';
import Icon from 'react-native-vector-icons/FontAwesome';
import appStore from '../stores/AppStore';

@observer
class StarredList extends React.Component {
    static navigationOptions = ({ navigation }) => {
        const headerRight = (
            <TouchableOpacity
                style={{paddingRight: 20}}
            >
                <Icon size={18} name='search' />
            </TouchableOpacity>
        );
        return({
            title: 'Starred Events',
            headerRight: headerRight,
        });
    };

    constructor(props) {
        super(props);
        this.state = {
            heading: 'Events',
        };
    }

    render() {
        const { navigation } = this.props,
            keys = Object.keys(appStore.events),
            arrays = keys.map(key => (appStore.events[key]).filter(x => x.starred));
        return (
            <View style={{flex:1, height:'100%'}}>
                <FlatList
                    data={[].concat.apply([], arrays)}
                    keyExtractor={item => item.id.toString()}
                    renderItem={(eventInformation) => (
                        <EventCard
                            navigation={navigation}
                            eventInformation={eventInformation.item}
                            categoryName={keys[eventInformation.index]}
                        />
                    )}
                />
                </View>
        );
    }
}

export default StarredList;
