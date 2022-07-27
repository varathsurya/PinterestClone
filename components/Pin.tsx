import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import React, { useEffect, useState } from 'react'
import { AntDesign } from '@expo/vector-icons'; 


const Pin = (props: any) => {

    const { image,title } = props.pin
    const [ratio, setRatio] = useState(1)
  
    useEffect(() => {
      if (image) {
        Image.getSize(image, (width, height) => setRatio(width/height))
      }
    }, [image])

    const onLike = () => {    }
    
    return (
      <View style={styles.pin}>  
        <View>
            <Image 
              source={{uri:image}}
              style={[styles.image,{aspectRatio:ratio}]}
            />
            <Pressable onPress={onLike} style={styles.HeartBtn}>
                <AntDesign name="hearto" size={24} color="black" />
            </Pressable>
        </View>
        <Text style={styles.title} numberOfLines={2}>{title}</Text>
      </View>
    )
}

export default Pin

const styles = StyleSheet.create({
    title: {
        fontSize: 16,
        lineHeight:24,
        fontWeight: '600',
        margin:5,
        color:'#282828'
      },
      image: {
        width:"100%",
        borderRadius:25,
      },
      pin:{
        width:"100%",
        padding:4
      },
      HeartBtn:{
        backgroundColor:'#D3CFC4',
        position:'absolute',
        bottom:10,
        right:10,
        padding:5,
        borderRadius:44
      }
})