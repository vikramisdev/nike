import Navbar from "./components/Navbar";
import "./App.css";
import HeroSection from "./components/HeroSection";
import GridCategory from "./components/GridCategory";
import NewThisWeek from "./components/NewThisWeek";
import Footer from "./components/Footer";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import MobileNavbar from "./components/MobileNavbar";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path=""
          element={
            <div>
              <Navbar />
              <MobileNavbar />
              <HeroSection />
              <GridCategory />
              <NewThisWeek />
              <Footer />
            </div>
          }
        />
        <Route path="/favorite" element={<h1>Hello from favourite</h1>} />
        <Route path="/cart" element={<h1>Hello from cart</h1>} />
        <Route path="*" element={
          setTimeout(() => {
            return <h1>No Location Found</h1>
          }, 0)

        } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
