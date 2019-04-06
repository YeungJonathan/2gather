import React, { Component } from 'react';
import {Text, TextInput, View, StyleSheet, Alert, AppRegistry, ImageBackground, TouchableOpacity} from 'react-native';
import { Dropdown } from 'react-native-material-dropdown';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import DateTimePicker from 'react-native-modal-datetime-picker';

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
        this.setState({date:datetime})
        this._hideDateTimePicker();
    };

    constructor(props){
        super(props);
        this.state = {
            sessionName: props.name,
            ExpectedSkills: props.name,
            text: '',
            isDateTimePickerVisible: false,
            date:''        
        };
    }

    getDisplayTime(date){
        if (date==''){
            return 'Select Meet-up Date&Time'
        }
        const displayTime = new Date(date);
        const day = displayTime.getDate();
        const month = displayTime.getMonth()+1;
        const year = displayTime.getFullYear();
        return day + '/' + month +'/'+ year
    }

    render(){
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
        let uri= 'https://i.pinimg.com/564x/61/ed/e8/61ede8bf40bb73901184253fd08d3cfa.jpg';
        const {text,date} = this.state;
        const displayTime = date===''?"Click to choose the date":this.getDisplayTime(date);
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
                            onChangeText={text =>  this.setState({text: text})}
                        />

                        <Text 
                            style = {{color: 'red',fontWeight: 'bold', fontSize: 20, marginTop:20}}
                        >  
                            Meet-up Date & Time:  
                        </Text>
                        <TouchableOpacity
                            style={{marginTop: 20}}
                            onPress={this._showDateTimePicker}>
                            <Text>
                                {displayTime}
                            </Text>
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
                        />
                    {/* </View> */}

                    {/* <View style = {{flex:1, flexDirection: 'column', justifyContent: 'space-between', marginTop:15,borderBottomWidth: 1, borderBottomColor:'grey', minimumDate: '2'}}> */}

                        {/* <View style={{ flex: 1, marginTop:15 }}> */}
                        {/* </View> */}
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
                    onPress={()=>Alert.alert('pew pew')}
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