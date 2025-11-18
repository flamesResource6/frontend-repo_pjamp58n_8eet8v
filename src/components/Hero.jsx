import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden pt-28">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-pink-300/30 rounded-full blur-3xl" />
        <div className="absolute -bottom-32 -right-32 w-[28rem] h-[28rem] bg-rose-200/40 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div className="relative z-10">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.6 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900"
            >
              Teddy Bear 55PB
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ delay: 0.1, duration: 0.6 }}
              className="mt-4 text-lg text-slate-600"
            >
              « Le compagnon câlin parfait pour toutes les occasions »
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ delay: 0.2, duration: 0.6 }}
              className="mt-8 flex items-center gap-4"
            >
              <a href="#description" className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-pink-600 text-white font-medium shadow-lg shadow-pink-600/20 hover:bg-pink-500 transition-colors">
                En savoir plus
              </a>
              <a href="#gallery" className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-white text-slate-700 font-medium border border-slate-200 hover:bg-slate-50">
                Voir la galerie
              </a>
            </motion.div>
          </div>

          <div className="relative">
            <div className="relative mx-auto w-full max-w-lg aspect-square">
              <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-br from-pink-100 via-rose-100 to-amber-100 blur-xl" />
              <img 
                src="https://images.unsplash.com/photo-1592194996308-7b43878e84a6?q=80&w=1600&auto=format&fit=crop" 
                alt="Teddy Bear 55PB" 
                className="relative z-10 w-full h-full object-cover rounded-[2rem] border border-rose-200/60 shadow-2xl"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
