import { StatusBar } from 'expo-status-bar';
import React from 'react';
import axios from 'axios';
import {StyleSheet, Text, SafeAreaView, FlatList, TouchableOpacity,View } from 'react-native';
import { Post } from '../components/Post';


export const HomeScreen =({ navigation }) => {
  const [items, setItems] = React.useState([]);
  React.useEffect(() => {
    axios
      .get('https://62fa26ddffd7197707e66da8.mockapi.io/items')
      .then(({ data }) => {
        setItems(data);
      })
      .catch(err => {
        console.log(err);
        alert('Error')
      })
  }, []);
  return (
      <View>
        <FlatList 
          data={items}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => navigation.navigate('FullPost', {title: item.title, imageUrl: item.imageUrl, sizes: item.sizes})}>
              <Post 
                title= {item.title}
                price= {item.price}
                imageUrl= {item.imageUrl} />
            </TouchableOpacity>
          )}/>
      </View>
  );
}
