import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import deleteBlogData from '../../redux/thunk/blogs/deleteBlogData';
import updateBlogData from '../../redux/thunk/blogs/updateBlogData';

const AllBlogs = ({ blog }) => {
    const dispatch = useDispatch();
    const state = useSelector((state) => state.blogs);
    console.log(state);
    return (
        <div>
            <h2>Hello</h2>

            <div class="overflow-x-auto relative shadow-md sm:rounded-lg">
                <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" class="py-3 px-6">
                                Image
                            </th>
                            <th scope="col" class="py-3 px-6">
                                Title
                            </th>
                            <th scope="col" class="py-3 px-6">
                                View
                            </th>
                            <th scope="col" class="py-3 px-6">
                                Edit
                            </th>
                            <th scope="col" class="py-3 px-6">
                                Delete
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            state.map(blog => <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                                <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    <div className="avatar">
                                        <div className="w-12 rounded-xl">
                                            <img src={blog.image ? blog.image : `/docs/images/examples/image-1@2x.jpg`} alt="" srcset="" />
                                        </div>
                                    </div>
                                </th>
                                <td class="py-4 px-6">
                                    {blog.title}
                                </td>
                                <td class="py-4 px-6">
                                    View
                                </td>
                                <td class="py-4 px-6">
                                    <button class="font-medium text-blue-600 dark:text-blue-500 hover:underline" onClick={() => dispatch(updateBlogData({ id: blog._id, data: blog }))}>Update</button>
                                </td>
                                <td class="py-4 px-6">
                                    <button class="font-medium text-blue-600 dark:text-blue-500 hover:underline" onClick={() => dispatch(deleteBlogData(blog._id))}>Delete</button>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default AllBlogs;