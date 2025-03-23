import { BrowserRouter, Routes, Route } from "react-router-dom";
import PaginationContainer from "./components/pagination/PaginationContainer";
import NavbarContainer from "./components/navbar/NavbarContainer";
import Search from "./components/search/Search";
import Comments from "./components/comments/Comments";

function App() {
  return (
    <BrowserRouter>
      <NavbarContainer />
      <Routes>
        <Route path="/pagination" element={<PaginationContainer />} />
        <Route path="/search" element={<Search />} />
        <Route path="/comments" element={<Comments />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
