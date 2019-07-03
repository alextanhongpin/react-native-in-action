import React, { useState, useEffect } from 'react'
import {
  Text,
  StyleSheet,
  Clipboard,
  TouchableHighlight,
  TextInput,
  View
} from 'react-native'

export default function App () {
  const [state, setState] = useState({ clipboardData: [] })

  useEffect(() => {
    Clipboard.setString('Hello world')
  }, [])

  const updateClipboard = (string) =>
    Clipboard.setString(string)

  const pushClipboardToArray = async () => {
    const { clipboardData } = state
    const content = await Clipboard.getString()
    clipboardData.push(content)
    setState({ clipboardData })
  }

  return (

    <View style={styles.container}>
      <Text style={{ textAlign: 'center' }}>Testing Clipboard</Text>
      <TextInput style={styles.input}
        onChangeText={value => updateClipboard(value)} />

      <TouchableHighlight
        onPress={pushClipboardToArray}
        style={styles.button}
      >
        <Text>Click to add to array</Text>
      </TouchableHighlight>

      {
        state.clipboardData.map((d, i) =>
          <Text key={i}>{d}</Text>)
      }

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    margin: 20
  },
  input: {
    padding: 20,
    marginTop: 15,
    height: 60,
    backgroundColor: '#dddddd'
  },
  button: {
    backgroundColor: '#ddd',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    marginTop: 15
  }
})
