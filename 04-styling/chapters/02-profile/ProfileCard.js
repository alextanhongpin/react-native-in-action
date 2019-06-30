import React from 'react'
import PropTypes from 'prop-types'

import { TouchableHighlight, Platform, Text, Image, View, StyleSheet } from 'react-native'

export const data = [
  {
    image: require('./user.jpeg'),
    name: 'John Doe',
    occupation: 'React Native Developer',
    description: 'John is a really great JavaScript developer. He loves using JS to build React Native applications for iOS and Android.',
    showThumbnail: false
  }
]

export default function ProfileCard ({ onPress, name, occupation, description, image, showThumbnail }) {
  return (
    <TouchableHighlight onPress={onPress}>
      <View style={[styles.cardContainer, showThumbnail && styles.cardThumbnail]}>
        <View style={styles.cardImageContainer}>
          <Image
            style={styles.cardImage}
            source={image} />
        </View>
        <View>
          <Text style={styles.cardName}>{name}</Text>
        </View>
        <View styles={styles.cardOccupationContainer}>
          <Text style={styles.cardOccupation}>
            {occupation}
          </Text>
        </View>
        <View>
          <Text style={styles.cardDescription}>
            {description}
          </Text>
        </View>
      </View>
    </TouchableHighlight>
  )
}

ProfileCard.propTypes = {
  image: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  occupation: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  showThumbnail: PropTypes.bool.isRequired,
  onPress: PropTypes.func.isRequired
}

const styles = StyleSheet.create({
  cardContainer: {
    height: 400,
    width: 300,
    alignItems: 'center',
    backgroundColor: 'dodgerblue',
    borderColor: 'black',
    borderWidth: 3,
    borderStyle: 'solid',
    borderRadius: 20,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: {
          height: 10
        },
        shadowOpacity: 1
      },
      android: {
        elevation: 15
      }
    })
  },
  cardImageContainer: {
    alignItems: 'center',
    backgroundColor: 'white',
    borderWidth: 3,
    borderColor: 'black',
    width: 120,
    height: 120,
    borderRadius: 60,
    marginTop: 30,
    paddingTop: 15,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: {
          height: 10
        },
        shadowOpacity: 1
      },
      android: {
        borderWidth: 1,
        borderColor: 'black',
        elevation: 15
      }
    })
  },
  cardImage: {
    height: 80,
    width: 80
  },
  cardName: {
    color: 'white',
    marginTop: 30,
    fontWeight: 'bold',
    fontSize: 24,
    textShadowColor: 'black',
    textShadowOffset: {
      width: 2,
      height: 2
    },
    textShadowRadius: 3
  },
  cardOccupationContainer: {
    borderColor: 'black',
    borderBottomWidth: 3
  },
  cardOccupation: {
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 10
  },
  cardDescription: {
    marginTop: 10,
    marginRight: 40,
    marginLeft: 40,
    marginBottom: 10,
    fontStyle: 'italic'
  },
  cardThumbnail: {
    transform: [{ scale: 0.2 }]
  }
})
