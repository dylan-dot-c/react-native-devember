import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, FlatList } from "react-native";
import DayListItem from "../components/DayListItem";

const days = [...Array(24)].map((_, idx) => idx + 1);
export default function App() {
    return (
        <View style={styles.container}>
            <FlatList
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.content}
                data={days}
                columnWrapperStyle={styles.wrapper}
                numColumns={2}
                renderItem={(value) => <DayListItem day={value.item} />}
            />
            <StatusBar style='auto' />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        gap: 10,
    },
    content: {
        gap: 10,
        rowGap: 10,
    },
    wrapper: {
        gap: 10,
        padding: 10,
    },
});
