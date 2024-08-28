import React, { useState, useEffect } from 'react';
import About from "./components/about";
import Footer from "./components/footer";
import Header from "./components/header";
import Scrollbar from "./components/scrollbar";
import Slider from "./components/slider";
import Loader from './Loader';
import Message from './components/Message';
import Masstime from './components/Masstime';

function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <Header />
      <Slider />
      <Scrollbar />
      <About />
      <br/>
      <Message />
      <br/>
      <Masstime />
      <br/>
      <Footer />
    </>
  );
}

export default Home;
