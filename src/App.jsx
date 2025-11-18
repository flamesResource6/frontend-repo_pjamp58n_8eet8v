import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Description from './components/Description'
import Features from './components/Features'
import Gallery from './components/Gallery'
import Testimonials from './components/Testimonials'
import Pricing from './components/Pricing'
import About from './components/About'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-800">
      <Navbar />
      <main>
        <Hero />
        <Description />
        <Features />
        <Gallery />
        <Testimonials />
        <Pricing />
        <About />
        <Contact />
      </main>
      <footer className="py-10 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} Teddy Bear 55PB — Tous droits réservés.
      </footer>
    </div>
  )
}

export default App
