/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
      return [
        {
          source: '/main_Daruma3.gltf',
          destination: '/main_Daruma3.gltf',
        },
      ];
    },
  };
  
  export default nextConfig;