import { StyleSheet, ScrollView } from 'react-native';

import { View } from '../components/Themed';
import Pin from '../components/Pin';
import { useState } from 'react';
import { useWindowDimensions } from 'react-native';

interface IMasonryList {
    pins: {
        id: string;
        image: string;
        title: string;
    }[];
}

const MasonryList = ({pins}: IMasonryList) => {

  const width = useWindowDimensions().width
  const numColumns =  Math.ceil(width /350); 

  return (
    <ScrollView contentContainerStyle={{width:"100%"}}>
      <View style={styles.container}>
        {Array.from(Array(numColumns)).map((_, colIndex) => (
          <View style={styles.column}>
          {pins
            .filter((_,index)=>index % numColumns === colIndex)
            .map((pin)=>(
              <Pin pin={pin} key={pin.id}/>
          ))}
        </View>
        ))}
      </View>
    </ScrollView>
  )
}

export default MasonryList

const styles = StyleSheet.create({
    container: {
        flexDirection:'row',
        padding:10
      },
      column: {
        flex:1
      }
})