/**
 * GitHub API Proxy — runs on Vercel (US), forwards to GitHub API
 * Solves the China → GitHub connectivity issue. No VPN needed.
 */
export default async function handler(req, res) {
  // CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // Get GitHub API path from URL: /api/proxy/repos/.../contents/...
  let apiPath = req.url.replace(/^\/api\/proxy\/?/, '');
  if (!apiPath) {
    return res.status(400).json({ error: 'Missing GitHub API path' });
  }

  // Forward Authorization header (the user's GitHub PAT)
  const auth = req.headers.authorization;
  if (!auth) {
    return res.status(401).json({ error: 'Missing Authorization header' });
  }

  try {
    const ghRes = await fetch(`https://api.github.com/${apiPath}`, {
      method: req.method,
      headers: {
        Authorization: auth,
        Accept: 'application/vnd.github.v3+json',
        'Content-Type': 'application/json',
      },
      body: req.method !== 'GET' && req.method !== 'HEAD' ? JSON.stringify(req.body) : undefined,
    });

    const data = await ghRes.json().catch(() => null);
    res.status(ghRes.status).json(data);
  } catch (err) {
    res.status(502).json({ error: 'GitHub API unreachable', detail: err.message });
  }
}
