import React from "react";
import PageCard from "../Components/PageCard";
import { View, Dimensions, Text } from "react-native"
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { TouchableOpacity } from "react-native-gesture-handler";

const Home = (props: {navigation: any}) => {
    // get phone screen size
    const screenWidth = Dimensions.get('window').width;
    const screenHeight = Dimensions.get('window').height;

    return (
        <View id="Page" style={{ 
            position: "relative",
            height: screenHeight,
            width: screenWidth,

        }}>
            <MaterialIcons name="notifications" style={{
                color: 'black',
                fontSize: 25,
                top: '6%',
                left: '80%'
            }}></MaterialIcons>
            <MaterialIcons name="more-vert" style={{
                color: 'black',
                fontSize: 25,
                top: '3%',
                left: '90%'
            }}></MaterialIcons>
            <Text style={{
                textAlign: "center",
                top: '10%',
                fontSize: 30,
                color: 'black'
            }}>
                Welcome    
            </Text>
            <View id="cardContainer" style={{
                position: "absolute",
                height: '65%',
                width: '100%',
                top: '30%',
                bottom: '5%',
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap"
            }}>
                <TouchableOpacity onPress={()=> props.navigation.navigate('Today') }>
                    <PageCard iconName={"today"} title={"Today"}></PageCard>
                </TouchableOpacity>
                <PageCard iconName={"pending-actions"} title={"Scheduled"}></PageCard>
                <PageCard iconName={"done"} title={"Finished"}></PageCard>
                <PageCard iconName={"assignment-late"} title={"Overdue"}></PageCard>
            </View>
        </View>
    )
}

export default Home;