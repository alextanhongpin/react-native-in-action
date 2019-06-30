import React from 'react'

import ProfileCard, { data } from './ProfileCard'
import { StyleSheet, View } from 'react-native'

export default function App () {
  return (
    <View style={styles.container}>
      <ProfileCard {...data[0]} onPress={() => console.log} />
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
