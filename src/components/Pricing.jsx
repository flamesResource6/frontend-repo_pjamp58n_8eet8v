import { ShoppingCart } from 'lucide-react'

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 bg-gradient-to-b from-white to-rose-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">Prix et options d\'achat</h2>
            <p className="mt-3 text-slate-600">Teddy Bear 55PB est disponible avec plusieurs options de livraison et de paiement sécurisées.</p>

            <ul className="mt-6 grid sm:grid-cols-2 gap-4 text-slate-700 text-sm">
              <li className="p-4 rounded-xl bg-white border border-rose-100">Livraison standard (2-4 jours)</li>
              <li className="p-4 rounded-xl bg-white border border-rose-100">Livraison Express (24-48h)</li>
              <li className="p-4 rounded-xl bg-white border border-rose-100">Paiement par carte ou PayPal</li>
              <li className="p-4 rounded-xl bg-white border border-rose-100">Retours sous 30 jours</li>
            </ul>
          </div>

          <div className="relative p-8 rounded-3xl bg-white border border-rose-100 shadow-xl">
            <p className="text-sm uppercase tracking-wider text-pink-600 font-semibold">Teddy Bear 55PB</p>
            <div className="mt-3 flex items-end gap-2">
              <span className="text-5xl font-extrabold text-slate-900">39€</span>
              <span className="text-slate-500 mb-2 text-sm">TTC</span>
            </div>
            <p className="mt-2 text-slate-600">Couleurs: beige, marron clair, rose pastel. Tailles au choix.</p>

            <a href="#contact" className="mt-6 inline-flex items-center justify-center gap-2 w-full bg-pink-600 text-white px-6 py-3 rounded-xl shadow-lg shadow-pink-600/20 hover:bg-pink-500">
              <ShoppingCart className="w-5 h-5" /> Acheter maintenant
            </a>

            <p className="mt-4 text-xs text-slate-500">Paiements sécurisés. Expédié sous 24h ouvrées.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
