/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        // Long-lived immutable cache for images, videos, fonts, icons
        source: "/:path*.(jpg|jpeg|png|webp|avif|gif|svg|mp4|mov|woff|woff2|ttf|otf|ico)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
