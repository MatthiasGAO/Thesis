import { Dimensions, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import TaskCard from "../Components/TaskCard";

const Today = (props: { navigation: any }) => { 
    // get phone screen size
    const screenWidth = Dimensions.get('window').width;
    const screenHeight = Dimensions.get('window').height;

    const navigateToTask = () => { 
        props.navigation.navigate("Task");
    }

    return (
        <SafeAreaView style={{
            flex: 1,
            backgroundColor: "#e8e0c8"
        }}>
            <Text style={{
                color: "black",
                fontSize: 28,
                marginTop: screenHeight * 0.03,
                marginLeft: screenWidth * 0.05
            }}>Toady's Tasks</Text>
            <Text style={{
                fontSize: 18,
                fontWeight: "bold",
                marginTop: screenHeight * 0.01,
                marginLeft: screenWidth * 0.05
            }}> 2 tasks finished, 5 tasks last </Text>
            <TaskCard primaryColor={"#eeb462"} title={"Primary evaluation: Mobility Task"} duration={"3mins"} time={"10:00"} type={"clinic"} onPress={navigateToTask} navigation={props.navigation}></TaskCard>
            <TaskCard primaryColor={"#cd7672"} title={"First course evaluation: Vision Task"} duration={"6mins"} time={"15:00"} type={"task"} onPress={navigateToTask} navigation={props.navigation}></TaskCard>
            <TaskCard primaryColor={"#138086"} title={"Second course evaluation: Sleep Feedback"} duration={"11mins"} time={"17:00"} type={"task"} onPress={navigateToTask} navigation={props.navigation}></TaskCard>
            <TaskCard primaryColor={"#dc8665"} title={"Review evaluation: Sleep Feedback"} duration={"17mins"} time={"19:00"} type={"task"} onPress={navigateToTask} navigation={props.navigation}></TaskCard>
        </SafeAreaView>
    )
}

export default Today;