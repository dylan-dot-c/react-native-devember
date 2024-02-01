import { StatusBar } from "expo-status-bar";
import {
    StyleSheet,
    Text,
    View,
    FlatList,
    ActivityIndicator,
} from "react-native";
import DayListItem from "./src/components/DayListItem";
import { useFonts, Inter_900Black } from "@expo-google-fonts/inter";
import {
    AmaticSC_400Regular,
    AmaticSC_700Bold,
} from "@expo-google-fonts/amatic-sc";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";

SplashScreen.preventAutoHideAsync();

const days = [...Array(24)].map((_, idx) => idx + 1);
export default function App() {
    let [fontloaded, fontError] = useFonts({
        Inter: Inter_900Black,
        Amaticreg: AmaticSC_400Regular,
        Amaticbold: AmaticSC_700Bold,
    });

    useEffect(() => {
        if (fontloaded || fontError) {
            SplashScreen.hideAsync();
        }
    }, [fontloaded, fontError]);

    if (!fontloaded && !fontError) {
        return null;
    }

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
