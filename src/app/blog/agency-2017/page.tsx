import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
	HoverCard,
	HoverCardContent,
	HoverCardTrigger,
} from "@/components/ui/hover-card";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
	title: "Agency 2017",
	description:
		"M. Dinesh is a Interior Designer with a focus on creating beautiful, functional spaces that inspire.",
	openGraph: {
		type: "website",
		url: "https://mdinesh.in/",
		siteName: "Dinesh's Portfolio",
		title: "Dinesh's Portfolio",
		description:
			"M. Dinesh is a Interior Designer with a focus on creating beautiful, functional spaces that inspire.",
		images: [
			{
				url: "/agency-2017/0ea853150009815.63090dc0b79dc.jpg",
				width: 640,
				height: 640,
				type: "image/png",
			},
		],
		locale: "en_IN",
		countryName: "India",
	},
	appleWebApp: {
		title: "Dinesh's Portfolio",
	},
	applicationName: "Dinesh's Portfolio",
	publisher: "M. Dinesh",
	icons: [
		{
			rel: "icon",
			url: "/dnest_logo_light.svg",
			media: "(prefers-color-scheme: dark)",
			type: "image/svg+xml",
			sizes: "any",
		},
		{
			rel: "icon",
			url: "/dnest_logo_dark.svg",
			media: "(prefers-color-scheme: light)",
			type: "image/svg+xml",
			sizes: "any",
		},
		{
			rel: "apple-touch-icon",
			sizes: "180x180",
			url: "/dnest_logo_light.svg",
			type: "image/svg+xml",
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
		images: [
			{
				url: "/agency-2017/0ea853150009815.63090dc0b79dc.jpg",
				width: 640,
				height: 640,
				type: "image/png",
			},
		],
	},
};

const gallery = [
	{
		title: "Reception Area",
		assets: [
			{
				type: "image",
				src: "/agency-2017/0ea853150009815.63090dc0b79dc.jpg",
			},
			{
				type: "image",
				src: "/agency-2017/8ebf0b150009815.63090dc0b8426.jpg",
			},
		],
	},
	{
		title: "MD Cabin",
		assets: [
			{
				type: "image",
				src: "/agency-2017/20e435150009815.63090775a4bd4.jpg",
			},
			{
				type: "image",
				src: "/agency-2017/af9449150009815.63090775a5783.jpg",
			},
			{
				type: "image",
				src: [
					"/agency-2017/5786a0150009815.62f35306ecd86.jpg",
					"/agency-2017/7db5e0150009815.62f35307798c6.jpg",
				],
			},
		],
	},
	{
		title: "Conference Room",
		assets: [
			{
				type: "image",
				src: [
					"/agency-2017/4a1d7c150009815.630907761ed1e.jpg",
					"/agency-2017/76768a150009815.630907761cf33.jpg",
				],
			},
			{
				type: "image",
				src: "/agency-2017/1725e4150009815.630907761dfab.jpg",
			},
		],
	},
	{
		title: "Work Station",
		assets: [
			{
				type: "image",
				src: "/agency-2017/e6989f150009815.63090776c8abf.jpg",
			},
			{
				type: "image",
				src: "/agency-2017/1e1eed150009815.63090776c9622.jpg",
			},
			{
				type: "image",
				src: "/agency-2017/4e951d150009815.6309077757c01.jpg",
			},
			{
				type: "image",
				src: "/agency-2017/a9dd35150009815.6309077758610.jpg",
			},
		],
	},
	{
		title: "Copy Area",
		assets: [
			{
				type: "image",
				src: "/agency-2017/371282150009815.63090dc3d8018.jpg",
			},
		],
	},
	{
		title: "Kitchen/Pantry area",
		assets: [
			{
				type: "image",
				src: "/agency-2017/ef0161150009815.63090dc22f1ad.jpg",
			},
			{
				type: "image",
				src: "/agency-2017/250b9d150009815.63090dc22fa76.jpg",
			},
			{
				type: "image",
				src: "/agency-2017/89164b150009815.63090dc22e925.jpg",
			},
		],
	},
	{
		title: "Bar Console table",
		assets: [
			{
				type: "image",
				src: "/agency-2017/b97d54150009815.62f22ca5a7c41.jpg",
			},
			{
				type: "image",
				src: "/agency-2017/7f3d95150009815.62f22ca5a9022.jpg",
			},
			{
				type: "image",
				src: "/agency-2017/586c88150009815.62f22ca5a95b5.jpg",
			},
			{
				type: "image",
				src: "/agency-2017/fc0706150009815.62f23b2cd0263.jpg",
			},
			{
				type: "image",
				src: "/agency-2017/f0a9af150009815.62f23b2ccf962.jpg",
			},
		],
	},
	{
		title: "Team Dining Area/ Terrace",
		assets: [
			{
				type: "image",
				src: "/agency-2017/757719150009815.63090dc2be858.jpg",
			},
			{
				type: "image",
				src: "/agency-2017/9af3d3150009815.63090dc352fff.jpg",
			},
			{
				type: "image",
				src: "/agency-2017/98ba63150009815.63090dc2be212.jpg",
			},
			{
				type: "image",
				src: "/agency-2017/df35e6150009815.63090dc2bef54.jpg",
			},
			{
				type: "image",
				src: "/agency-2017/f3c584150009815.63090dc3529b3.jpg",
			},
			{
				type: "image",
				src: "/agency-2017/46bc0a150009815.63090dc35358c.jpg",
			},
		],
	},
];

