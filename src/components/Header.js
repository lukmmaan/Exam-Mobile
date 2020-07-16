import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import TextUI from "./TextUI";
import { Icon } from "native-base";

const styles = StyleSheet.create({
  header: {
    height: 50,
    flexDirection: "row",
    paddingHorizontal: 18,
    alignItems: "center",
  },
});

export default (props) => {
  return (
    <View style={{ ...styles.header }}>
      <TouchableOpacity
        onPress={() => props.navigation.goBack()}
        style={{
          ...StyleSheet.absoluteFillObject,
          top: null,
          bottom: null,
          left: 16,
          right: null,
          zIndex: 1,
        }}
      >
        <Icon
          type="AntDesign"
          name="arrowleft"
          style={{
            color: "white",
          }}
        />
      </TouchableOpacity>
      <TextUI style={{ flex: 1, textAlign: "center" }} bold>
        {props.title}
      </TextUI>
    </View>
  );
};
