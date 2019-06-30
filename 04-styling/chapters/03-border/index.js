import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function App () {
  return (
    <View style={styles.container}>
      <Example
        style={{ borderWidth: 1 }}
      >
        <Text>borderWidth: 1</Text>
      </Example>

      <Example
        style={{ borderWidth: 3, borderLeftWidth: 0 }}>
        <Text>borderWidth: 3, borderLeftWidth: 0</Text>
      </Example>

      <Example
        style={{ borderWidth: 3, borderColor: 'red' }}>
        <Text>borderWidth: 3, borderColor: 'red'</Text>
      </Example>

      <Example
        style={{ borderWidth: 1, borderStyle: 'dashed' }}>
        <Text>borderWidth: 1, borderStyle: 'dashed'</Text>
      </Example>
    </View>
  )
}

const Example = (props) => (
  <View style={[styles.example, props.style]}>
    {props.children}
  </View>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  example: {
    marginBottom: 50
  }
})
