import { deleteBlog } from "../../actionCreator/blogActions";

const deleteBlogData = (id) => {
    return async (dispatch, getState) => {
        const res = await fetch(`http://localhost:5000/blogs/${id}`, {
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