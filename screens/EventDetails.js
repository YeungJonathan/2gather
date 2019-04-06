import React from 'react';
import { View, Text, TouchableOpacity, Alert, Image } from 'react-native';
import { observer } from 'mobx-react';
import Icon from 'react-native-vector-icons/FontAwesome';

@observer
class EventDetails extends React.Component {

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
            title: 'Events Details',
            headerLeft: headerLeft 
        });
    };

    constructor(props) {
        super(props);
        this.state = {
            title:props.navigation.getParam('title', null),
            time:props.navigation.getParam('time', null),
            location:props.navigation.getParam('location', null),
            going: props.navigation.getParam('going', null),
            star: false
        }
        // console.log(this.state.title,this.state.time,this.state.location,this.state.going,this.state.star)
    }

    render() {
        const {title, time, location, star, going} = this.state;
        const starred = star? "flex":"none";
        const notStarred = star?"none":"flex";
        return (
            <View>
                <Image
                    source={require('../assets/images/codingInterviewMeetup.jpeg')}
                    style={{width:'100%'}}
                />
                {/* <Card style={{height:'20%'}}>

                </Card> */}
                <Text>
                    {title}
                </Text>
                <Text style={{marginBottom:30}}>
                    {location}
                </Text>

                <View style={{ flexDirection: 'row', length:50}}>
                    <View style={{flex: 1, borderRightWidth: 1, justifyContent: 'center', alignItems: 'center', borderColor:'grey'}}>
                        <Text style={{ fontSize: 20 }}>31</Text>
                        <Text style={{ fontSize: 20 }}>Interested</Text>
                    </View>
                    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                        <Text style={{ fontSize: 20 }}>{time}</Text>
                        <Text style={{ fontSize: 20 }}>Time</Text>
                    </View>
                    <View style={{flex: 1, borderLeftWidth: 1, justifyContent: 'center', alignItems: 'center', borderColor:'grey'}}>
                        <Text style={{ fontSize: 20 }}>{going}</Text>
                        <Text style={{ fontSize: 20 }}>Going</Text>
                    </View>
                </View>
            </View>
        );
    }
}

export default EventDetails;
