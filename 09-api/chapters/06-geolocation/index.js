import React, { useState, useEffect } from 'react'
import {
  Text,
  View,
  StyleSheet
} from 'react-native'

const initialState = {
  originalCoords: {},
  updatedCoords: {}
}

export default function App () {
  const [state, setState] = useState(initialState)

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      success => setState(state => ({ ...state, originalCoords: success.coords })),
      err => console.log(err)
    )

    const id = navigator.geolocation.watchPosition(
      success => setState(state => ({ ...state, updatedCoords: success.coords })),
      err => console.log(err)
    )
    return function () {
      navigator.geolocation.clearWatch(id)
    }
  }, [])

  const { originalCoords, updatedCoords } = state
  return (
    <View style={styles.container}>
      <Text>{originalCoords.latitude}, {originalCoords.longitude}</Text>
      <Text>{updatedCoords.latitude}, {updatedCoords.longitude}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20
  },
  button: {
    height: 60,
    marginTop: 15,
    backgroundColor: '#ededed',
    justifyContent: 'center',
    alignItems: 'center'
  }
})
