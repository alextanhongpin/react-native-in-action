import React from 'react'
import {
  View,
  Dimensions,
  StyleSheet,
  Text
} from 'react-native'

const { width, height } = Dimensions.get('window')

export default function App () {
  return (
    <View style={styles.container}>
      <Text>{width}</Text>
      <Text>{height}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
