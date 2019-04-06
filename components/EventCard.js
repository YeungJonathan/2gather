import React from 'react';
import { View, Text, TouchableOpacity, Alert } from 'react-native';
import { observer } from 'mobx-react';
import { Card } from 'react-native-material-ui';
import Icon from 'react-native-vector-icons/FontAwesome';

@observer
class EventCard extends React.Component {
    constructor(props) {
        super(props);
        const eventInformation = props.eventInformation;
        this.state = {
            title:eventInformation.title,
            time:eventInformation.time,
            location:eventInformation.location,
            star: false
        }
    }

    render() {
        const {title, time, location,star} = this.state;
        const starred = star? "flex":"none";
        const notStarred = star?"none":"flex";
        return (
            <View>
                <Card>
                    <TouchableOpacity
                        style={{height:100, backgroundColor:'#E2EFFD'
                    }}
                        onPress={() => {
                            Alert.alert('View Event')
                        }}
                    >
                        <View style={{flexDirection:'row', paddingLeft: 35}}>
                            <TouchableOpacity 
                                style={{display:notStarred, paddingTop:35}}
                                onPress={()=>this.setState({star: !star})}
                            >
                                <Icon
                                    name={"star-o"}
                                    size={30}
                                    color={'gold'}
                                />
                            </TouchableOpacity>
                            <TouchableOpacity 
                                style={{display:starred, paddingTop:35}}
                                onPress={()=>this.setState({star: !star})}
                            >
                                <Icon
                                    name={"star"}
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
                                    <Text 
                                        style={{paddingLeft: 20, fontWeight:'bold', fontSize:20}}> 
                                        @{time}
                                    </Text>
                                </View>
                                <Text
                                    style={{fontSize:16,fontStyle:"italic"}}
                                >
                                    {location}
                                </Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                </Card>
            </View>
        );
    }
}

export default EventCard;
