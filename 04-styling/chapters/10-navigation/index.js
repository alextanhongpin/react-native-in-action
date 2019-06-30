import React, { useState, useEffect } from 'react'
import { AsyncStorage } from 'react-native'
import Tabs from './navigation'

const key = 'state'

export default function App () {
  const [cities, setCity] = useState([])

  const loadCities = async () => {
    try {
      const cities = await AsyncStorage.getItem(key)
      setCity(JSON.parse(cities))
    } catch (e) {
      console.log(e)
    }
  }

  useEffect(() => {
    loadCities()
  }, [])

  const addCity = (city) => {
    setCity(cities => {
      const newcities = cities.concat(city)
      AsyncStorage.setItem(key, JSON.stringify(newcities))
      return newcities
    })
  }

  const addLocation = (location, city) => {
    setCity(cities => {
      const newCities = cities.map(_city => {
        if (_city.id === city.id) {
          _city.locations.push(location)
        }
        return _city
      })
      AsyncStorage.setItem(key, JSON.stringify(newCities))
      return newCities
    })
  }

  return (
    <Tabs screenProps={{
      cities,
      addCity,
      addLocation
    }} />
  )
}
