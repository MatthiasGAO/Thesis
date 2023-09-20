import { View } from "react-native";
import { Text } from "react-native"
import { TouchableOpacity } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";

const Login = () => {
    return (
        <SafeAreaView style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#fff'
        }}>
            <View>
                <Text style={{
                    fontSize: 30,
                    fontWeight: 'bold',
                    color: '#20315f'
                }}>
                    RADAR ACTIVE RMT
                </Text>
            </View>
            <TouchableOpacity style={{
                backgroundColor: '#51247A',
                padding: 20,
                borderRadius: 5,
                flexDirection: 'row',
            }}>
                <Text style={{
                    fontWeight: 'bold',
                    fontStyle: 'italic',
                    fontSize: 16,
                    color: '#fff'
                }}>
                    Scan QR Code
                </Text>
            </TouchableOpacity>
        </SafeAreaView>
        
    )
}

export default Login;