
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

    window.location.href =
      "https://wa.me/19393666802?text=Hola,%20quiero%20evaluación%20solar"
  }

  return (
    <main style={{
      fontFamily: 'Arial',
      background: '#0f172a',
      color: 'white',
      minHeight: '100vh',
      padding: '20px',
      maxWidth: 500,
      margin: '0 auto'
    }}>

      {/* HERO IMAGE */}
      <img 
        src="https://images.unsplash.com/photo-1509395176047-4a66953fd231"
        style={{ width: '100%', borderRadius: 10, marginBottom: 20 }}
      />

      {/* HERO TEXT */}
      <h1 style={{ fontSize: 28, marginBottom: 10 }}>
        ⚡ Baja tu factura de luz
      </h1>

      <h2 style={{ fontSize: 20, marginBottom: 20 }}>
        y olvídate de los apagones en Puerto Rico
      </h2>

      <p style={{ marginBottom: 30 }}>
        Evaluación GRATIS con Hello Solar
      </p>

      {/* FORM */}
      <form onSubmit={handleSubmit} style={{
        background: '#1e293b',
        padding: 20,
        borderRadius: 10
      }}>
        <input
          placeholder="Nombre"
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          style={{ width: '100%', padding: 10, marginBottom: 10 }}
        />

        <input
          placeholder="Teléfono"
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
          style={{ width: '100%', padding: 10, marginBottom: 10 }}
        />

        <input
          placeholder="Pueblo"
          onChange={(e) => setForm({ ...form, city: e.target.value })}
          style={{ width: '100%', padding: 10, marginBottom: 20 }}
        />

        <button type="submit" style={{
          width: '100%',
          padding: 15,
          background: '#22c55e',
          color: 'black',
          fontWeight: 'bold',
          borderRadius: 8
        }}>
          Quiero evaluación GRATIS
        </button>
      </form>

      {/* IMAGE – FAMILY */}
      <img 
        src="https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf"
        style={{ width: '100%', borderRadius: 10, marginTop: 20 }}
      />

      {/* BENEFITS */}
      <div style={{ marginTop: 20 }}>
        <p>✔ Ahorra dinero en tu factura</p>
        <p>✔ Luz aunque haya apagones</p>
        <p>✔ Más tranquilidad en tu hogar</p>
      </div>

      {/* IMAGE – INSTALLATION */}
      <img 
        src="https://images.unsplash.com/photo-1581091215367-59ab6b0b7f2e"
        style={{ width: '100%', borderRadius: 10, marginTop: 20 }}
      />

      {/* FINAL CTA */}
      <div style={{ marginTop: 30 }}>
        <p>No esperes al próximo apagón.</p>

        <a
          href="https://wa.me/19393666802?text=Hola,%20quiero%20evaluación%20solar"
          style={{
            display: 'block',
            textAlign: 'center',
            background: '#25D366',
            padding: 15,
            borderRadius: 8,
            color: 'black',
            fontWeight: 'bold',
            marginTop: 10
          }}
        >
          📲 Escríbeme por WhatsApp
        </a>
      </div>

    </main>
  )
}