export default function Page() {
	return (
		<div>
			<h2 className="mt-10 scroll-m-20 pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
				Agency 2017
			</h2>
			<div className="leading-7 [&:not(:first-child)]:mt-6">
				Agency 2017 is a Marketing office. This Project was Designed by Ar
				Aditya Kumar{" "}
				<HoverCard>
					<HoverCardTrigger asChild>
						<Link
							className="underline"
							href="https://www.instagram.com/thekumarimages/"
							target="_blank"
						>
							@TheKumarImages
						</Link>
					</HoverCardTrigger>
					<HoverCardContent className="w-80">
						<div className="flex justify-between space-x-4">
							<Avatar>
								<AvatarImage src="/kumarimages_logo.jpg" />
								<AvatarFallback>VC</AvatarFallback>
							</Avatar>
							<div className="space-y-1">
								<h4 className="text-sm font-semibold">@TheKumarImages</h4>
								<p className="text-sm">
									Boutique architecture and interior design firm.
								</p>
							</div>
						</div>
					</HoverCardContent>
				</HoverCard>
				, and my role in this project is to execute the design in the
				site(project/site management), and vendor meetings. We curated this
				exclusive interior design and styling for our clients, which defines
				them being a timeless entity in the society. Agency 2017 is a fusion of
				vibrant colors and industrial design, and it is designed as a semi open
				space office type, it is 2-floor office.
			</div>

			<div>
				<h3 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
					First floor
				</h3>
				<ol className="list-decimal pl-4 [&>li]:mt-2">
					<li>MD Cabin</li>
					<li>Printing area</li>
					<li>Sales and Marketing area</li>
					<li>Conference Room</li>
					<li>Open Work space</li>
					<li>Reception</li>
					<li>Women's Toilet</li>
				</ol>
			</div>
			<div>
				<h3 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
					Second floor
				</h3>
				<ol className="list-decimal pl-4 [&>li]:mt-2">
					<li>Kitchen Area accompanied by Bar area and a mini library</li>
					<li>Dining space</li>
					<li>Smoking area/ Smoking Ledge</li>
					<li>Gents Toilet</li>
				</ol>
			</div>

			<blockquote className="mt-6 border-l-2 pl-6 italic">
				Agency 2017 was designed, executed and handed over to the client in 45
				days.
			</blockquote>

			<div>
				{gallery.map((section) => (
					<div key={section.title}>
						<h3 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
							{section.title}
						</h3>

						<div className="flex flex-wrap gap-2 w-full">
							{section.assets.map((asset) =>
								Array.isArray(asset.src) ? (
									<div key={asset.src.join()}>
										{asset.src.map((src) => (
											<div key={src}>
												<Image
													className="mt-6 rounded-xl"
													src={src}
													alt={section.title}
													height={320}
													width={450}
													loading="lazy"
												/>
											</div>
										))}
									</div>
								) : (
									<div key={asset.src}>
										{asset.type === "image" ? (
											<Image
												className="mt-6 rounded-xl"
												src={asset.src}
												alt={section.title}
												height={320}
												width={450}
												loading="lazy"
											/>
										) : null}
									</div>
								),
							)}
						</div>
					</div>
				))}
			</div>

			<blockquote className="mt-6 border-l-2 pl-6 italic">
				This project will always be close to my heart, cause it is my first
				complete site management project which thought me a lot of things.
			</blockquote>
		</div>
	);
}
