import React, { useEffect } from 'react'

import {
  StyleSheet,
  View,
  Animated
} from 'react-native'

export default function App () {
  const createAnimation = (value) =>
    Animated.timing(value, { toValue: 290, duration: 500 })

  const animate = () =>
    Animated.sequence([
      createAnimation(animatedValue1),
      createAnimation(animatedValue2),
      createAnimation(animatedValue3)
    ]).start()

  const animatedValue1 = new Animated.Value(-30)
  const animatedValue2 = new Animated.Value(-30)
  const animatedValue3 = new Animated.Value(-30)

  useEffect(() => {
    animate()
  }, [])

  return (
    <View style={styles.container}>
      <Animated.Text style={[styles.text, { marginTop: animatedValue1 }]}>
        1
      </Animated.Text>

      <Animated.Text style={[styles.text, { marginTop: animatedValue2 }]}>
        2
      </Animated.Text>

      <Animated.Text style={[styles.text, { marginTop: animatedValue3 }]}>
        3
      </Animated.Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row'
  },
  text: {
    marginHorizontal: 20,
    fontSize: 26
  }
})
