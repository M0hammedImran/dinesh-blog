import Particles from "@/components/particles";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import LocalFont from "next/font/local";
import ClientLayout from "./client-layout";
import "./globals.css";

export const metadata: Metadata = {
	title: "Dinesh's Portfolio",
	description:
		"M. Dinesh is a Interior Designer with a focus on creating beautiful, functional spaces that inspire.",
	openGraph: {
		type: "website",
		url: "https://mdinesh.in/",
		title: "Dinesh's Portfolio",
		description: "Dinesh's Portfolio Description",
		siteName: "Dinesh's Portfolio",
		images: [
			{
				url: "https://mdinesh.in/_next/image?url=%2Fdinesh.jpeg&w=640&q=75",
				width: 640,
				height: 640,
			},
		],
	},
	icons: [
		{ rel: "icon", url: "https://mdinesh.com/dnest_logo_light.png" },
		{
			rel: "apple-touch-icon",
			url: "https://mdinesh.com/dnest_logo_light.png",
		},
		{
			rel: "apple-touch-icon",
			sizes: "180x180",
			url: "https://mdinesh.com/dnest_logo_light.png",
		},
		{
			rel: "apple-touch-icon",
			sizes: "167x167",
			url: "https://mdinesh.com/dnest_logo_light.png",
		},
		{
			rel: "apple-touch-icon",
			sizes: "152x152",
			url: "https://mdinesh.com/dnest_logo_light.png",
		},
		{
			rel: "apple-touch-icon",
			sizes: "120x120",
			url: "https://mdinesh.com/dnest_logo_light.png",
		},
		{
			rel: "apple-touch-icon",
			sizes: "76x76",
			url: "https://mdinesh.com/dnest_logo_light.png",
		},
		{
			rel: "apple-touch-icon",
			sizes: "60x60",
			url: "https://mdinesh.com/dnest_logo_light.png",
		},
	],
	keywords: ["interior designer", "portfolio", "dinesh", "mdinesh", "designer"],
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			"max-video-preview": -1,
			"max-image-preview": "large",
			"max-snippet": -1,
		},
	},
	twitter: {
		title: "M Dinesh",
		card: "summary_large_image",
	},
};

const calSans = LocalFont({
	src: "../../public/fonts/CalSans-SemiBold.ttf",
	variable: "--font-calsans",
});
const inter = Inter({
	subsets: ["latin"],
	variable: "--font-inter",
});

type RootLayoutProps = Readonly<{
	children: React.ReactNode;
}>;

export default function RootLayout({ children }: RootLayoutProps) {
	return (
		<html
			lang="en"
			className={[inter.variable, calSans.variable, "dark"].join(" ")}
		>
			<body className={cn(inter.className, "w-screen overflow-x-hidden")}>
				<ClientLayout>
					<div className="hidden absolute top-0 w-full h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
					<Particles
						className="fixed inset-0 -z-10 animate-fade-in"
						quantity={500}
					/>

					<main className="flex flex-col min-h-[calc(100svh-146px)]">
						{children}
					</main>
				</ClientLayout>
			</body>
		</html>
	);
}
