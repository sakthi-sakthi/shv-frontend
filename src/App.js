import Home from "./home";
import React from "react";
import { Routes, Route } from "react-router-dom";
import History from "./pages/history";
import Contact from "./pages/contact";
import NewsEvents from "./pages/NewsEvents";
import JubileePrayer from "./pages/JubileePrayer";
import News from "./pages/News";
import Donation from "./pages/Donation";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/history" element={<History />} />
        <Route path="/jubilee-prayer" element={<JubileePrayer />} />
        <Route path="/news" element={<News />} />
        <Route path="/donation" element={<Donation />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/news-events" element={<NewsEvents />} />
      </Routes>
    </>
  );
}

export default App;
