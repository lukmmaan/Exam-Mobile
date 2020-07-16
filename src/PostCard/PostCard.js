import React from "react";
import {
    StyleSheet,
    Text,
    View,
    Dimensions,
    Image,
    TouchableOpacity,
    SafeAreaView,
} from "react-native";

import TextUI from "../components/TextUI"
import Colors from "../components/constants/Colors"
import { Icon } from "native-base";
import Button from "../components/Button"
const { width } = Dimensions.get("screen");

const styles = StyleSheet.create({
    likeBtn: {
        fontSize: 22,
        color: "white",
    },
});

export default ({ navigation, data }) => {
    return (
        <View
            style={{
                backgroundColor: Colors.backgroundColor,
                width: width - 30,
                marginHorizontal: 15,
                borderRadius: 6,
                shadowColor: "#000",
                shadowOffset: {
                    width: 0,
                    height: 3,
                },
                shadowOpacity: 0.5,
                shadowRadius: 8,
                elevation: 6,
                marginVertical: 10,
                // marginTop:30
            }}
        >
            <TouchableOpacity  onPress={() => navigation.navigate("HomePostDetail", { postDetailData: data })}>
            <Image
                source={{
                    uri: data.image,
                }}
                style={{
                    padding:40,
                    width:width - 30,
                    height:width -30,
                }}
                
                // width={width - 50}
            />
            </TouchableOpacity>

            <View style={{ paddingHorizontal: 13 }}>
                <View
                    style={{
                        flexDirection: "row",
                        alignItems: "center",
                        marginTop: 11,
                    }}
                >
                </View>
                <TextUI style={{ marginTop: 11, height: null }} bold>
                    Rating: {data.rating}
                </TextUI>
                <TextUI size="sm" style={{ marginTop: 11, height: null }}>
                    Address : {data.address}
                </TextUI>
                <TextUI size="sm" style={{ marginTop: 11, height: null }}>
                    Cuisines : {data.cuisine}
                </TextUI>
                <TextUI size="sm" style={{ marginTop: 11, height: null }}>
                    Open : {data.openTime} AM to {data.closeTime} PM
                </TextUI>
                <TextUI size="sm" style={{ marginTop: 11, height: null }}>
                    Cost for 2 : TL {data.costForTwo}
                </TextUI>
                {/* <Button
                    onPress={() => navigation.navigate("HomePostDetail", { postDetailData: data })}
                    style={{
                        flexDirection: "row",
                        alignItems: "center",
                        marginLeft: 22,
                    }}
                >
                    <TextUI>
                        View
                    </TextUI>
                </Button> */}
            </View>
        </View>
    );
};