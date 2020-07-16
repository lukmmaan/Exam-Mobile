import React, { useEffect, useState } from "react";
import {
    StyleSheet,
    Text,
    View,
    Image,
    Dimensions,
    FlatList,
    SafeAreaView,
    TextInput,
    TouchableOpacity,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import AsyncStorage from "@react-native-community/async-storage"
import { Icon } from "native-base";
import Axios from "axios"
import { API_URL } from "../components/constants/API"
import PostCard from "../PostCard/PostCard"
import { ScrollView } from "react-native-gesture-handler";
const { height } = Dimensions.get("screen");

const styles = StyleSheet.create({
    contentContainer: {
        marginTop: height * (314 / 812),
        alignItems: "center",
        marginHorizontal: 25,
    },
    welcomeText: {
        //   fontFamily: "AvenirNextLTPro-Heavy",
        fontSize: 30,
        height: 34,
        color: "orange"
    },
    loginText: {
        marginTop: 30,
        height: 30,
        fontSize: 30,
        color: "red"
    },
    containerNavbar: {
        // marginHorizontal: 25,
        // marginTop: 30,
        height: 90,
        backgroundColor: "orange",
        // alignItems: "flex-end"
        // justifyContent:"space-around"
        // flex:1,
        display: "flex",
        flexDirection: "row"
    },
    textUsername: {
        marginTop: 60,
        paddingRight: 40,
        fontSize: 24,
        paddingHorizontal: 80
        // marginRight:00
    },
    iconCstm: {
        marginTop: 60,
        paddingRight: 40,
        fontSize: 24
    }

});

export default ({ navigation }) => {

    const [postList, setPostList] = useState([]);
    const dispatch = useDispatch();
    const userSelector = useSelector((state) => state.user);

    useEffect(() => {
        // console.log(userSelector.username)
        Axios.get(`${API_URL}/restaurants`)
            .then((res) => {
                console.log(res.data);
                setPostList(res.data.result);
                console.log(postList)
            })
            .catch((err) => {
                console.log(err);
            });
        AsyncStorage.getItem("userData")
            .then((storageItem) => {
                if (!storageItem) throw "Item is empty";
                dispatch({
                    type: "USER_LOGIN",
                    payload: JSON.parse(storageItem),
                });
            })
            .catch((err) => {
                console.log(err);
            });
        // AsyncStorage.removeItem("userData");
    }, []);

    const renderPosts = ({ item }) => {
        return <PostCard navigation={navigation} data={item} />;
    };

    return (
        <View>
            <ScrollView>
            <View style={{ ...styles.containerNavbar }}>
                <Icon style={{ ...styles.iconCstm }} type="MaterialCommunityIcons" name="food" />
                <Text style={{ ...styles.textUsername }}>Hello,{userSelector.username}</Text>
            </View>
            <FlatList
                contentContainerStyle={{ marginTop: 46 }}
                data={postList}
                renderItem={renderPosts}
                keyExtractor={(item) => item.id.toString()}
            />
            </ScrollView>
        </View>
    )

}