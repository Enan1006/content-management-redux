import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import BlogCard from '../../components/BlogCard';
import { sortByFirstUplaod, sortByLastUplaod } from '../../redux/actionCreator/blogActions';
import loadBlog from '../../redux/thunk/blogs/loadBlog';
import './Home.css';

const Home = () => {
    const dispatch = useDispatch();
    const blogs = useSelector((state) => state.blogs);
    console.log(blogs);
    useEffect(() => {
        dispatch(loadBlog())
    }, [dispatch]);
    const filter = useSelector((state) => state.filter);
    console.log(filter);
    let content;
    if (filter === "first") {
        content = blogs.map(blog => <BlogCard key={blog._id} blog={blog}></BlogCard>)
    }
    if (filter === "last") {
        content = [...blogs].reverse().map(blog => <BlogCard key={blog._id} blog={blog}></BlogCard>)
    };
    const activeClass = `text-white bg-blue-700 rounded-lg hover:bg-blue-800`;
    return (
        <div className='mx-10'>


            <button type="button" className={`inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-blue-700 bg-white rounded-lg border border-blue-700 ${filter.includes('first') ? activeClass : null}`}
                onClick={() => dispatch(sortByFirstUplaod("first"))}>Sort by First upload</button>
            <button type="button" className={`inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-blue-700 bg-white rounded-lg border border-blue-700 ${filter.includes('last') ? activeClass : null}`}
                onClick={() => dispatch(sortByLastUplaod("last"))}>Sort by Last upload</button>

            <div className='flex flex-wrap gap-5 '>
                {content}
            </div>
        </div>
    );
};

export default Home;