import React, { useEffect, useState } from 'react'

import {
  TouchableHighlight,
  View,
  AsyncStorage,
  Text,
  StyleSheet
} from 'react-native'

const key = 'offline'

export default function App () {
  const [person, setPerson] = useState(null)

  const savePerson = async (person) => {
    try {
      await AsyncStorage.setItem(key, JSON.stringify(person))
    } catch (error) {
      console.log(error)
    }
  }

  const getPerson = async () => {
    try {
      const person = await AsyncStorage.getItem(key)
      if (person) {
        setPerson(JSON.parse(person))
      }
    } catch (error) {
      console.log(error)
      return null
    }
  }

  useEffect(() => {
    const person = {
      id: 1,
      name: 'John Doe'
    }
    savePerson(person)
  }, [])

  return (
    <View style={styles.container}>

      <TouchableHighlight>
        <Text onPress={() => getPerson()}>Get Person</Text>
      </TouchableHighlight>
      <Text>Person: {person && person.name}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
