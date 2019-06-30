import React, { useEffect } from 'react'
import { View, Text, StyleSheet, TouchableWithoutFeedback, ScrollView } from 'react-native'

import CenterMessage from '../CenterMessage'

import { colors } from '../theme'

export default function Cities ({ navigation, screenProps }) {
  useEffect(() => {
    navigation.setParams({
      title: 'Cities',
      headerTitleStyle: {
        color: 'white',
        fontSize: 20,
        fontWeight: 400
      }
    })
  }, [])

  const navigate = (item) => {
    navigation.navigate('City', { city: item })
  }

  const { cities } = screenProps
  return (
    <ScrollView contentContainerStyle={[!cities.length && { flex: 1 }]}>

      <View style={[!cities.length && { justifyContent: 'center', flex: 1 }]}>

        { !cities.length && <CenterMessage message='No saved cities!' /> }

        {

          cities.map((item, index) =>

            <TouchableWithoutFeedback
              onPress={() => navigate(item)}
              key={index}
            >
              <View style={styles.cityContainer}>
                <Text style={styles.city}>{item.city}</Text>
                <Text style={styles.country}>{item.country}</Text>
              </View>
            </TouchableWithoutFeedback>
          )
        }

      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  cityContainer: {
    padding: 10,
    borderBottomWidth: 2,
    borderBottomColor: colors.primary
  },
  city: {
    fontSize: 20
  },
  country: {
    color: 'rgba(0, 0, 0, 0.5)'
  }
})
