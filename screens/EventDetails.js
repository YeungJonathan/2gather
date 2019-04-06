import React from 'react';
import { View, Text, TouchableOpacity, Alert, Image, ScrollView } from 'react-native';
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
            // headerLeft: headerLeft 
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
    }

    render() {
        const {title, time, location, star, going} = this.state;
        const starred = star? "flex":"none";
        const notStarred = star?"none":"flex";
        return (
            <ScrollView>
                <Image
                    source={require('../assets/images/codingInterviewMeetup.jpeg')}
                    style={{width:'100%'}}
                />
                <View style={{alignItems:'center'}}>
                    <Text style={{marginTop:15, fontSize:30}}>
                        {title}
                    </Text>
                    <Text style={{marginBottom:30, fontSize:18, color:'grey'}}>
                        {location}
                    </Text>
                </View>

                <View style={{ flexDirection: 'row', length:100, borderWidth:1, borderColor: 'lightgrey', borderRadius:15, marginLeft: 15, marginRight:15, backgroundColor:'white', marginBottom: 20}}>
                    <View style={{ flex:1, borderRightWidth: 1, justifyContent: 'center', alignItems: 'center', borderColor:'grey', marginTop:18, marginBottom:18}}>
                        <Text style={{ fontSize: 20, color:'grey' }}>31</Text>
                        <Text style={{ fontSize: 20, color:'grey' }}>Interested</Text>
                    </View>
                    <View style={{flex:1,justifyContent: 'center', alignItems: 'center', marginTop:18, marginBottom:18}}>
                        <Text style={{ fontSize: 20, color:'grey' }}>{time}</Text>
                        <Text style={{ fontSize: 20, color:'grey' }}>Time</Text>
                    </View>
                    <View style={{ flex: 1,borderLeftWidth: 1, justifyContent: 'center', alignItems: 'center', borderColor:'grey', marginTop:18, marginBottom:18}}>
                        <Text style={{ fontSize: 20, color:'grey' }}>{going}</Text>
                        <Text style={{ fontSize: 20, color:'grey' }}>Going</Text>
                    </View>
                </View>

                <View style={{length:150, borderWidth: 1,backgroundColor:'#535a66', borderColor: '#535a66', borderRadius: 15, marginLeft:15, marginRight: 15, marginTop: 15}}>
                    <Text style={{marginTop: 15, fontWeight:'bold', marginLeft: 15, fontSize: 20, color:'white', marginBottom:15}}>
                        Description
                    </Text>
                    <Text style={{color:'#bcc3d1', fontSize: 18, marginLeft: 15, marginRight:15, marginBottom: 15}}>
                    Mathematics is the science that deals with the logic of shape, quantity and arrangement. Math is all around us, in everything we do. It is the building block for everything in our daily lives, including mobile devices, architecture (ancient and modern), art, money, engineering, and even sports.
                    </Text>
                </View>

                <TouchableOpacity 
                    style={{marginTop: 30, marginBottom: 30, alignItems:'center', borderWidth:1, marginLeft: '25%', marginRight:'25%', borderRadius:18}}
                    onPress={()=>Alert.alert('pew pew')}    
                >
                    <Text style={{fontSize:25, marginTop: 10, marginBottom: 13}}>
                        Join 
                    </Text>
                </TouchableOpacity>

            </ScrollView>
        );
    }
}

export default EventDetails;
