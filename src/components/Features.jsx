import { ShieldCheck, Heart, Sparkles, WashingMachine } from 'lucide-react'

const features = [
  {
    icon: ShieldCheck,
    title: 'Sécurité et qualité',
    desc: 'Matériaux certifiés, coutures renforcées et finitions soignées pour une sécurité maximale.'
  },
  {
    icon: Heart,
    title: 'Confort et douceur',
    desc: 'Une peluche ultra-douce et moelleuse pour des câlins inoubliables.'
  },
  {
    icon: WashingMachine,
    title: 'Facilité d\'entretien',
    desc: 'Lavable en machine à 30°C pour une hygiène impeccable au quotidien.'
  },
  {
    icon: Sparkles,
    title: 'Durabilité et résistance',
    desc: 'Conçu pour durer : matériaux résistants et testés pour accompagner la vie quotidienne.'
  }
]

export default function Features() {
  return (
    <section id="features" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight text-center">Caractéristiques clés</h2>
        <p className="mt-3 text-slate-600 text-center max-w-2xl mx-auto">L\'ourson 55PB a été pensé pour offrir le meilleur équilibre entre douceur, sécurité et longévité.</p>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="p-6 rounded-2xl bg-white border border-rose-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-pink-100 text-pink-600 flex items-center justify-center">
                <Icon className="w-6 h-6" />
              </div>
              <h3 className="mt-4 font-semibold text-slate-900">{title}</h3>
              <p className="mt-2 text-sm text-slate-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
