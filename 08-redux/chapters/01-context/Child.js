import React from 'react'
import {
  View,
  StyleSheet,
  Text
} from 'react-native'
import ThemeContext from './context'

export default function Child () {
  return (
    <ThemeContext.Consumer>
      {
        context => <View style={[styles.container, context.themeValue === 'dark' && { backgroundColor: 'black' }]}>

          <Text style={styles.text}>Hello from component</Text>
          <Text style={styles.text}
            onPress={context.toggleThemeValue}>
        Toggle Theme Value
          </Text>
        </View>
      }

    </ThemeContext.Consumer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5fcff'
  },
  text: {
    fontSize: 22,
    color: '#666'
  }
})
