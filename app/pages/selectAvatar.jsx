import React, {useState, useEffect} from 'react';
import { StyleSheet, FlatList, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SelectAvatar = ({ navigation }) => {
  const [Avatars, setAvatar] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await AsyncStorage.getItem('userData');
        let userData = JSON.parse(data);
        console.log("userData: ", userData, userData.value == 2);
        if (userData.value == 2) {
          setAvatar([
            'https://i.pravatar.cc/150?img=8',
            'https://i.pravatar.cc/150?img=8',
            'https://i.pravatar.cc/150?img=8',
            'https://i.pravatar.cc/150?img=8',
            'https://i.pravatar.cc/150?img=8',
            'https://i.pravatar.cc/150?img=8'
          ])
        } else if (userData.value == 1) {
          setAvatar([
            'https://i.pravatar.cc/150?img=5',
            'https://i.pravatar.cc/150?img=5',
            'https://i.pravatar.cc/150?img=5',
            'https://i.pravatar.cc/150?img=5',
            'https://i.pravatar.cc/150?img=5',
            'https://i.pravatar.cc/150?img=5'
          ])
        }
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  const Avatar = ({ url }) => {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={() => navigation.navigate('ChatAssist')}>
          <Image source={{ uri: url }} style={styles.image} />
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <ScrollView>
      <FlatList
        data={Avatars}
        renderItem={({ item }) => <Avatar url={item} />}
        keyExtractor={(item, index) => index.toString()}
        numColumns={2}
        contentContainerStyle={styles.container}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
  },
  image: {
    width: '100%',
    aspectRatio: 1,
    borderRadius: 50,
  },
});

export default SelectAvatar;
