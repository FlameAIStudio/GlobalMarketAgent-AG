/** @type {import('next').NextConfig} */
const isGithubPages = process.env.GITHUB_PAGES === 'true';
const repoName =
  process.env.GITHUB_REPOSITORY?.split('/')[1] ||
  process.env.GITHUB_REPO ||
  'GlobalMarketAgent-AG';

const nextConfig = {
  ...(isGithubPages
    ? {
        output: 'export',
        basePath: `/${repoName}`,
        assetPrefix: `/${repoName}/`,
        trailingSlash: true,
        images: { unoptimized: true },
      }
    : {}),
}

module.exports = nextConfig
