import createNextIntlPlugin from 'next-intl/plugin';

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["localhost"],
    // remotePatterns: [
    //   {
    //     protocol: "https",
    //     hostname: "cdn.sanity.io",
    //     port: "",
    //   },
    // ],
  },
  output: "standalone",
};

const withNextIntl = createNextIntlPlugin();

export default withNextIntl(nextConfig);
