import React, { Component } from 'react'
import { View, ScrollView, StyleSheet } from 'react-native'

import Heading from './components/Heading'
import TextInput from './components/TextInput'
import Button from './components/Button'
import TodoList from './components/TodoList'
import TabBar from './components/TabBar'

let todoIndex = 0

export default class App extends Component {
  constructor () {
    super()
    this.state = {
      inputValue: '',
      todos: [],
      type: 'All'
    }
  }
  inputChange (inputValue) {
    console.log('input value', inputValue)
    this.setState({ inputValue })
  }
  submitTodo = () => {
    // Checks if input is empty or contains only whitespace.
    if (this.state.inputValue.match(/^\s*$/)) {
      return
    }
    const todo = {
      title: this.state.inputValue,
      todoIndex,
      complete: false
    }

    todoIndex++
    const todos = [...this.state.todos, todo]
    this.setState({ todos, inputValue: '' }, () => {
      console.log('submitTodo: state', this.state)
    })
  }
  deleteTodo = (todoIndex) => {
    const {todos} = this.state
    this.setState({
      todos: todos.filter(todo => todo.todoIndex !== todoIndex)
    })
  }
  toggleComplete = (todoIndex) => {
    const { todos } = this.state
    this.setState({
      todos: todos.map(todo => {
        if (todo.todoIndex === todoIndex) {
          todo.complete = !todo.complete
        }
        return todo
      })
    })
  }
  setType = (type) => {
    this.setState({ type })
  }
  render () {
    const { inputValue, todos, type } = this.state
    return (
      <View style={styles.container}>
        <ScrollView
          keyboardShouldPersistTaps='always'
          style={styles.content}>
          <Heading />
          <TextInput
            inputValue={inputValue}
            inputChange={(text) => this.inputChange(text)} />
          <TodoList 
            type={type}
            todos={todos}
            toggleComplete={this.toggleComplete}
            deleteTodo={this.deleteTodo}
          ></TodoList>
          <Button submitTodo={this.submitTodo} />
        </ScrollView>
        <TabBar type={type} setType={this.setType}></TabBar>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5'
  },
  content: {
    flex: 1,
    paddingTop: 60
  }
})
