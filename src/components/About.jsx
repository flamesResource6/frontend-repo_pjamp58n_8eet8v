export default function About() {
  return (
    <section id="about" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">À propos de la marque</h2>
            <p className="mt-4 text-slate-600">Depuis plus de 10 ans, notre maison crée des peluches pensées pour durer et rassurer. Notre philosophie : allier douceur, sécurité et design intemporel.</p>
            <ul className="mt-6 space-y-3 text-slate-700">
              <li className="p-4 rounded-xl bg-white border border-rose-100">Contrôles qualité stricts à chaque étape</li>
              <li className="p-4 rounded-xl bg-white border border-rose-100">Matériaux sans substances nocives</li>
              <li className="p-4 rounded-xl bg-white border border-rose-100">Emballages écoresponsables</li>
            </ul>
          </div>
          <div className="relative">
            <img src="https://images.unsplash.com/photo-1579618215542-2ed5e10b65ed?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxBdGVsaWVyJTIwZGUlMjBmYWJyaWNhdGlvbnxlbnwwfDB8fHwxNzYzNDg0NTUyfDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="Atelier de fabrication" className="rounded-2xl shadow-2xl border border-rose-100" />
          </div>
        </div>
      </div>
    </section>
  )
}
