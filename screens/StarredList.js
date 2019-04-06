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
            arrays = [];
        keys.forEach(key => {
            let temp = appStore.events[key].filter(x => x.starred === true);
            temp.forEach(item => arrays.push({a: key, b: item}))
        });
        return (
            <View style={{flex:1, height:'100%'}}>
                <FlatList
                    data={arrays}
                    keyExtractor={(_, index) => index.toString()}
                    renderItem={({item}) => (
                        <EventCard
                            navigation={navigation}
                            eventInformation={item.b}
                            categoryName={item.a}
                            disabled
                        />
                    )}
                />
                </View>
        );
    }
}

export default StarredList;
