import { useEffect, useState } from "react";
import Loader from "../components/Loader";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Industries from "../components/Industries";
import About from "../components/About";
import Leadership from "../components/Leadership";
import Process from "../components/Process";
import Testimonials from "../components/Testimonials";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const Home = () => {
  const [loading, setLoading] = useState(true);

  const finishLoading = () => setLoading(false);

  useEffect(() => {
    if (!loading) return;
    // Safety net: never trap the user behind the loader if media stalls.
    const fallback = setTimeout(finishLoading, 6000);
    return () => clearTimeout(fallback);
  }, [loading]);

  useEffect(() => {
    document.body.style.overflow = loading ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [loading]);

  return (
    <>
      <Loader visible={loading} />
      <Navbar />
      <Hero onMediaReady={finishLoading} />
      <Services />
      <Industries />
      <About />
      <Leadership />
      <Process />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;