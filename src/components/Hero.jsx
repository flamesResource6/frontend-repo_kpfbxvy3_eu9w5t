import { motion } from 'framer-motion'

export default function Hero({ onContactClick }) {
  return (
    <section className="relative overflow-hidden pt-24 pb-16">
      <div className="absolute inset-0 -z-10 opacity-40" aria-hidden>
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-500/30 blur-3xl rounded-full" />
        <div className="absolute -bottom-24 -left-24 w-[28rem] h-[28rem] bg-cyan-400/20 blur-3xl rounded-full" />
      </div>

      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-6xl font-extrabold tracking-tight text-white"
            >
              Jasa Pengembangan IT untuk Bisnis Modern
            </motion.h1>
            <p className="mt-5 text-blue-100/90 text-lg leading-relaxed">
              Kami membantu membangun website, aplikasi, cloud, dan keamanan dengan kualitas terbaik dan waktu pengerjaan cepat.
            </p>
            <div className="mt-8 flex items-center gap-4">
              <button onClick={onContactClick} className="px-5 py-3 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-semibold shadow-lg shadow-blue-600/20 transition">
                Konsultasi Gratis
              </button>
              <a href="#services" className="px-5 py-3 rounded-lg bg-white/10 hover:bg-white/20 text-white font-semibold transition">
                Lihat Layanan
              </a>
            </div>
            <div className="mt-6 text-blue-200/70 text-sm">Trusted by startup, UMKM, hingga enterprise</div>
          </div>
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-500/20 to-cyan-400/10 border border-white/10 rounded-2xl p-6">
              <img src="/illustration-dev.svg" alt="IT Services" className="w-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
