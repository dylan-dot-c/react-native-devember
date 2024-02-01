import { Text, View, StyleSheet, Pressable } from "react-native";

interface Props {
    day: number;
}

import { Link } from "expo-router";

const DayListItem = ({ day }: Props) => {
    return (
        <Link href={`/day${day}`} asChild>
            {/* pressable is a pressable view kinda */}
            <Pressable style={styles.box}>
                <Text style={styles.text}>{day}</Text>
            </Pressable>
        </Link>
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
    link: {
        fontFamily: "Inter",
        marginTop: 10,
    },
});

export default DayListItem;
