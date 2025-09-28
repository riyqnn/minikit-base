@type {import('next').NextConfig}
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/.well-known/farcaster.json",
        destination: "https://api.farcaster.xyz/miniapps/hosted-manifest/01998e94-c322-08ac-f54d-f07e1475e8ab",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;