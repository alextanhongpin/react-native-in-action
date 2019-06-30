import React from 'react'
import { Platform, StyleSheet, View, Text } from 'react-native'

export default function App () {
  return (
    <View style={styles.container}>
      <TextContainer>
        <LeftText>Text A</LeftText>
      </TextContainer>

      <TextContainer>
        <LeftText style={{ lineHeight: 100 }}>Text B</LeftText>
      </TextContainer>

      <TextContainer>
        <LeftText>Text C</LeftText>
      </TextContainer>

      <TextContainer>
        <LeftText>{Platform.OS}</LeftText>
      </TextContainer>
    </View>
  )
}

const LeftText = (props) => (
  <Text style={[styles.leftText, props.style]}>
    {props.children}
  </Text>
)

const TextContainer = (props) => (
  <View style={[styles.textContainer, props.style]}>
    {props.children}
  </View>
)

const styles = StyleSheet.create({
  container: {
    width: 300,
    height: 400,
    margin: 40,
    marginTop: 100
  },
  textContainer: {
    borderWidth: 1
  },
  leftText: {
    fontSize: 20
  }
})
