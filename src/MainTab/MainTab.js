import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import HomeStack from "../HomeStack/HomeStack"
import ProfileScreen from "../ProfileScreen/ProfileScreen"
import Colors from "../components/constants/Colors"
import { Icon } from "native-base";

const Tab = createBottomTabNavigator()

export default () => {
    return (
        <Tab.Navigator tabBarOptions={{
            activeTintColor: Colors.primaryColor,
            style: {
                backgroundColor: "#20242F",
                borderTopWidth: 0,
                paddingTop: 4,
                alignSelf: "center",
                borderRadius: 18,
                position: "absolute",
                bottom: 20,
                left: 30,
                right: 30,
                alignItems: "center"
            }
        }}>
            <Tab.Screen
                name="Home"
                component={HomeStack}
                options={{
                    // tabBarLabel nama tab
                    tabBarIcon: ({ color, size }) => <Icon type="Entypo" name="home" style={{ color, fontSize: size }} />
                }} />
            <Tab.Screen
                name="Profile"
                component={ProfileScreen}
                options={{
                    // tabBarLabel nama tab
                    tabBarIcon: ({ color, size }) => <Icon type="FontAwesome5" name="user" style={{ color, fontSize: size }} />
                }} />
        </Tab.Navigator>
    )
}