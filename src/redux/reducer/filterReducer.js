import { SELECT_FIRST_UPLOAD, SELECT_LAST_UPLOAD } from "../actionTypes/blogs"

export const initialState = {
    blogs: []
}

export const filterReducer = (state = initialState, action) => {
    switch (action.type) {
        case SELECT_FIRST_UPLOAD:
            return {
                ...state,
                blogs: action.payload
            };
        case SELECT_LAST_UPLOAD:
            return {
                ...state,
                blogs: action.payload
            }
        default:
            return state
    }
}