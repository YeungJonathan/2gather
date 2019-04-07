import React from "react";
import {
  View,
  FlatList,
  Text,
  TouchableOpacity,
  TextInput,
  ImageBackground,
  Image
} from "react-native";
import { fakeEventItems } from "../constants/FakeEventItems";
import { observer } from "mobx-react";
import EventCard from "../components/EventCard";

@observer
class LoginScreen extends React.Component {
  static navigationOptions = () => {
    return {
      header: null
    };
  };

  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      password: ""
    };
  }

  render() {
    const { navigation } = this.props;
    return (
      <ImageBackground
        source={require("../assets/images/matthew-henry-86779-unsplash.jpg")}
        style={{ height: "100%", width: "100%" }}
      >
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
                    <Image
                        source={require('../assets/images/logo.png')}
                        style={{width: '50%',tintColor:'white'}}
                    />
                    <View style={{flexDirection:'row', marginBottom:20}}>
                    <Text style={{fontSize: 18, color:'white'}}>
                            Username
                        </Text>
                        <TextInput
                            style={{width:'70%', borderColor:'white', color: 'white', marginLeft:14, borderWidth:1}}
                            placeholder = "  Enter Name"
                            value={this.state.userName}
                            placeholderTextColor={'white'}
                            onChangeText={input =>  this.setState({userName: input})}
                        />
                    </View>
                    <View style={{flexDirection:'row'}}>
                        <Text style={{fontSize: 18, color:'white'}}>
                            Password
                        </Text>
                        <TextInput
                            style={{width:'70%', borderColor:'white', color: 'white', marginLeft:15, borderWidth:1}}
                            placeholder = "  Enter Password"
                            value={this.state.password}
                            placeholderTextColor={'white'}
                            secureTextEntry
                            onChangeText={input =>  this.setState({password: input})}
                        />
                    </View>
                    <TouchableOpacity 
                        onPress={() => this.props.navigation.navigate("Categories", {name: this.state.userName})}
                        style={{borderColor:'#3a85ff', borderWidth:1, borderRadius:10, marginTop: 50, backgroundColor:'#3a85ff', width: '50%', justifyContent:'center', alignItems:'center'}}    
                    >
                        <Text style={{color: 'white', fontSize: 18, paddingBottom:10, paddingTop: 10}}>
                            Log In
                        </Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        );
    }
}

export default LoginScreen;
