import { Text, View, StyleSheet } from "react-native";
import { Stack } from "expo-router";
const DayDetails = () => {
    return (
        <View>
            <Stack.Screen options={{ title: "Day 1" }} />
            <Text style={styles.text}>Hello There</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    text: {
        fontSize: 40,
        fontFamily: "Amaticbold",
    },
});

export default DayDetails;
