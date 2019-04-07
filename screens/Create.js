import React, { Component } from 'react';
import {Text, TextInput, View, StyleSheet, Alert, AppRegistry, TouchableOpacity} from 'react-native';
import { Dropdown } from 'react-native-material-dropdown';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import DateTimePicker from 'react-native-modal-datetime-picker';
import appStore from '../stores/AppStore';
import { format } from 'date-fns';

const styles = StyleSheet.create({
    bigBlack: {
        color:'black',
        fontWeight: 'bold',
        fontSize: 30,

    }
});

export default class Create extends Component{

    static navigationOptions = ({ navigation }) => {
        return {
          title: "Create Meetup",
        };
      };

    _showDateTimePicker = () => this.setState({ isDateTimePickerVisible: true });

    _hideDateTimePicker = () => this.setState({ isDateTimePickerVisible: false });

    _handleDatePicked = (datetime) => {
        const date = new Date(datetime);
        this.setState({
            date: format(date, 'dd MMM'), 
            time: format(date, 'HH:mm a')
        })
        this._hideDateTimePicker();
    };

    constructor(props){
        super(props);
        this.state = {
            sessionName: props.name,
            ExpectedSkills: props.name,
            categoryName: '',
            isDateTimePickerVisible: false,
            date:'',
            location: ''
        };
    }

    render() {
        let data = [{
            value: 'Education',
        },{
            value: 'Sport',
        },{
            value: 'Business',
        },{
            value: 'Social',
        },{
            value: 'Health',
        },{
            value: 'Technology',
        },{
            value: 'Arts',
        },{
            value: 'Games',
        },{
            value: 'Languages',
        },{
            value: 'Others',
        }];
        const {text, date, time} = this.state;
        return(
            <KeyboardAwareScrollView>
                {/* <ImageBackground
                style={{height: '100%', width: '100%'}}
                source={{uri: uri}}
            > */}
                <View>
                    {/* <View style = {{flex:1, flexDirection: 'row', justifyContent: 'space-between', alignSelf: 'center', padding:35}}>
                        <Text style = {styles.bigBlack}> Create Session </Text>
                    </View> */}

                    <View style = {{flexDirection: 'column', marginTop:15, marginLeft:15, marginRight: 15}}>
                        <Text style = {{color: 'red',fontWeight: 'bold', fontSize:20}}>
                            Meetup Name : 
                        </Text>
                        <TextInput
                            style = {{marginTop:10, borderBottomWidth: 1, borderBottomColor:'grey', width:"100%", color:'black'}}
                            placeholder = "Type here to Enter the name!"
                            value={text}
                            onChangeText={text =>  this.setState({sessionName: text})}
                        />

                        <Text 
                            style = {{color: 'red',fontWeight: 'bold', fontSize: 20, marginTop:20}}
                        >  
                            Meet-up Date & Time:  
                        </Text>
                        <TouchableOpacity
                            style={{marginTop: 20}}
                            onPress={this._showDateTimePicker}
                        >
                            {(date !== '' && time !== '') 
                            ?   <Text>
                                    {date} {time}
                                </Text>
                            :
                                <Text>
                                    Select meet up date and time
                                </Text>
                            }
                        </TouchableOpacity>
                        <DateTimePicker
                            isVisible={this.state.isDateTimePickerVisible}
                            onConfirm={this._handleDatePicked}
                            onCancel={this._hideDateTimePicker}
                            mode = 'datetime'
                            is24Hour = {true}
                        />
                    {/* </View> */}

                    {/* <View style = {{flexDirection: 'column', marginTop:15, marginLeft:15}}> */}
                        <Text style = {{color: 'red',fontWeight: 'bold', fontSize: 20, marginTop:20}}> 
                            Category Type: 
                        </Text>
                        <Dropdown
                            style={{width:'100%'}}
                            onChangeText={(value) => this.setState({categoryName: value})}
                            label = 'Choose your category'
                            data = {data}
                            containerStyle={{width:'100%'}}
                        />
                    {/* </View> */}

                    {/* <View style = {{flexDirection: 'column', justifyContent: 'space-between', marginTop:15}}> */}
                        <Text 
                            style = {{color: 'red',fontWeight: 'bold', fontSize: 20, marginTop:20}}> 
                            Expected Skills:  
                        </Text>
                        <TextInput
                            style = {{marginTop:10, borderBottomWidth: 1, borderBottomColor:'grey', width:"100%", color:'black'}}
                            placeholder = "  Enter Recommended skills"
                        />
                    {/* </View> */}

                    {/* <View style = {{flex:1, flexDirection: 'column', justifyContent: 'space-between', marginTop:15}}> */}
                        <Text 
                            style = {{color: 'red',fontWeight: 'bold', fontSize: 20, marginTop:20}}
                        > 
                            Meet-up Location  
                        </Text>
                        <TextInput
                            style = {{marginTop:10, borderBottomWidth: 1, borderBottomColor:'grey', width:"100%", color:'black'}}
                            placeholder = "  Enter Meetup Location"
                            onChangeText={(text) => this.setState({location: text})}
                        />
                    </View>

                    <TouchableOpacity style={{
                        borderWidth:1,
                        borderColor: 'red',
                        borderRadius:20,
                        marginTop:25,
                        paddingBottom:15,
                        alignItems:'center',
                        marginLeft:'25%',
                        marginRight: '25%',
                        backgroundColor: 'red',
                        justifyContent:'center'
                    }}
                    onPress={()=> {
                        appStore.events[this.state.categoryName.toLowerCase()].push({
                            id: appStore.events[this.state.categoryName.toLowerCase()].length,
                            title: this.state.sessionName,
                            time: this.state.time,
                            date: this.state.date,
                            location: this.state.location,
                            going: 1,
                            skills: [
                                { skill: "React Cognitive Skills", rank: 1 },
                                { skill: "JS", rank: 1 }
                            ],
                            starred: false
                        })
                        Alert.alert('Success!', 'Your meetup has been created.');
                        this.props.navigation.goBack();
                    }}
                    >
                        <Text
                            style={{    
                                color:'white',
                                marginTop:20,
                                marginBottom: 7,
                                fontWeight:'bold'
                            }}
                        >
                            Submit
                        </Text>
                    </TouchableOpacity>
                </View>
            {/* </ImageBackground> */}
            </KeyboardAwareScrollView>
        );
    }

}

AppRegistry.registerComponent('2gather', () => Create);