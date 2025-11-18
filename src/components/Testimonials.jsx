import { Star } from 'lucide-react'

const testimonials = [
  {
    name: 'Camille R.',
    text: 'Qualité irréprochable ! Mon enfant l\'adore et ne le lâche plus. Tout doux et rassurant.',
    rating: 5
  },
  {
    name: 'Hugo M.',
    text: 'Parfait pour un cadeau de naissance. Les finitions sont superbes et la matière est très agréable.',
    rating: 5
  },
  {
    name: 'Sarah L.',
    text: 'Super rapport qualité-prix. Taille idéale et entretien facile, je recommande !',
    rating: 4
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight text-center">Avis et témoignages</h2>
        <p className="mt-3 text-slate-600 text-center max-w-2xl mx-auto">Des centaines de clients satisfaits partagent leur expérience avec Teddy Bear 55PB.</p>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div key={t.name} className="p-6 rounded-2xl bg-white border border-rose-100 shadow-sm">
              <div className="flex items-center gap-1 text-amber-500">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className={`w-5 h-5 ${i < t.rating ? 'fill-amber-400' : 'opacity-30'}`} />
                ))}
              </div>
              <p className="mt-3 text-slate-700">“{t.text}”</p>
              <p className="mt-4 text-sm font-medium text-slate-900">{t.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
