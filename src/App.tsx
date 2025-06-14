import "./App.css";
import { Route, Routes } from "react-router";
import Home from "./pages";
import Blog from "./pages/blog/blog";
import Post from "./pages/blog/post";

function App() {
  return (
    <Routes>
      <Route index path="/" element={<Home />} />
      <Route path="blog">
        <Route index element={<Blog />} />
        <Route path=":id" element={<Post />} />
      </Route>
    </Routes>
  );
}

export default App;
