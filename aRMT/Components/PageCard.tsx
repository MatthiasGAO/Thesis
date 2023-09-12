import React from 'react';
import { View, Dimensions, Text } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const PageCard = (props: { title: any; iconName: any; }) => { 
    // get phone screen width and height
    const screenWidth = Dimensions.get('window').width;
    const screenHeight = Dimensions.get('window').height;
    // get card width and height
    const marginWidth = screenWidth * 0.05;
    const marginHeight = screenHeight * 0.05;
    const cardWidth = screenWidth * 0.4;
    const cardHeight = screenHeight * 0.25;
    // get arguments
    const title = props.title;
    const iconName = props.iconName;
    
    return (
        <View id="container" style={
            {
                backgroundColor: '#CCE8E9',
                borderRadius: 16,
                width: cardWidth,
                height: cardHeight,
                marginHorizontal: marginWidth,
                marginTop: marginHeight
            }
        }>
            <MaterialIcons id = "icon" name={iconName} style={{
                color: 'black',
                fontSize: 30,
                top: '20%',
                left: '10%'
            }}></MaterialIcons>

            <Text id = "title" style={{
                color: 'black',
                fontSize: 20,
                top: '50%',
                left: '10%'
            }}>{title}</Text>
        </View>
    )
}

export default PageCard;