import Header from "./components/Header";
import Hero from "./components/Hero";
import Menu from "./components/Menu";
import Gallery from "./components/Gallery";
import About from "./components/About";
import Location from "./components/Location";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="w-full min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        <Hero />
        <Menu />
        <Gallery />
        <About />
        <Location />
      </main>

      <Footer />
    </div>
  );
}
