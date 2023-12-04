/** @type {import('next').NextConfig} */
const path = require("path");

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  images: {
    domains: ['search.pstatic.net', 'recipe1.ezmember.co.kr', 'lh3.googleusercontent.com'],
  },
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "http://localhost:8080/:path*",
      },
    ];
  },
  // async redirects() {
  //   return [
  //     {
  //       source: '/',
  //       destination: '/start',
  //       permanent: false,
  //       has: [
  //         { type: 'cookie', key: 'JSESSIONID' },
  //       ],
  //     },
  //   ];
  // },
};
