import type { SVGProps } from "react";
import Link from "next/link";

export default function Navbar() {
	return (
		<header className="px-4 lg:px-6 h-14 sticky top-0 backdrop-blur-sm flex items-center">
			<Link className="flex items-center justify-center" href="/">
				<HomeIcon className="h-6 w-6" />
				<span className="sr-only">M Dinesh's Portfolio</span>
			</Link>
			<nav className="ml-auto flex gap-4 sm:gap-6">
				<Link
					className="text-sm font-medium hover:underline underline-offset-4"
					href="/about"
				>
					About
				</Link>
				<Link
					className="text-sm font-medium hover:underline underline-offset-4"
					href="/projects"
				>
					Projects
				</Link>
				<Link
					className="text-sm font-medium hover:underline underline-offset-4"
					href="/contact"
				>
					Contact
				</Link>
			</nav>
		</header>
	);
}
function HomeIcon(props: SVGProps<SVGSVGElement>) {
	return (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<title>Home</title>
			<path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
			<polyline points="9 22 9 12 15 12 15 22" />
		</svg>
	);
}
