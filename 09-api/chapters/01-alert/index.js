import React from 'react'
import {
  Text,
  View,
  Alert,
  StyleSheet
} from 'react-native'

export default function App () {
  const handleAlert = () =>
    Alert.alert('hi', 'hello world', [
      { text: 'Yes', onPress: () => {} },
      { text: 'No', onPress: () => {}, style: 'destructive' },
      { text: 'Maybe', onPress: () => {}, style: 'cancel' }
    ], { cancellable: true })

  return (
    <View style={styles.container}>
      <Text onPress={handleAlert}>Alert</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})
