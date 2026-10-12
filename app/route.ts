import { kitchenLineHtml } from '@/lib/kitchen-line-html'

export const dynamic = 'force-static'

export function GET() {
  return new Response(kitchenLineHtml, {
    headers: {
      'Content-Type': 'text/html; charset=utf-8',
      'X-Content-Type-Options': 'nosniff',
      'Referrer-Policy': 'strict-origin-when-cross-origin',
      'Strict-Transport-Security': 'max-age=63072000',
      'Permissions-Policy': 'camera=(), microphone=(), geolocation=()',
    },
  })
}
