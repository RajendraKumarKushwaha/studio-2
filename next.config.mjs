

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'memoriesimagesvideos.s3.us-east-1.amazonaws.com',
        },
        {
          protocol: 'https',
          hostname: 'images.pexels.com',
        },
      ],
    },
  };
  
  export default nextConfig;
    
  