import { StyleSheet,Image, ScrollView } from 'react-native';
import { Text, View } from '../components/Themed';
import MasonryList from '../components/MasonryList';
import pins from '../assets/data/pins';
import React from 'react';
import { Feather, Entypo } from '@expo/vector-icons';

export default function ProfileScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      
      <View style={styles.header}>
        
        <View style={styles.icons}>
          <Feather name="share" size={24} color="white" style={styles.icon} />
          <Entypo name='dots-three-horizontal' size={24} color="white" style={styles.icon}  />
        </View>
        <Image source={{uri : "https://picsum.photos/200/300"}} style={[styles.image]}/>
        <Text style={styles.title}>Enigma</Text>
        <Text style={styles.subTitle}>420 Followers | 321 Followings</Text>
      </View>
      <MasonryList pins={pins} />

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    width:"100%",
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    margin:10
  },
  image: {
    width:200,
    aspectRatio:1,
    borderRadius:200,
    marginVertical:10
  },
  subTitle: {
    color:'#383838',
    fontWeight:'600'
  },
  header: {
    alignItems:'center'
  },
  icon: {
    paddingHorizontal:10
  },
  icons: {
    flexDirection:'row',
    alignSelf:'flex-end',
    padding:10 
  }
});
