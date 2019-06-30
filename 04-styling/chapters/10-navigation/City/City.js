import React, { useEffect, useState } from 'react'
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native'

import CenterMessage from '../CenterMessage'
import { colors } from '../theme'

export default function City ({ navigation, screenProps }) {
  const city = navigation.getParam('city', { city: '', locations: [] })

  useEffect(() => {
    navigation.setParams({
      title: city.city,
      headerTitleStyle: {
        color: 'white',
        fontSize: 20,
        fontWeight: '400'
      }
    })
  }, [])

  const [ state, setState ] = useState({ name: '', info: '' })
  const onChangeText = (key, value) => {
    return setState(state => {
      return {
        ...state,
        [key]: value
      }
    })
  }

  const addLocation = () => {
    const { name, info } = state
    if (name === '' || info === '') {
      return
    }

    const location = {
      ...state
    }

    screenProps.addLocation(location, city)
    setState({ name: '', info: '' })
  }

  return (
    <View style={{ flex: 1 }}>
      <ScrollView
        contentContainerStyle={[!city.locations.length && { flex: 1 }]}
      >

        <View style={[
          styles.locationsContainer,
          !city.locations.length && { flex: 1, justifyContent: 'center' }
        ]}>
          {
            !city.locations.length &&
            <CenterMessage message='No locations for this city!' />
          }
          {
            city.locations.map((location, index) => (
              <View key={index} style={styles.locationContainer}>
                <Text style={styles.locationName}>{location.name}</Text>
                <Text style={styles.locationInfo}>{location.info}</Text>
              </View>
            ))

          }

        </View>
      </ScrollView>
      <TextInput
        onChangeText={val => onChangeText('name', val)}
        placeholder='Location name'
        value={state.name}
        style={styles.input}
        placeholderTextColor='white' />
      <TextInput
        onChangeText={val => onChangeText('info', val)}
        placeholder='Location info'
        value={state.info}
        style={[styles.input, styles.input2]}
        placeholderTextColor='white'
      />
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={addLocation}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Add Location</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  locationsContainer: {
    paddingBottom: 104
  },
  input: {
    height: 50,
    backgroundColor: colors.primary,
    color: 'white',
    paddingHorizontal: 8,
    position: 'absolute',
    width: '100%',
    bottom: 104,
    left: 0
  },
  input2: {
    bottom: 52
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%'
  },
  button: {
    height: 50,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText: {
    color: 'white'
  },
  locationContainer: {
    padding: 10,
    borderBottomColor: colors.primary,
    borderBottomWidth: 2
  },
  locationName: {
    fontSize: 20,
    color: 'black'
  },
  locationInfo: {
    color: 'rgba(0, 0, 0, .5)'
  }
})
