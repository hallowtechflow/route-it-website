import { BrowserRouter, Route, Routes } from "react-router-dom";
import SiteLayout from "./layout/SiteLayout";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Features from "./pages/Features";
import Home from "./pages/Home";
import Pricing from "./pages/Pricing";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<SiteLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/features" element={<Features />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;