import { useEffect, useState } from "react";
import { Dimensions, Text, View } from "react-native";
import { Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const PageCard = (props: { primaryColor: any; title: any; duration: any; time: any; type: any, onPress: any, navigation:any}) => { 
    const screenWidth = Dimensions.get('window').width;
    const screenHeight = Dimensions.get('window').height;
    const cardWidth = screenWidth * 0.9;
    const cardHeight = screenHeight * 0.2;
    const cardMargin = screenWidth * 0.05;
    // get transferred arguments values
    const primaryColor = props.primaryColor;
    const title = props.title;
    const duration = props.duration;
    const time = props.time;
    
    return (
        <View style={{
            width: cardWidth,
            height: cardHeight,
            borderRadius: 10,
            backgroundColor: primaryColor,
            marginTop: cardMargin,
            marginLeft: cardMargin
        }}>
            <TouchableOpacity style={{
                width: cardWidth,
                height: cardHeight,
            }}
                onPress={() => { props.onPress(props.navigation) }}
            >
            <Text style={{
                color: "black",
                fontSize: 14,
                fontWeight: "600",
                fontStyle: "italic",
                marginHorizontal: cardWidth * 0.05,
                marginTop: cardHeight * 0.1
            }}>{time}</Text>
            <Text style={{
                color: "black",
                fontSize: 22,
                fontWeight: "600",
                marginHorizontal: cardWidth * 0.05,
                marginTop: cardHeight * 0.15
            }}>{title}</Text>
            <Text style={{
                color: "black",
                fontSize: 16,
                fontWeight: "600",
                fontStyle: "italic",
                marginHorizontal: cardWidth * 0.05,
                marginTop: cardHeight * 0.05
            }}>{duration}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default PageCard;