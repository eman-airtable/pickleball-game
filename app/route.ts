import { kitchenLineHtml } from '@/lib/kitchen-line-html'

export const dynamic = 'force-static'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL ?? process.env.SUPABASE_URL ?? ''
const supabaseKey =
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ??
  process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY ??
  process.env.SUPABASE_ANON_KEY ??
  ''

// Escape "<" so the injected JSON can never close the surrounding <script>.
const config = JSON.stringify({ url: supabaseUrl, key: supabaseKey }).replace(/</g, '\\u003c')

const html = kitchenLineHtml.replace('/*KL_CONFIG*/null', config)

export function GET() {
  return new Response(html, {
    headers: {
      'Content-Type': 'text/html; charset=utf-8',
      'X-Content-Type-Options': 'nosniff',
      'Referrer-Policy': 'strict-origin-when-cross-origin',
      'Strict-Transport-Security': 'max-age=63072000',
      'Permissions-Policy': 'camera=(), microphone=(), geolocation=()',
    },
  })
}
