/**
 * Decap CMS GitHub OAuth — Step 1: Redirect to GitHub
 */
export default function handler(req, res) {
  const { GITHUB_OAUTH_CLIENT_ID } = process.env;
  const origin = req.headers.origin || `https://${req.headers.host}`;
  const provider = req.query.provider || 'github';

  if (!GITHUB_OAUTH_CLIENT_ID) {
    return res.status(500).json({ error: 'Missing GITHUB_OAUTH_CLIENT_ID env var' });
  }

  const params = new URLSearchParams({
    client_id: GITHUB_OAUTH_CLIENT_ID,
    scope: 'repo,user',
    redirect_uri: `${origin}/api/callback`,
  });

  res.writeHead(302, {
    Location: `https://github.com/login/oauth/authorize?${params}`,
  });
  res.end();
}
