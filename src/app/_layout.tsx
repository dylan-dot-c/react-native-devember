import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useFonts, Inter_900Black } from "@expo-google-fonts/inter";
import {
    AmaticSC_400Regular,
    AmaticSC_700Bold,
} from "@expo-google-fonts/amatic-sc";
import { useEffect } from "react";

SplashScreen.preventAutoHideAsync();

const Layout = () => {
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
        <Stack
            initialRouteName='index'
            screenOptions={{
                headerStyle: {
                    backgroundColor: "#123456",
                },
                headerTintColor: "#fff",
                headerTitleStyle: {
                    fontWeight: "bold",
                },
            }}>
            <Stack.Screen options={{ title: "I like to code" }} name='index' />
        </Stack>
    );
};

export default Layout;
