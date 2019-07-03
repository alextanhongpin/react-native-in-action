import React, { useState } from 'react'

import {
  StyleSheet,
  View,
  Animated,
  Button,
  TextInput,
} from 'react-native'

export default function App () {
  const [refInput, setRefInput] = useState(null)
  const animatedWidth = new Animated.Value(200)
  const animate = (value) =>
    Animated.timing(
      animatedWidth,
      {
        toValue: value,
        duration: 750
      }
    ).start()

  return (
    <View style={styles.container}>
      <Animated.View style={{ width: animatedWidth }}>
        <TextInput style={styles.input}
          onBlur={() => animate(200)}
          onFocus={() => animate(325)}
          ref={input => setRefInput(input)}
        />
      </Animated.View>
      <Button title='Submit'
        onPress={() => refInput.blur()} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    paddingTop: 50
  },
  input: {
    height: 50,
    marginHorizontal: 15,
    backgroundColor: '#ededed',
    marginTop: 10,
    paddingHorizontal: 9
  }
})
