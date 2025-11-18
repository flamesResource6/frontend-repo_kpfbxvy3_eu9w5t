import { useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', company: '', phone: '', service_type: '', message: '', budget_range: '' })
  const [status, setStatus] = useState(null)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')
    try {
      const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${baseUrl}/api/inquiries`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      })
      if (!res.ok) throw new Error('Gagal mengirim')
      setStatus('success')
      setForm({ name: '', email: '', company: '', phone: '', service_type: '', message: '', budget_range: '' })
    } catch (e) {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="py-16">
      <div className="max-w-3xl mx-auto px-6">
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
          <h2 className="text-2xl font-bold text-white mb-4">Konsultasi Gratis</h2>
          <p className="text-blue-100/80 mb-6">Ceritakan kebutuhan Anda, kami akan menghubungi dalam 1x24 jam.</p>
          <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-4">
            <input className="bg-white/10 text-white rounded-lg p-3 outline-none" placeholder="Nama" name="name" value={form.name} onChange={handleChange} required />
            <input className="bg-white/10 text-white rounded-lg p-3 outline-none" placeholder="Email" name="email" type="email" value={form.email} onChange={handleChange} required />
            <input className="bg-white/10 text-white rounded-lg p-3 outline-none" placeholder="Perusahaan (opsional)" name="company" value={form.company} onChange={handleChange} />
            <input className="bg-white/10 text-white rounded-lg p-3 outline-none" placeholder="Telepon (opsional)" name="phone" value={form.phone} onChange={handleChange} />
            <input className="bg-white/10 text-white rounded-lg p-3 outline-none md:col-span-2" placeholder="Jenis layanan yang diinginkan" name="service_type" value={form.service_type} onChange={handleChange} />
            <textarea className="bg-white/10 text-white rounded-lg p-3 outline-none md:col-span-2" rows="4" placeholder="Ceritakan proyek Anda" name="message" value={form.message} onChange={handleChange} required />
            <select className="bg-white/10 text-white rounded-lg p-3 outline-none md:col-span-2" name="budget_range" value={form.budget_range} onChange={handleChange}>
              <option value="">Perkiraan anggaran</option>
              <option value="<10juta">Di bawah 10 juta</option>
              <option value="10-25juta">10 - 25 juta</option>
              <option value=">25juta">Di atas 25 juta</option>
            </select>
            <button disabled={status==='loading'} className="md:col-span-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold py-3 rounded-lg transition">
              {status==='loading' ? 'Mengirim...' : 'Kirim Permintaan'}
            </button>
            {status==='success' && <div className="md:col-span-2 text-green-400">Permintaan terkirim! Kami akan menghubungi Anda.</div>}
            {status==='error' && <div className="md:col-span-2 text-red-400">Terjadi kesalahan. Coba lagi.</div>}
          </form>
        </div>
      </div>
    </section>
  )
}
