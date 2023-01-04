import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer.jsx";
import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col gap-5 bg-neutral-900 py-5 min-h-screen">
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/movie" element={<Home />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
