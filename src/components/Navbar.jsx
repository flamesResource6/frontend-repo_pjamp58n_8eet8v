import { useState, useEffect } from 'react'
import { Menu, X, Bear, ShoppingCart } from 'lucide-react'

const navItems = [
  { label: 'Accueil', href: '#hero' },
  { label: 'Description', href: '#description' },
  { label: 'Caractéristiques', href: '#features' },
  { label: 'Galerie', href: '#gallery' },
  { label: 'Avis', href: '#testimonials' },
  { label: 'Prix', href: '#pricing' },
  { label: 'À propos', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all ${scrolled ? 'backdrop-blur-md bg-white/70 shadow-sm' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#hero" className="flex items-center gap-2">
            <div className="p-2 rounded-xl bg-pink-100 text-pink-600 shadow-inner">
              <Bear className="w-5 h-5" />
            </div>
            <span className="font-semibold tracking-tight text-slate-800">Teddy Bear 55PB</span>
          </a>

          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="text-slate-600 hover:text-pink-600 transition-colors text-sm">
                {item.label}
              </a>
            ))}
            <a href="#pricing" className="inline-flex items-center gap-2 bg-pink-600 text-white px-4 py-2 rounded-lg shadow hover:bg-pink-500 transition-colors">
              <ShoppingCart className="w-4 h-4" /> Acheter
            </a>
          </nav>

          <button onClick={() => setOpen(!open)} className="md:hidden p-2 rounded-lg hover:bg-slate-100">
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-slate-200 bg-white">
          <div className="px-4 py-3 grid gap-2">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="block px-2 py-2 rounded-lg text-slate-700 hover:bg-pink-50">
                {item.label}
              </a>
            ))}
            <a href="#pricing" onClick={() => setOpen(false)} className="inline-flex items-center justify-center gap-2 bg-pink-600 text-white px-4 py-2 rounded-lg shadow hover:bg-pink-500">
              <ShoppingCart className="w-4 h-4" /> Acheter
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
