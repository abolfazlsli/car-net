/** @type {import('next').NextConfig} */
import withPWAInit from 'next-pwa'

const withPWA = withPWAInit({
  dest: 'public',
  register: false,
  skipWaiting: true,
  // any other next-pwa options you may have
});


const nextConfig = withPWA({});

export default nextConfig;
