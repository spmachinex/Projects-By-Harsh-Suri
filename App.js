import { StatusBar } from "expo-status-bar";
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { Button, TextInput } from "react-native";
import { Pressable } from "react-native";
const Styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
  logo: {
    width: 66,
    height: 58,
  },
});
export default function App() {
  const [pressedCount, setpressedCount] = useState(0);
  return (
    <View style={styles.container}>
      <Text style={{ fontStyle: "italic", color: "white" }}>
        This is my first{" "}
        <Text style={{ fontWeight: "bold", color: "grey" }}>React Native</Text>{" "}
        App.
      </Text>
      <StatusBar style="auto" />
     
  
        <Image
        style={Styles.tinyLogo}
        source={{
          uri: "https://reactnative.dev/img/tiny_logo.png",
        }}
      />
      

      <Text style={{ margin: 16, color: "white" }}>
        {pressedCount > 0
          ? "This button was pressed " + pressedCount + " times!"
          : "This button isn't pressed yet"}
      </Text>
      <Button
        title="This is a magic button, Do not Press it"
        onPress={() => setpressedCount(pressedCount + 1)}
      />
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
  },
});
