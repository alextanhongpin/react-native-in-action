import React, { useState, useEffect } from 'react'
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity
} from 'react-native'

import uuidv4 from 'uuid/v4'

import { colors } from '../theme'

export default function AddCity ({ screenProps, navigation }) {
  const [state, setState] = useState({ city: '', country: '' })

  const onChangeText = (key, value) => {
    setState(state => {
      return {
        ...state,
        [key]: value
      }
    })
  }

  useEffect(() => {
    if (state.city === '' && state.country === '') {
      navigation.navigate('Cities')
    }
  }, [state])

  const submit = () => {
    if (state.city === '' || state.country === '') {
      alert('Please complete form')
    }

    const city = {
      ...state,
      id: uuidv4(),
      locations: []
    }
    screenProps.addCity(city)

    setState({
      city: '',
      country: ''
    })
  }

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Cities</Text>
      <TextInput
        placeholder='City name'
        onChangeText={val => onChangeText('city', val)}
        style={styles.input}
        value={state.city}
      />

      <TextInput
        placeholder='Country name'
        onChangeText={val => onChangeText('country', val)}
        style={styles.input}
        value={state.country}
      />

      <TouchableOpacity onPress={submit}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Add City</Text>
        </View>
      </TouchableOpacity>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    flex: 1,
    justifyContent: 'center'
  },
  button: {
    height: 50,
    backgroundColor: '#666',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10
  },
  buttonText: {
    color: 'white',
    fontSize: 18
  },
  heading: {
    color: 'white',
    fontSize: 40,
    marginBottom: 10,
    alignSelf: 'center'
  },
  input: {
    margin: 10,
    backgroundColor: 'white',
    paddingHorizontal: 8,
    height: 50
  }
})
