import { fetchBlogs } from "../../actionCreator/blogActions";

const loadBlog = () => {
    return async (dispatch, getState) => {
        const res = await fetch('http://localhost:5000/blogs');
        const data = await res.json();
        dispatch(fetchBlogs(data))
    }
}

export default loadBlog;