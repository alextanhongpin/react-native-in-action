import React, { useState } from 'react'
import {
  View,
  Text,
  StyleSheet
} from 'react-native'

import ThemeContext from './context'
import Child from './Child'

export default function Parent () {
  const [state, setState] = useState('light')
  const toggleThemeValue = () =>
    setState(state => state === 'dark'
      ? 'light'
      : 'dark')

  return (
    <ThemeContext.Provider
      value={{
        themeValue: state,
        toggleThemeValue: toggleThemeValue
      }}
    >
      <View style={styles.container}>
        <Text>Hello world</Text>
      </View>
      <Child />

    </ThemeContext.Provider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5fcff'
  }
})
