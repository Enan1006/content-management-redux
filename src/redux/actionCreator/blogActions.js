import { ADD_BLOG, DELETE_BLOG, FETCH_BLOGS, SELECT_FIRST_UPLOAD, SELECT_LAST_UPLOAD } from "../actionTypes/blogs"

export const fetchBlogs = (data) => {
    return {
        type: FETCH_BLOGS,
        payload: data
    }
}

export const sortByFirstUplaod = (data) => {
    return {
        type: SELECT_FIRST_UPLOAD,
        payload: data
    }
}
export const sortByLastUplaod = (data) => {
    return {
        type: SELECT_LAST_UPLOAD,
        payload: data
    }
}
export const addBlog = (data) => {
    return {
        type: ADD_BLOG,
        payload: data
    }
}

export const deleteBlog = (id) => {
    return {
        type: DELETE_BLOG,
        payload: id
    }
}
export const updateBlog = (id, data) => {
    return {
        type: DELETE_BLOG,
        payload: { id: id, data: data }
    }
}