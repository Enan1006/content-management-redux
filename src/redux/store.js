import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'
import { blogReducer } from './reducer/blogReducer'

const store = createStore(blogReducer, applyMiddleware(thunk))

export default store