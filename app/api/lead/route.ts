import { NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

export async function POST(req: Request) {
  const data = await req.json()

  const filePath = path.join(process.cwd(), 'leads.csv')

  const line = `${data.name},${data.phone},${data.city}\n`

  fs.appendFileSync(filePath, line)

  return NextResponse.json({ ok: true })
}