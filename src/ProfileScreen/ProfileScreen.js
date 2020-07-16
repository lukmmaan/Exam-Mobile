import React, { useEffect, useState } from "react";
import {
    StyleSheet,
    Text,
    View,
} from "react-native";
import Axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import Button from "../components/Button"
import AsyncStorage from "@react-native-community/async-storage"

export default ({ navigation }) => {
    const dispatch = useDispatch()
    const logoutHandler = () =>{
        AsyncStorage.removeItem("userData")
        .then((result)=>{
            dispatch({
                type:"USER_LOGOUT"
            })
            console.log("LOGOUT !")
        })
        .catch((err)=>{
            console.log(err)
        })
    }
    return(
        <View style={{marginTop:400}}>
            <Button onPress={logoutHandler}>Logout</Button>
        </View>
    )
}