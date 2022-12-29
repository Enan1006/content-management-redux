import { updateBlog } from "../../actionCreator/blogActions";

const updateBlogData = (id, data) => {
    return async (dispatch, geState) => {
        const res = await fetch(`http://localhost:5000/blogs/${id}`, {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        const result = await res.json();
        if (result.acknowledged) {
            dispatch(updateBlog(data))
        }
    }
}

export default updateBlogData;