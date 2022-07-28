import { StyleSheet, Image, View, Pressable } from 'react-native'
import React, { useEffect, useState } from 'react'
import pins from '../assets/data/pins'
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'
import { Text } from '../components/Themed'
import { Ionicons } from '@expo/vector-icons'
import { useNavigation, useRoute } from '@react-navigation/native';

const PinScreen = () => {

    const navigation = useNavigation()
    const route = useRoute()
    // const pin = pins[2]
    const [ratio, setRatio] = useState(1)

    const insets = useSafeAreaInsets()

    const pinId = route.params?.id;

    const pin  = pins.find((p) => p.id === pinId)

    useEffect(() => {
        if (pin?.image) {
          Image.getSize(pin.image, (width, height) => setRatio(width/height))
        }
      }, [pin])

      const goBack = () => {
        navigation.goBack()
      }

      if (!pin) {
        return (
            <Text>Pin not Found</Text>
        )
      }

  return (
    <SafeAreaView style={{backgroundColor:'black'}}>
        <StatusBar style='light'/>
        <View style={styles.root}>
            <Image source={{uri : pin.image}} style={[styles.image,{aspectRatio:ratio}]}/>
            <Text style={styles.title}>{pin.title}</Text>
            <Pressable onPress={goBack} style={[styles.backBtn,{top:insets.top + 15}]}>
            <Ionicons name='chevron-back' size={35} color={'white'}/>
            </Pressable>
        </View>
    </SafeAreaView>
  )
}

export default PinScreen

const styles = StyleSheet.create({
    root:{
        height:'100%',
        backgroundColor:'white',
        borderTopLeftRadius:50,
        borderTopRightRadius:50
    },
    image:{
        width:'100%',
        borderTopLeftRadius:50,
        borderTopRightRadius:50
        
    },
    title:{
        margin:10,
        fontSize:24,
        fontWeight:'600',
        textAlign:'center',
        lineHeight:24,
        color:'grey'
    },
    backBtn : {
        position:'absolute',
        left:10,
        
    }
})