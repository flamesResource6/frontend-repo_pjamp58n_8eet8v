export default function Gallery() {
  const images = [
    'https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1400&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1617038260897-5a5f90e3c483?q=80&w=1400&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?q=80&w=1400&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1626776877853-ef56b7bfd83c?q=80&w=1400&auto=format&fit=crop',
  ]

  return (
    <section id="gallery" className="py-20 bg-gradient-to-b from-rose-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight text-center">Galerie</h2>
        <p className="mt-3 text-slate-600 text-center max-w-2xl mx-auto">Découvrez Teddy Bear 55PB sous tous ses angles et appréciez les détails de sa fabrication.</p>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {images.map((src, i) => (
            <div key={i} className="group relative overflow-hidden rounded-2xl border border-rose-100 shadow-sm">
              <img src={src} alt={`Teddy Bear 55PB ${i+1}`} className="w-full h-60 object-cover transition-transform duration-500 group-hover:scale-105" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
