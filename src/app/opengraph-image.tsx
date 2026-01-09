import { ImageResponse } from 'next/og'
import { siteConfig } from '@/lib/site'

export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'
export const runtime = 'edge'

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div style={{ width: '100%', height: '100%', background: '#050505', padding: 64, color: '#fff', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <div style={{ fontSize: 18, letterSpacing: 8, opacity: 0.7 }}>DAVIDTHEURI.COM</div>
        <div style={{ fontSize: 72, fontWeight: 800, marginTop: 18, lineHeight: 1.0 }}>{siteConfig.name}</div>
        <div style={{ fontSize: 32, opacity: 0.9, marginTop: 16 }}>
          Technology Law • IT Transactions • Privacy • AI Governance
        </div>
        <div style={{ position: 'absolute', top: -120, right: -80, width: 520, height: 520, background: 'linear-gradient(135deg, #2563eb, #7c3aed)', filter: 'blur(120px)', opacity: 0.28, borderRadius: 9999 }} />
      </div>
    ),
    size
  )
}
