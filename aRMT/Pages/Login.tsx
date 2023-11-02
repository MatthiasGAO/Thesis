import { Button, Dimensions, View, Image} from "react-native";
import { Text } from "react-native"
import { TouchableOpacity } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";


const Login = (props: { navigation: any }) => {
    const screenHeight = Dimensions.get('window').height;
    
    return (
        <SafeAreaView style={{ // Make a safety space to ensure that all the content will not be cut
            flex: 1, /* Take all the screen useable space */
            alignItems: 'center',
            backgroundColor: '#e8e0c8'
        }}>
            <View>
                <Text style={{
                    fontSize: 24,
                    fontWeight: 'bold',
                    color: '#20315f',
                    marginTop: screenHeight * 0.15
                }}>
                    RADAR BASE ACTIVE RMT
                </Text>                            
            </View>
            <Image
                source={require('../Images/Logo.png')}
                style={{
                    height: screenHeight * 0.3,
                    width: screenHeight * 0.3,
                    marginTop: screenHeight * 0.15
                }} />
            <View style={{
                marginTop: screenHeight * 0.15
            }}>
                <Button title="Scan QR Code" color={"#51247a"} onPress={() => { props.navigation.navigate("Home") }}/>
            </View>
            
        </SafeAreaView>
    )
}

export default Login;