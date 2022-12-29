import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { addBlog, addProduct } from '../../redux/actionCreator/blogActions';
import addBlogData from '../../redux/thunk/blogs/addBlogData';

const AddBlog = () => {
    const dispatch = useDispatch();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        dispatch(addBlogData(data))
    };
    const state = useSelector((state) => state.blogs);
    console.log(state);
    return (
        <div>
            <h2>H</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                {/* TITLE */}
                <div className='mt-5'>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Title</span>
                        </label>
                        <input  {...register("title")} type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                    </div>
                </div>
                {/* DESCRIPTION */}
                <div className='mt-5'>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Description</span>
                        </label>
                        <input  {...register("description")} type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                    </div>
                </div>
                {/* Category */}
                <div className='mt-5'>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Category</span>
                        </label>
                        <input  {...register("category")} type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                    </div>
                </div>
                {/* Tags */}
                <div className='mt-5'>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Tags</span>
                        </label>
                        <input  {...register("tags")} type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                    </div>
                </div>
                {/* Image URL */}
                <div className='mt-5'>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Image URL</span>
                        </label>
                        <input  {...register("image")} type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                    </div>
                </div>
                <div className='mt-5'>
                    <input type="submit" value="Add Blog" className="bg-blue-600 border text-white w-full max-w-xs" />
                </div>
            </form>
        </div>
    );
};

export default AddBlog;