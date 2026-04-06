export const metadata = {
  title: 'Hello Solar',
  description: 'Evaluación gratis de sistema solar en Puerto Rico',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  )
}