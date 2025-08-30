import React from "react";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";


const App = () => {
  return (
    <div className="text-zinc-100 bg-zinc-950">
      <Navbar />
        <main className="min-h-screen">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </main>
      <Footer />
    </div>
  )
};

export default App;
