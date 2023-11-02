import { Text, Dimensions, View, Button } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useEffect, useState, useRef} from "react";

const Radio = () => { 

    const screenHeight = Dimensions.get('window').height;
    const screenWidth = Dimensions.get('window').width;
    const componentWidth = screenWidth * 0.9;
    const componentHeight = screenHeight * 0.4;
    const componentMarginHorizontal = screenWidth * 0.05;
    const componentMarginVertial = screenHeight * 0.25;

    const [selectedOption, setSelectedOption] = useState(0);
    const refOne = useRef(null);
    const refTwo = useRef(null);
    const refThree = useRef(null);
    const refFour = useRef(null);
    const selectionOrder = [refOne, refTwo, refThree, refFour];

    const switchOptions = () => { 
        
        var lastSelection = 0;

        if (selectedOption == 3) {
            setSelectedOption(0);
        } else { 
            setSelectedOption(selectedOption + 1);
        }

        if (selectedOption == 0) {
            lastSelection = 3;
        } else { 
            lastSelection = selectedOption - 1;
        }

        selectionOrder[lastSelection].current.setNativeProps({
            style: {
                backgroundColor: "#d2cbb5"
            }
        });
        selectionOrder[selectedOption].current.setNativeProps({
            style: {
                backgroundColor: "#eeb462"
            }
        });
    }

    const lockOptions = () => { 
        selectionOrder[selectedOption - 1].current.setNativeProps({
            style: {
                backgroundColor: "#cd7672"
            }
        })
    }

    useEffect(() => { 
        switchOptions();
    }, [])

    return (
        
        <View style={{
            width: componentWidth,
            height: componentHeight,
            borderRadius: 10,
            marginTop: componentMarginVertial,
            marginLeft: componentMarginHorizontal
        }}>
            <Text style={{
                fontSize: 20,
                fontWeight: "600",
                marginHorizontal: componentMarginHorizontal,
                marginVertical: screenWidth * 0.05
            }}>
                Please make selection, single press for switching between selections, long press for lock selections:
            </Text>
            <View style={{
                backgroundColor: "#d2cbb5",
                borderRadius: 10,
                marginHorizontal: componentMarginHorizontal,
                marginTop: screenWidth * 0.05,
                height: screenHeight * 0.04
            }} ref={refOne}>
                <TouchableOpacity style={{
                    height: screenHeight * 0.04,
                    justifyContent: 'center'
                }}>
                    <Text style={{
                        fontSize: 16,
                        fontStyle: "italic",
                        fontWeight: "600",
                        marginHorizontal: componentMarginHorizontal,
                    }}>
                        Selection 1
                    </Text>
                </TouchableOpacity>
            </View>
            <View style={{
                backgroundColor: "#d2cbb5",
                borderRadius: 10,
                marginHorizontal: componentMarginHorizontal,
                marginTop: screenWidth * 0.05,
                height: screenHeight * 0.04
            }} ref={refTwo}>
                <TouchableOpacity style={{
                    height: screenHeight * 0.04,
                    justifyContent: 'center'
                }}>
                    <Text style={{
                        fontSize: 16,
                        fontStyle: "italic",
                        fontWeight: "600",
                        marginHorizontal: componentMarginHorizontal,
                    }}>
                        Selection 2
                    </Text>
                </TouchableOpacity>
            </View>
            <View style={{
                backgroundColor: "#d2cbb5",
                borderRadius: 10,
                marginHorizontal: componentMarginHorizontal,
                marginTop: screenWidth * 0.05,
                height: screenHeight * 0.04
            }} ref={refThree}>
                <TouchableOpacity style={{
                    height: screenHeight * 0.04,
                    justifyContent: 'center'
                }}>
                    <Text style={{
                        fontSize: 16,
                        fontStyle: "italic",
                        fontWeight: "600",
                        marginHorizontal: componentMarginHorizontal,
                    }}>
                        Selection 3
                    </Text>
                </TouchableOpacity>
            </View>
            <View style={{
                backgroundColor: "#d2cbb5",
                borderRadius: 10,
                marginHorizontal: componentMarginHorizontal,
                marginTop: screenWidth * 0.05,
                height: screenHeight * 0.04
            }} ref={refFour}>
                <TouchableOpacity style={{
                    height: screenHeight * 0.04,
                    justifyContent: 'center'
                }}>
                    <Text style={{
                        fontSize: 16,
                        fontStyle: "italic",
                        fontWeight: "600",
                        marginHorizontal: componentMarginHorizontal,
                    }}>
                        Selection 4
                    </Text>
                </TouchableOpacity>
            </View>
            <View style={{
                marginHorizontal: componentMarginHorizontal,
                marginTop: screenHeight * 0.15,
                height: screenHeight * 0.04,
                width: screenWidth * 0.4,
                backgroundColor: "#534666",
                borderRadius: 5,
                marginLeft: screenWidth * 0.25
            }}>
                <TouchableOpacity style={{
                    justifyContent: 'center',
                    height: screenHeight * 0.04,
                    width: screenWidth * 0.4,
                    alignItems: "center"
                }} onPress={() => { switchOptions() }}
                    onLongPress={() => { 
                        lockOptions()
                    }}>
                    <Text style={{
                        fontSize: 16,
                        color: "white",
                        fontWeight: 600
                    }}>TAP HERE</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Radio;

