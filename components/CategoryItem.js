import React from 'react';
import { Alert, View, Text, ImageBackground, TouchableOpacity } from 'react-native';

const CategoryItem = ({
    navigation,
    categoryName,
    image
}) => (
        <>
            <TouchableOpacity
                onPress={() => Alert.alert('Look at category', categoryName)}
            >
                <ImageBackground
                    source={{uri: image}}
                    style={{height: 100, width: '100%'}}
                >
                    <Text style={{color: 'white', fontSize: 24, marginTop: 40, marginLeft: 10}}>{categoryName}</Text>
                </ImageBackground>
            </TouchableOpacity>
        </>
);

export default CategoryItem;