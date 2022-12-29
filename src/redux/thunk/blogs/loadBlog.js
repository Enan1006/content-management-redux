import { fetchBlogs } from "../../actionCreator/blogActions";

const loadBlog = () => {
    return async (dispatch, getState) => {
        const res = await fetch('https://content-management-redux-server.onrender.com/blogs');
        const data = await res.json();
        dispatch(fetchBlogs(data))
    }
}

export default loadBlog;