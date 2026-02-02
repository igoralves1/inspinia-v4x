const nextConfig = {
  reactStrictMode: false,
  async redirects() {
    return [{
      source: '/',
      destination: '/dashboard',
      permanent: false
    }];
  }
};
export default nextConfig;