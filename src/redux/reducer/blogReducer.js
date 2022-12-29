import { ADD_BLOG, DELETE_BLOG, FETCH_BLOGS, SELECT_FIRST_UPLOAD, SELECT_LAST_UPLOAD, UPDATE_BLOG } from "../actionTypes/blogs"
export const initialState = {
    blogs: [],
    filter: []
}
export const blogReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_BLOGS:
            return {
                ...state,
                blogs: action.payload
            };
        case SELECT_FIRST_UPLOAD:
            return {
                ...state,
                filter: action.payload
            };
        case SELECT_LAST_UPLOAD:
            return {
                ...state,
                filter: action.payload
            };
        case ADD_BLOG:
            return {
                ...state,
                blogs: [...state.blogs, action.payload]
            };
        case DELETE_BLOG:
            return {
                ...state,
                blogs: state.blogs.filter(product => product._id !== action.payload)
            };
        case UPDATE_BLOG:
            const updateBlogId = state.blogs.filter(product => product._id === action.payload.id);
            const updateBlog = state.blogs.filter(product => product._id !== action.payload.id);
            return {
                ...state,
                blogs: [...updateBlog, action.payload.data]
            }
        default:
            return state
    }
}