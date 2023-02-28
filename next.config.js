/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  env: {
    weatherApi: process.env.NEXT_PUBLIC_WEATHER_API
  }
}

module.exports = nextConfig
