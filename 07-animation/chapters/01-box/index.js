import React from 'react'
import { StyleSheet, View, Animated, Button } from 'react-native'

export default function App () {
  const marginTop = new Animated.Value(20)

  const animate = () =>
    Animated.timing(marginTop, {
      toValue: 200,
      duration: 500
    }).start()

  return (
    <View style={styles.container}>
      <Button
        title='Animate Box'
        onPress={animate}
      />
      <Animated.View style={[styles.box, { marginTop }]} >
      </Animated.View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    paddingTop: 50
  },
  box: {
    marginTop: 0,
    width: 150,
    height: 150,
    backgroundColor: 'red'
  }
})
