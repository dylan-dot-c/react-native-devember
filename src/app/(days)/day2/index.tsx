import { Text, View } from "react-native";
import { Stack } from "expo-router";
const About = () => {
    return (
        <View>
            <Stack.Screen options={{ title: "Day 2" }} />

            <Text>Hello There</Text>
        </View>
    );
};

export default About;
