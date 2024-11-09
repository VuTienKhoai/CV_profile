import "./App.css";
import { Route, Routes } from "react-router-dom";
import PageHome from "./page/home";
import PageBlog from "./page/blog/PageBlog";
import PageAbout from "./page/about";
import PageServices from "./page/services/PageServices";
import PagePortfolio from "./page/portfolio";
import PageContact from "./page/contact/PageContact";
// Tạo project
// Add thư viện
// Tạo cây thư mục
// - components: lưu các cái thành phần dùng chung trong trang web

//Đẩy git
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<PageHome />} />
        <Route path="/PageBlog" element={<PageBlog />} />
        <Route path="/PageAbout" element={<PageAbout />} />
        <Route path="/PageServices" element={<PageServices />} />
        <Route path="/PagePortfolio" element={<PagePortfolio />} />
        <Route path="/PageContact" element={<PageContact />} />
      </Routes>
    </div>
  );
}

export default App;
