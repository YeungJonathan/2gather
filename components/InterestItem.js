import React from 'react';
import { View, Text } from 'react-native';
import { Rating } from 'react-native-ratings';

const InterestItem = ({interest}) => (
    <View style={{flexDirection:'row', justifyContent:'space-between'}}>
        <Text style={{paddingLeft:15, fontSize:18, color:'grey'}}>
            {interest.name}
        </Text>
        <Rating
            readonly
            style={{marginBottom:30, marginRight:15}}
            type='rocket'
            ratingCount={5}
            imageSize={30}
            startingValue={interest.proficiency}
            ratingTextColor={'gold'}
        />  
    </View>     
    )

export default InterestItem;