import { ImageResponse } from 'next/og'
import { allInsights } from 'contentlayer/generated'

export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'
export const runtime = 'edge'

export default async function Image({ params }: { params: { slug: string } }) {
  const post = allInsights.find((p) => p.slug === params.slug)
  const title = post?.title ?? 'Writing'

  return new ImageResponse(
    (
      <div style={{ width: '100%', height: '100%', background: '#050505', padding: 64, color: '#fff', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <div style={{ fontSize: 18, letterSpacing: 8, opacity: 0.7 }}>INSIGHT</div>
        <div style={{ fontSize: 64, fontWeight: 800, marginTop: 18, lineHeight: 1.05 }}>{title}</div>
        <div style={{ position: 'absolute', top: -120, right: -80, width: 520, height: 520, background: 'linear-gradient(135deg, #2563eb, #7c3aed)', filter: 'blur(120px)', opacity: 0.28, borderRadius: 9999 }} />
      </div>
    ),
    size
  )
}
