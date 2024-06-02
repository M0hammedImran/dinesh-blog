import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import LocalFont from "next/font/local";

export const metadata: Metadata = {
	title: "Dinesh's Portfolio",
	description:
		"Dinesh M is a Interior Designer with a focus on creating beautiful, functional spaces that inspire.",
	openGraph: {
		type: "website",
		url: "https://mdinesh.in/",
		title: "Dinesh's Portfolio",
		description: "Dinesh's Portfolio Description",
		siteName: "Dinesh's Portfolio",
		images: [
			{
				url: "https://mdinesh.in/_next/image?url=%2Fdinesh.jpg&w=640&q=75",
				width: 640,
				height: 640,
			},
		],
	},
	keywords: ["interior designer", "portfolio", "dinesh m"],
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

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className={[inter.variable, calSans.variable].join(" ")}>
			<body className={inter.className}>
				<main className="flex flex-col min-h-[100dvh]">{children}</main>
			</body>
		</html>
	);
}
