export default function Description() {
  return (
    <section id="description" className="py-20 bg-gradient-to-b from-white to-rose-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">Présentation du Teddy Bear 55PB</h2>
            <p className="mt-4 text-slate-600 leading-relaxed">
              Découvrez Teddy Bear 55PB, l'ourson conçu pour offrir douceur, sécurité et réconfort à tout âge. Fabriqué à partir de matériaux haut de gamme et pensé pour durer, il accompagne tous les moments : cadeaux, décorations, souvenirs ou simples câlins du quotidien.
            </p>

            <div className="mt-8 grid sm:grid-cols-2 gap-6">
              <div className="p-5 rounded-2xl bg-white border border-rose-100 shadow-sm">
                <h3 className="font-semibold text-slate-900">Matériaux</h3>
                <ul className="mt-2 text-slate-600 text-sm list-disc list-inside">
                  <li>Peluche ultra-douce et hypoallergénique</li>
                  <li>Remplissage moelleux certifié OEKO-TEX</li>
                  <li>Coutures renforcées pour plus de sécurité</li>
                </ul>
              </div>
              <div className="p-5 rounded-2xl bg-white border border-rose-100 shadow-sm">
                <h3 className="font-semibold text-slate-900">Dimensions & poids</h3>
                <ul className="mt-2 text-slate-600 text-sm list-disc list-inside">
                  <li>Hauteur: 55 cm</li>
                  <li>Largeur: 35 cm</li>
                  <li>Poids: 650 g</li>
                </ul>
              </div>
              <div className="p-5 rounded-2xl bg-white border border-rose-100 shadow-sm">
                <h3 className="font-semibold text-slate-900">Variantes</h3>
                <ul className="mt-2 text-slate-600 text-sm list-disc list-inside">
                  <li>Couleurs: beige, marron clair, rose pastel</li>
                  <li>Tailles: 35 cm, 55 cm, 75 cm</li>
                  <li>Éditions spéciales: Nez coeur, ruban satiné</li>
                </ul>
              </div>
              <div className="p-5 rounded-2xl bg-white border border-rose-100 shadow-sm">
                <h3 className="font-semibold text-slate-900">Entretien</h3>
                <ul className="mt-2 text-slate-600 text-sm list-disc list-inside">
                  <li>Lavable en machine à 30°C (filet recommandé)</li>
                  <li>Séchage à l'air libre</li>
                  <li>Convient aux peaux sensibles</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="grid gap-6">
            <img className="rounded-2xl shadow-2xl border border-rose-100" src="https://images.unsplash.com/photo-1762978902209-e2ca80abee66?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxUZWRkeSUyMGVuJTIwYW1iaWFuY2V8ZW58MHwwfHx8MTc2MzQ4NDU1MXww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="Teddy en ambiance" />
            <img className="rounded-2xl shadow-2xl border border-rose-100" src="https://images.unsplash.com/photo-1705704805141-cc9e194d3f63?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxEJUMzJUE5dGFpbCUyMGRlJTIwbGElMjB0ZXh0dXJlfGVufDB8MHx8fDE3NjM0ODQ1NTF8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="Détail de la texture" />
          </div>
        </div>
      </div>
    </section>
  )
}
