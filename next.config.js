module.exports = {
  async rewrites() {
    return [
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "bio.francy.dev",
          },
        ],
        destination: "/app/bio/:path*",
        permanent: true,
      },
    ];
  },
};
