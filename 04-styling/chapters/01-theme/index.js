import React, { useState } from 'react'
import { View, Button, StyleSheet } from 'react-native'

import getStyleSheet from './styles'

export default function App () {
  const [darkTheme, toggleTheme] = useState(false)
  const styles = getStyleSheet(darkTheme)
  const backgroundColor = StyleSheet.flatten(styles.container).backgroundColor
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Button title={backgroundColor} onPress={() => toggleTheme(!darkTheme)} />
      </View>
    </View>
  )
}
