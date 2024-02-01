import { Text, View, StyleSheet } from "react-native";

interface Props {
    day: number;
}

const DayListItem = ({ day }: Props) => {
    return (
        <View style={styles.box}>
            <Text style={styles.text}>{day}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    box: {
        flex: 1,
        aspectRatio: 1,
        backgroundColor: "#F9EDE3",
        justifyContent: "center",
        alignItems: "center",
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: "#9b4521",
        borderRadius: 20,
    },
    text: {
        color: "#9b4521",
        fontSize: 70,
        fontFamily: "Amaticbold",
    },
});

export default DayListItem;
