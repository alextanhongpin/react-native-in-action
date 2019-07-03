import React, { useEffect } from 'react'

import {
  StyleSheet,
  View,
  Animated
} from 'react-native'

export default function App () {
  const animatedValue = []
  for (let i = 0; i < 1000; i += 1) {
    animatedValue.push(new Animated.Value(0))
  }
  const animations = animatedValue.map(value =>
    Animated.timing(value, { toValue: 1, duration: 6000 }))

  useEffect(() => {
    animate()
  }, [])

  const animate = () => Animated.stagger(15, animations).start()

  return (
    <View style={styles.container}>
      {
        animatedValue.map((value, index) =>
          <Animated.View key={index}
            style={[styles.box, { opacity: value }]} />
        )
      }
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  box: {
    width: 15,
    height: 15,
    margin: 0.5,
    backgroundColor: 'red'
  }
})
