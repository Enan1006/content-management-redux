import { deleteBlog } from "../../actionCreator/blogActions";

const deleteBlogData = (id) => {
    return async (dispatch, getState) => {
        const res = await fetch(`https://content-management-redux-server.onrender.com/blogs/${id}`, {
            method: "DELETE",
            headers: {
                'content-type': 'application/json'
            }
        });
        const data = await res.json();
        if (data.acknowledged) {
            dispatch(deleteBlog(id))
        }
    }
}

export default deleteBlogData;