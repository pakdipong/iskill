import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Courses from "./pages/Courses";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";



export default function App() {
  return (
    <>
      <div className="flex flex-col min-h-svh">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses/:id" element={<Courses />} />
        </Routes>
        <Footer />
      </div>
    </>
  )
}