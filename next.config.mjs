/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	eslint: { ignoreDuringBuilds: true },
	generateEtags: true,
	reactProductionProfiling: true,
	experimental: {
		typedRoutes: true,
	},
};

export default nextConfig;
