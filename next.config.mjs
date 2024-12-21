/** @type {import('next').NextConfig} */
const nextConfig = {
    async headers() {
        return [
            {
                // matching all API routes
                source: "/:path*",
                headers: [
                    { 
                        key: "Access-Control-Allow-Credentials", 
                        value: "true" },
                    { 
                        key: "Access-Control-Allow-Origin", 
                        value: "*" },
                    { 
                        key: "Access-Control-Allow-Methods", 
                        value: "GET, DELETE, PATCH, POST, PUT, OPTIONS" },
                    {
                        key: 
                        "Access-Control-Allow-Headers", 
                        value: "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Authorization, Content-MD5, Content-Type, Date, X-Api-Version" },
                    {
                        key: 'Content-Security-Policy',
                        value: "script-src 'self' 'unsafe-inline';",
                    },
                ]
            }
        ]
    },
    async rewrites() {
        return [
            {
                source: '/api/:path*/',
                destination: 'http://localhost:8000/:path*'
            }
        ]
    }
}

export default nextConfig;
