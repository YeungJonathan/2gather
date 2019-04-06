import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { observer } from 'mobx-react';
import { Card } from 'react-native-material-ui';
import Icon from 'react-native-vector-icons/FontAwesome';
import appStore from '../stores/AppStore';

@observer
class EventCard extends React.Component {
    constructor(props) {
        super(props);
        this.eventInformation = props.eventInformation;
        this.state = {
            id: this.eventInformation.id,
            title:this.eventInformation.title,
            time:this.eventInformation.time,
            location:this.eventInformation.location,
            going: this.eventInformation.going,
        }
    }

    render() { 
        const {id, title, time, location, going} = this.state,
            { starred } = appStore.events[id-1], 
            name = starred ? "star" : "star-o";
        return (
            <View>
                <Card>
                    <TouchableOpacity
                        style={{height:100, backgroundColor:'#E2EFFD'
                    }}
                        onPress={() => 
                            this.props.navigation.navigate('EventDetails', this.eventInformation)
                        }
                    >
                        <View style={{flexDirection:'row', paddingLeft: 35}}>
                            <TouchableOpacity 
                                style={{paddingTop:35}}
                                onPress={()=> {
                                    appStore.events[id-1].starred = !appStore.events[id-1].starred;
                                }}
                            >
                                <Icon
                                    name={name}
                                    size={30}
                                    color={'gold'}
                                />
                            </TouchableOpacity>
                            <View style={{flexDirection:'column', paddingLeft:50, paddingTop:20}}>
                                <View style={{flexDirection:'row', paddingBottom:12}}>
                                    <Text
                                        style={{fontWeight:'bold', fontSize:20}}
                                        ellipsizeMode="tail"
                                        numberOfLines={1}
                                    >
                                        {title}
                                    </Text>
                                </View>
                                <View style={{flexDirection:'row'}}>
                                    <Text 
                                        style={{fontSize:16}}> 
                                        {location}  @{time}, {date}
                                    </Text>
                                </View>
                            </View>
                        </View>
                    </TouchableOpacity>
                </Card>
            </View>
        );
    }
}

export default EventCard;
