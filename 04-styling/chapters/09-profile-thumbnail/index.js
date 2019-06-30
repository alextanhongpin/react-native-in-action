import React, { useState } from 'react'
import { View, StyleSheet } from 'react-native'
import ProfileCard, { data } from '../02-profile/ProfileCard'

export default function App () {
  const [users, setUsers] = useState(data)

  const handleProfileCardPress = (index) => {
    setUsers((users) => {
      return users.map((user, i) => {
        if (i === index) {
          user.showThumbnail = !user.showThumbnail
        }
        return user
      })
    })
  }
  return (
    <View style={styles.container}>
      {users.map((user, index) =>
        <ProfileCard key={index} onPress={() => handleProfileCardPress(index)} {...user} />
      )}
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
