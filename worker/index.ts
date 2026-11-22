/**
 * Worker landing: alihkan HTTP → HTTPS, lalu sajikan file statis (out/) lewat binding ASSETS
 * dengan header HSTS supaya browser selalu memakai HTTPS untuk kunjungan berikutnya.
 * Dijalankan untuk setiap request (`run_worker_first` di wrangler.jsonc).
 */
type Env = { ASSETS: { fetch(request: Request): Promise<Response> } }

const HSTS = 'max-age=31536000'

const worker = {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url)
    if (url.protocol === 'http:') {
      url.protocol = 'https:'
      return Response.redirect(url.toString(), 301)
    }
    const res = await env.ASSETS.fetch(request)
    const out = new Response(res.body, res)
    out.headers.set('Strict-Transport-Security', HSTS)
    return out
  },
}

export default worker
