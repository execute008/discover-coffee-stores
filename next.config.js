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
    BASE_LAT_LNG: "40.811999,-73.9438361"
  }
}

module.exports = nextConfig
