export default async (_req, res) => {
  res.json({ data: process.env.VERCEL_GITHUB_COMMIT_SHA });
};
