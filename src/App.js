import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import { routes } from "./components/routes";
import AddBlog from "./pages/Dashboard/AddBlog";
import AllBlogs from "./pages/Dashboard/AllBlogs";
import Dashboard from "./pages/Dashboard/Dashboard";


function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        {
          routes.map(({ path, Component }, index) => <Route key={index} path={path} element={<Component />}></Route>)
        }
        <Route path="/dashboard" element={<Dashboard />}>
          <Route index element={<AllBlogs />}></Route>
          <Route path="/dashboard/add-blog" element={<AddBlog />}></Route>
          {/* <Route path="add-blog" element={<AddBlog />}</Route> */}
        </Route>
      </Routes>
    </div >
  );
}

export default App;
