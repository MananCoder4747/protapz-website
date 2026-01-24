export default function handler(req, res) {
  const robots = `User-agent: *
Allow: /

Sitemap: https://protapz.co.in/sitemap.xml`;

  res.setHeader('Content-Type', 'text/plain; charset=utf-8');
  res.status(200).send(robots);
}
