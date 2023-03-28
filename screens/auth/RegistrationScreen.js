import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
  Platform,
  KeyboardAvoidingView,
  Keyboard,
  Dimensions,
  TouchableWithoutFeedback,
  ImageBackground,
} from "react-native";

const image = require("../../assets/background.png");
const addUserPhoto = require("../../assets/add-avatar.png");

const initialState = {
  login: "",
  email: "",
  password: "",
};

export const RegistrationScreen = () => {
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [state, setState] = useState(initialState);

  const keyboardHide = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
    console.log(state);
    setState(initialState);
  };

  const [dimensions, setDimensions] = useState(
    Dimensions.get("window").width - 20 * 2
  );

  useEffect(() => {
    const onChange = () => {
      const width = Dimensions.get("window").width - 20 * 2;
      setDimensions(width);
    };
    Dimensions.addEventListener("change", onChange);
    return () => {
      Dimensions.removeEventListener("change", onChange);
    };
  }, []);

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <ImageBackground
        source={image}
        resizeMode="cover"
        style={styles.backgroundImage}
      >
        {/* <RegistrationScreen /> */}
        {/* <LoginScreen /> */}

        <KeyboardAvoidingView behavior={Platform.OS === "ios" && "padding"}>
          <View
            style={{ ...styles.wrap, paddingBottom: isShowKeyboard ? 0 : 45 }}
          >
            <View style={styles.userImage}>
              <TouchableOpacity style={styles.addAvatar}>
                <Image source={addUserPhoto} />
              </TouchableOpacity>
            </View>
            <Text style={styles.title}>Sign Up</Text>
            <View style={styles.inputWrap}>
              <TextInput
                style={styles.input}
                placeholder="Login"
                value={state.login}
                onFocus={() => setIsShowKeyboard(true)}
                onChangeText={(value) =>
                  setState((prevState) => ({ ...prevState, login: value }))
                }
              />
              <TextInput
                style={styles.input}
                placeholder="Email"
                value={state.email}
                onFocus={() => setIsShowKeyboard(true)}
                onChangeText={(value) =>
                  setState((prevState) => ({ ...prevState, email: value }))
                }
              />
              <TextInput
                style={styles.input}
                placeholder="password"
                value={state.password}
                secureTextEntry={true}
                onFocus={() => setIsShowKeyboard(true)}
                onChangeText={(value) =>
                  setState((prevState) => ({ ...prevState, password: value }))
                }
              />
            </View>
            <View style={styles.btnWrap}>
              <TouchableOpacity
                activeOpacity={0.7}
                style={styles.btnRegistration}
                onPress={() => keyboardHide()}
              >
                <Text style={styles.btnText}>Sign up</Text>
              </TouchableOpacity>
            </View>
            <Text style={styles.bottomText}>Have an account? Log in</Text>
          </View>
        </KeyboardAvoidingView>
        <StatusBar style="auto" />
      </ImageBackground>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-end",
  },
  wrap: {
    position: "relative",
    backgroundColor: "white",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    alignItems: "center",
  },
  userImage: {
    position: "absolute",
    top: -60,
    width: 120,
    height: 120,
    borderRadius: 16,
    backgroundColor: "#F6F6F6",
  },
  addAvatar: {
    position: "absolute",
    right: -12.5,
    bottom: 26,
  },
  title: {
    color: "#212121",
    marginTop: 92,
    fontFamily: "Roboto-Medium",
    fontSize: 30,
  },
  inputWrap: {
    width: "100%",
    marginTop: 32,
  },
  input: {
    height: 50,
    marginTop: 16,
    marginHorizontal: 16,
    paddingLeft: 16,
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    color: "#212121",
    backgroundColor: "#F6F6F6",
    borderWidth: 1,
    borderColor: "#E8E8E8",
    borderRadius: 8,
  },
  btnWrap: {
    width: "100%",
  },
  btnRegistration: {
    alignItems: "center",
    marginTop: 43,
    marginHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 16,
    backgroundColor: "#FF6C00",
    borderRadius: 100,
  },
  btnText: {
    color: "#FFFFFF",
    fontFamily: "Roboto-Regular",
    fontSize: 16,
  },
  bottomText: {
    marginTop: 16,
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    textAlign: "center",
    color: "#1B4371",
  },
});

export default RegistrationScreen;
