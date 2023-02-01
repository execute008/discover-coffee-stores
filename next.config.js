/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "images.unsplash.com", "maps.gstatic.com", "maps.googleapis.com"
    ]
  },
  env: {
    PLACES_API_KEY : "AIzaSyCDCrantCifIZAsZB6NTGh-nAFwHY_1ckw",
    BASE_LAT_LNG: "51.95046,7.62123"
  }
}

module.exports = nextConfig
