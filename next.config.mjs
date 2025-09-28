/** @type {import('next').NextConfig} */
const isProdExport = process.env.NEXT_PUBLIC_EXPORT === '1';
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  ...(isProdExport ? {
    output: 'export',
    basePath: '/duosway',
    assetPrefix: '/duosway/',
    trailingSlash: true,
  } : {}),
};

export default nextConfig;
