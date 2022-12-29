import Home from "../pages/Main/Home";
import Post from "../pages/Main/Post";

export const routes = [
    { path: '/', name: "Home", Component: Home },
    { path: '/posts', name: "Post", Component: Post }
]