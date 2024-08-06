/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'fedskillstest.ct.digital',
        port: '',
        pathname: '/**',
      },
    ],
  },
  env: {
    userName: 'coalition',
    passWord: 'skills-test'
  }
};

export default nextConfig;
