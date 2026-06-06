import "./App.css";

import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Categories from "./Components/Categories";
import Products from "./Components/Products";
import Testimonials from "./Components/Testimonials";
import Newsletter from "./Components/Newsletter";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Categories />
      <Products />
      <Testimonials />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;