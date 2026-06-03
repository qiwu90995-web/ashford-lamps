/**
 * Decap CMS GitHub OAuth — Step 2: Handle callback, exchange code for token
 */
export default async function handler(req, res) {
  const { GITHUB_OAUTH_CLIENT_ID, GITHUB_OAUTH_CLIENT_SECRET } = process.env;
  const code = req.query.code;

  if (!code) {
    return res.status(400).json({ error: 'Missing code parameter' });
  }
  if (!GITHUB_OAUTH_CLIENT_ID || !GITHUB_OAUTH_CLIENT_SECRET) {
    return res.status(500).json({ error: 'Missing OAuth env vars' });
  }

  try {
    const tokenRes = await fetch('https://github.com/login/oauth/access_token', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({
        client_id: GITHUB_OAUTH_CLIENT_ID,
        client_secret: GITHUB_OAUTH_CLIENT_SECRET,
        code,
      }),
    });

    const data = await tokenRes.json();

    if (data.error) {
      return res.status(400).json({ error: data.error_description || data.error });
    }

    // Decap CMS expects #access_token=...&token_type=bearer
    res.writeHead(302, {
      Location: `/admin/#access_token=${data.access_token}&token_type=bearer`,
    });
    res.end();
    res.end();
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
