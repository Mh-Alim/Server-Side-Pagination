import { BrowserRouter, Routes, Route } from "react-router-dom";
import PaginationContainer from "./components/pagination/PaginationContainer";
// import NavbarContainer from "./components/Navbar/NavbarContainer";

function App() {
  return (
    <>
      {/* <NavbarContainer /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/pagination" element={<PaginationContainer />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
