import React, { useState } from "react";
import { View, Image, TextInput, Button, StyleSheet, Alert } from "react-native";

const LoginScreen = ({ navigation }) => {
 const [user, setUser] = useState("");
 const [password, setPassword] = useState("");

 const handleSignInPress = () => {
  if (user.trim().length > 0 && password.trim().length > 0) {
   if (user === "userfacilito" && password === "codigo123") {
    navigation.navigate("Home");
   } else {
    Alert.alert("Error", "El usuario y/o contrasena son incorrectos");
    setPassword("");
    setUser("");
   }
  }
 };

 const handleUserTextChange = (text) => setUser(text);
 const handlePasswordTextChange = (text) => setPassword(text);

 return (
  <View style={styles.container}>
   <View style={styles.imageContainer}>
    <Image source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }} style={styles.image} />
   </View>
   <View style={styles.inputsContainer}>
    <TextInput
     placeholder="user"
     style={styles.textInput}
     onChangeText={handleUserTextChange}
     value={user}
    />
    <TextInput
     placeholder="password" 
     style={styles.textInput} 
     secureTextEntry 
     onChangeText={handlePasswordTextChange}
     value={password}
    />
   </View>
   <Button style={styles.button} title="Sign in" onPress={handleSignInPress} />
  </View>
 );
}

const styles = StyleSheet.create({
 image: {
  width: 70,
  height: 70,
  alignSelf: "center",
 },
 imageContainer: {
  marginTop: 10,
  marginBottom: 10
 },
 textInput: {
  backgroundColor: "#fff",
  padding: 6,
  marginTop: 4,
  marginBottom: 12,
  fontSize: 16
 },
 button: {
  backgroundColor: "#1976D2"
 },
 container: {
  flex: 1,
  justifyContent: "center",
  marginLeft: 18,
  marginRight: 18
 }
});

export default LoginScreen;