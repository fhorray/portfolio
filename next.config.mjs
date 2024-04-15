module.exports = {
  async redirects() {
    return [
      {
        source: "/",
        has: [
          {
            type: "host",
            value: "bio.francy.dev",
          },
        ],
        destination: "/app/bio",
        permanent: true,
      },
    ];
  },
};
