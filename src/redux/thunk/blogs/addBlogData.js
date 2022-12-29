import { addBlog } from "../../actionCreator/blogActions";

const addBlogData = (data) => {
    return async (dispatch, getState) => {
        const res = await fetch('http://localhost:5000/blogs', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        const result = await res.json();
        if (result.acknowledged) {
            dispatch(addBlog({
                _id: result.insertedId,
                ...data
            }))
        }
    }
}

export default addBlogData;