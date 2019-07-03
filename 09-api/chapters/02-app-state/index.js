import React, { useEffect } from 'react'

import {
  AppState,
  View,
  Text
} from 'react-native'

export default function App() {
  const handleAppStateChange = (state) => 
    console.log(state)

  useEffect(() => {
    AppState.addEventListener('change', handleAppStateChange)
  }, [])

  return (
    <View>
    <Text>Testing App State</Text>
    </View>
  )
}
