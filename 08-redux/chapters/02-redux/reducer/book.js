import { ADD_BOOK, REMOVE_BOOK } from './action'

const initialState = {
  books: []
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return {
        books: [
          ...state.books,
          action.book
        ]
      }
    case REMOVE_BOOK:
      return {
        books: state.books.filter(book => book.id !== action.book.id)
      }
    default:
      return state
  }
}

export default reducer
