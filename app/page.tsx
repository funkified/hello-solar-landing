'use client'

import { useState } from 'react'

export default function Home() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    city: ''
  })

  const handleSubmit = async (e: any) => {
    e.preventDefault()

    await fetch('/api/lead', {
      method: 'POST',
      body: JSON.stringify(form)
    })

    window.location.href = "https://wa.me/19393666802?text=Hola,%20quiero%20evaluación%20solar"
  }

  return (
    <main style={{ padding: 20, fontFamily: 'Arial' }}>
      <h1>⚡ Baja tu factura de luz</h1>
      <h2>y olvídate de los apagones en Puerto Rico</h2>

      <p>Evaluación GRATIS con Hello Solar</p>

      <form onSubmit={handleSubmit}>
        <input
          placeholder="Nombre"
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
        <br /><br />

        <input
          placeholder="Teléfono"
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
        />
        <br /><br />

        <input
          placeholder="Pueblo"
          onChange={(e) => setForm({ ...form, city: e.target.value })}
        />
        <br /><br />

        <button type="submit">Quiero evaluación GRATIS</button>
      </form>

      <br />

      <a href="https://wa.me/19393666802?text=Hola,%20quiero%20evaluación%20solar">
        📲 Escríbeme por WhatsApp
      </a>
    </main>
  )
}
