import Home from "./pages/Home";

import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import StoreAnime from "./pages/StoreAnime";
import ViewAnime from "./pages/ViewAnime";
import NotFound from "./pages/NotFound";
import WishlistPage from "./pages/WishlistPage";
import UpdateAnime from "./pages/UpdateAnime";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <br></br>
        <br></br>
        <br></br>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/store" element={<StoreAnime />}></Route>
          <Route path="/wishlist" element={<WishlistPage />}></Route>

          <Route path="/view" element={<ViewAnime />}></Route>
          <Route path="/update/:id" element={<UpdateAnime />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
