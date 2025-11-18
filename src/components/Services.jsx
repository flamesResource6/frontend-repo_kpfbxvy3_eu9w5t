import { useEffect, useState } from 'react'

function ServiceCard({ item }) {
  return (
    <div className="group rounded-xl bg-white/5 border border-white/10 p-6 hover:bg-white/10 transition">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-white font-semibold text-lg">{item.title}</h3>
          <p className="text-blue-100/80 mt-1 text-sm">{item.description}</p>
        </div>
        {item.starting_price != null && (
          <div className="text-right text-blue-200 text-sm">
            Mulai dari
            <div className="text-white font-semibold">Rp {item.starting_price.toLocaleString('id-ID')}</div>
          </div>
        )}
      </div>
      {item.features && item.features.length > 0 && (
        <ul className="mt-4 space-y-1 text-sm text-blue-100/80 list-disc pl-5">
          {item.features.map((f, idx) => (
            <li key={idx}>{f}</li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default function Services() {
  const [services, setServices] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
        const res = await fetch(`${baseUrl}/api/services`)
        const data = await res.json()
        setServices(data)
      } catch (e) {
        console.error(e)
      } finally {
        setLoading(false)
      }
    }
    fetchServices()
  }, [])

  return (
    <section id="services" className="py-16">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Layanan Kami</h2>
        {loading ? (
          <div className="text-blue-200">Memuat layanan...</div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <ServiceCard key={i} item={s} />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
