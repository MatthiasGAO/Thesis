import { Dimensions, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { TouchableOpacity } from "react-native-gesture-handler";
import Radio from "../Components/Radio";

const Task = () => { 
    const screenWidth = Dimensions.get('window').width;
    const screenHeight = Dimensions.get('window').height;

    return (
            <SafeAreaView style={{
                flex: 1,
                backgroundColor: "#e8e0c8"
            }}>
                <Radio></Radio>
            </SafeAreaView>
    )
}

export default Task;