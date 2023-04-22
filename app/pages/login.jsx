import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LoginPage = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // replace this with your own login logic
    console.log("hi");

    // navigation.replace('SelectAvatar')

    AsyncStorage.getItem('userData').then((data) => {

      let userdata = JSON.parse(data);
      console.log("userData: " , userdata);

      if (userdata.username == email || userdata.email == email) {
        if (userdata.password == password) {
          Alert.alert("Success", "Logged in successfully")
          setTimeout(() => { 
            navigation.replace('SelectAvatar')
          },2000)

        } else {
          Alert.alert("Warning!", "Passwords do not match")
        }
      } else if (email.length == 0) {
        Alert.alert("Warning!", "Please enter your email")
      } else {
        Alert.alert("Warning!", "Username or Email Does Not Exist")

      }

    })
    // navigation.replace('SelectAvatar');
  };


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={styles.input}
      />
      <TouchableOpacity onPress={handleLogin} style={styles.button}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Register')} style={styles.link}>
        <Text>Don't have an account? Register here.</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    color: '#000',
    padding: 10,
    margin: 10,
    borderRadius: 5,
    width: '80%',
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    width: '80%',
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  link: {
    marginTop: 10,
  },
});

export default LoginPage;
