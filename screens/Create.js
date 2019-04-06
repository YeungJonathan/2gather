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

    },
    smallWhite: {
        color: 'red',
        fontWeight: 'bold',
    }
});

export default class Create extends Component{

    _showDateTimePicker = () => this.setState({ isDateTimePickerVisible: true });

    _hideDateTimePicker = () => this.setState({ isDateTimePickerVisible: false });

    _handleDatePicked = (datetime) => {
        console.log('A date has been picked: ', datetime);
        this.setState({time:datetime})
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
        const {text,time} = this.state;
        const displayTime = time===''?'Select Meet-up Date&Time': this.getDisplayTime(time);
        return(
            <KeyboardAwareScrollView>
                <ImageBackground
                style={{height: '100%', width: '100%'}}
                source={{uri: uri}}
            >
                <View style = {{ flex: 6,flexDirection: 'column', marginTop:25}}>
                    <View style = {{flex:1, flexDirection: 'row', justifyContent: 'space-between', alignSelf: 'center', padding:35}}>
                        <Text style = {styles.bigBlack}> Create Session </Text>
                    </View>
                    <View style = {{flexDirection: 'column', alignItems: "left", marginTop:15}}>
                        <Text style = {styles.smallWhite}> Category Type: </Text>
                        <Dropdown
                            style={{width:'100%'}}
                            label = 'Choose your category'
                            data = {data}
                            containerStyle={{width:'100%'}}
                        />
                    </View>

                    <View style = {{flex:1.5, flexDirection: 'column', alignItems: "left", marginTop:15}}>
                        <Text style = {styles.smallWhite}> Session Name : </Text>
                        <TextInput
                            style = {{marginTop:10, borderBottomWidth: 1, borderBottomColor:'grey', width:"100%", marginLeft:10, color:'black'}}
                            placeholder = "Type here to Enter the name!"
                            value={text}
                            onChangeText={text =>  this.setState({text: text})}
                        />
                    </View>

                    <View style = {{flex:1, flexDirection: 'column', justifyContent: 'space-between', marginTop:15}}>
                        <Text style = {styles.smallWhite}> Expected Skills:  </Text>
                        <TextInput
                            style = {{marginTop:10, borderBottomWidth: 1, borderBottomColor:'grey', width:"100%", marginLeft:10, color:'black'}}
                            placeholder = " Type here to enter the expected skills!"
                        />
                    </View>

                    <View style = {{flex:1, flexDirection: 'column', justifyContent: 'space-between', marginTop:15}}>
                        <Text style = {styles.smallWhite}> Meet-up Location  </Text>
                        <TextInput
                            style = {{marginTop:10, borderBottomWidth: 1, borderBottomColor:'grey', width:"100%", marginLeft:10, color:'black'}}
                            placeholder = " Type here to enter the expected meet-up location!"
                        />
                    </View>

                    <View style = {{flex:1, flexDirection: 'column', justifyContent: 'space-between', marginTop:15,borderBottomWidth: 1, borderBottomColor:'grey', minimumDate: '2'}}>
                        <Text style = {{marginTop:15}}> Meet-up Date&Time:  </Text>
                        <View style={{ flex: 1, marginTop:15 }}>
                            <TouchableOpacity
                                style={{marginBottom:15}}
                                onPress={this._showDateTimePicker}>
                                <Text>{displayTime}</Text>
                            </TouchableOpacity>
                            <DateTimePicker
                                isVisible={this.state.isDateTimePickerVisible}
                                onConfirm={this._handleDatePicked}
                                onCancel={this._hideDateTimePicker}
                                mode = 'datetime'
                                is24Hour = {true}
                            />
                        </View>
                    </View>

                    <TouchableOpacity style={{
                        borderWidth:1,
                        borderColor: 'black',
                        borderRadius:15,
                        marginTop:25,
                        paddingBottom:15,
                        alignItems:'center',
                        marginLeft:'25%',
                        marginRight: '25%',
                        backgroundColor: 'red'
                    }}
                    onPress={()=>Alert.alert('pew pew')}
                    >
                        <Text
                        style={{
                            color:'white',
                            paddingTop:10,
                            paddingBottom:4
                            }}
                        >
                            Submit
                        </Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
            </KeyboardAwareScrollView>
        );
    }

}

AppRegistry.registerComponent('2gather', () => Create);