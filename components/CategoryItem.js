import React from 'react';
import { Alert, View, Text, ImageBackground, TouchableOpacity } from 'react-native';



export default class CategoryItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            categoryName: props.categoryName,
            image: props.image
        }
    }

    render(){
        const {categoryName,image} = this.state;
        return(
            <>
            <TouchableOpacity
                onPress={() => this.props.navigation.navigate('Events')}
            >
                <ImageBackground
                    source={{uri: image}}
                    style={{height: 100, width: '100%'}}
                >
                    <Text style={{color: 'white', 
                        fontSize: 24, 
                        marginTop: 40, 
                        marginLeft: 10, 
                        textShadowOffset: {width: 2, height: 1},
                        textShadowColor: 'grey'
                        }}
                    >
                        {categoryName}
                    </Text>
                </ImageBackground>
            </TouchableOpacity>
        </>

        )
    }
}
