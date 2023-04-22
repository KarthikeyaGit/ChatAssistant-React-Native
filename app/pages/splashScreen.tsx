import React, { useEffect } from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';

const SplashScreen = ({navigation}: {navigation: any}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Login');
    }, 2000); // 2 seconds
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ai Chat Assist</Text>
      <Image source={require('../assets/splash.jpg')} style={styles.logo} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 400,
    height: 400,
  },
  title: {
    fontSize: 24,
    color: '#3E54AC',
    fontWeight: '700',
  }
});

export default SplashScreen;
