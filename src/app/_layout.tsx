import { Stack } from "expo-router";
const Layout = () => {
    return (
        <Stack
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
