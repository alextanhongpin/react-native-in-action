import React, { useState } from 'react'
import {
  Text,
  View,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  TextInput
} from 'react-native'

import { useSelector, useDispatch } from 'react-redux'
import { addBook, removeBook } from './reducer/action'

const initialState = {
  name: '',
  author: ''
}

export default function Books () {
  const dispatch = useDispatch()
  const [state, setState] = useState(initialState)
  const handleAddBook = () => {
    dispatch(addBook(state))
    setState(initialState)
  }

  const handleRemoveBook = (book) => {
    dispatch(removeBook(book))
  }

  const handleTextChange = (key, value) =>
    setState(state => ({
      ...state,
      [key]: value
    }))

  const { books = [] } = useSelector(state => state.book)

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Books</Text>
      <ScrollView
        keyboardShouldPersistTaps='always'
        style={styles.booksContainer}>

        {
          books.map((book, index) =>
            <View style={styles.book} key={index}>
              <Text style={styles.name}>{book.name}</Text>
              <Text style={styles.author}>{book.author}</Text>
              <Text onPress={() => handleRemoveBook(book)}>Remove</Text>
            </View>)
        }

      </ScrollView>
      <View style={styles.inputContainer}>
        <View style={styles.inputWrapper}>
          <TextInput
            value={state.name}
            onChangeText={value => handleTextChange('name', value)}
            style={styles.input}
            placeholder='Book name'
          />

          <TextInput
            value={state.author}
            onChangeText={value => handleTextChange('author', value)}
            style={styles.input}
            placeholder='Author Name'
          />

        </View>
        <TouchableOpacity
          onPress={handleAddBook}
        >
          <View style={styles.addButtonContainer}>
            <Text style={styles.addButton}>+</Text>
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
  booksContainer: {
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    flex: 1
  },
  title: {
    padding: 30,
    paddingBottom: 20,
    fontSize: 20,
    textAlign: 'center'
  },
  book: {
    padding: 20
  },
  name: {
    fontSize: 10
  },
  author: {
    fontSize: 14,
    color: '#999'
  },
  inputContainer: {
    padding: 10,
    backgroundColor: '#ffffff',
    borderTopColor: '#ededed',
    borderTopWidth: 1,
    flexDirection: 'row',
    height: 100
  },
  inputWrapper: {
    flex: 1
  },
  input: {
    height: 44,
    padding: 7,
    backgroundColor: '#ededed',
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 10,
    flex: 1,
    marginBottom: 5
  },
  addButton: {
    fontSize: 28,
    lineHeight: 28
  },
  addButtonContainer: {
    width: 80,
    height: 80,
    backgroundColor: '#ededed',
    marginLeft: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20
  }
})
