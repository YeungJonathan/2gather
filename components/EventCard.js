import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { toJS } from 'mobx';
import { observer } from 'mobx-react';
import { Card } from 'react-native-material-ui';
// import { Avatar } from 'react-native-elements';

@observer
class EventCard extends React.Component {
    constructor(props) {
        super(props);
        const eventInformation = props.eventInformation;
        console.log(eventInformation)
        this.state = {
            title:eventInformation.title,
            time:eventInformation.time,
            location:eventInformation.location
        }
    }

    render() {
        const {title, time, location} = this.state;
        console.log(title, time, location)
        return (
            <View>
                <Card style={{width: 30}}>
                    <TouchableOpacity
                        // style={MessageCardStyle.cardContainer}
                        // onPress={() => {
                        //     this.handleConversation(title, lastMessageTime);
                        // }}
                    >
                        <View >
                        {/* // style={MessageCardStyle.messageCardViewStyle}> */}
                            <View> 
                            {/* // style={MessageCardStyle.middleCardContainer}> */}
                                <Text
                                    // style={MessageCardStyle.nameText}
                                    ellipsizeMode="tail"
                                    numberOfLines={1}
                                >
                                    {title}
                                </Text>
                                <Text> 
                                {/* // style={MessageCardStyle.timeText}> */}
                                    {time}
                                </Text>
                            </View>
                            <Text >
                            {/* style={MessageCardStyle.lastMessage}> */}
                                {location}
                            </Text>
                        </View>
                    </TouchableOpacity>
                </Card>
            </View>
        );
    }
}

export default EventCard;
