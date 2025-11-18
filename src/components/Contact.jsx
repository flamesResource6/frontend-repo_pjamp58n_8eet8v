import { useState } from 'react'
import { Send, Instagram, Facebook, Globe } from 'lucide-react'

export default function Contact() {
  const [status, setStatus] = useState('')

  const onSubmit = (e) => {
    e.preventDefault()
    setStatus('Message envoyé ! Nous vous répondrons rapidement.')
  }

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-rose-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">Contact & Call-to-action</h2>
            <p className="mt-4 text-slate-600">Une question, une commande spéciale ou un partenariat ? Écrivez-nous, nous serons ravis d\'échanger.</p>

            <form onSubmit={onSubmit} className="mt-8 grid gap-4">
              <input type="text" required placeholder="Votre nom" className="px-4 py-3 rounded-xl border border-rose-200 bg-white focus:outline-none focus:ring-2 focus:ring-pink-300" />
              <input type="email" required placeholder="Votre email" className="px-4 py-3 rounded-xl border border-rose-200 bg-white focus:outline-none focus:ring-2 focus:ring-pink-300" />
              <textarea required rows={4} placeholder="Votre message" className="px-4 py-3 rounded-xl border border-rose-200 bg-white focus:outline-none focus:ring-2 focus:ring-pink-300"></textarea>
              <button type="submit" className="inline-flex items-center justify-center gap-2 bg-pink-600 text-white px-6 py-3 rounded-xl shadow-lg shadow-pink-600/20 hover:bg-pink-500">
                <Send className="w-5 h-5" /> Envoyer
              </button>
              {status && <p className="text-sm text-green-600">{status}</p>}
            </form>

            <div className="mt-8 flex items-center gap-4 text-slate-600">
              <a href="#" className="inline-flex items-center gap-2 hover:text-pink-600"><Instagram className="w-5 h-5" /> Instagram</a>
              <a href="#" className="inline-flex items-center gap-2 hover:text-pink-600"><Facebook className="w-5 h-5" /> Facebook</a>
              <a href="#" className="inline-flex items-center gap-2 hover:text-pink-600"><Globe className="w-5 h-5" /> Boutique</a>
            </div>
          </div>

          <div className="relative">
            <div className="p-6 rounded-3xl bg-white border border-rose-100 shadow-xl">
              <h3 className="font-semibold text-slate-900">Besoin d\'aide ?</h3>
              <p className="mt-2 text-sm text-slate-600">Notre équipe vous accompagne pour choisir l\'édition parfaite et répondre à toutes vos questions.</p>
              <img src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1200&auto=format&fit=crop" alt="Service client" className="mt-6 rounded-2xl border border-rose-100" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
