import Link from "next/link";
import {
	CardTitle,
	CardDescription,
	CardHeader,
	Card,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import type { SVGProps } from "react";
import Image from "next/image";

export default function Component() {
	return (
		<div className="flex flex-col min-h-[100dvh]">
			<header className="px-4 lg:px-6 h-14 flex items-center">
				<Link className="flex items-center justify-center" href="#">
					<HomeIcon className="h-6 w-6" />
					<span className="sr-only">Dinesh M Portfolio</span>
				</Link>
				<nav className="ml-auto flex gap-4 sm:gap-6">
					<Link
						className="text-sm font-medium hover:underline underline-offset-4"
						href="#"
					>
						About
					</Link>
					<Link
						className="text-sm font-medium hover:underline underline-offset-4"
						href="#"
					>
						Projects
					</Link>
					<Link
						className="text-sm font-medium hover:underline underline-offset-4"
						href="#"
					>
						Contact
					</Link>
				</nav>
			</header>
			<main className="flex-1">
				<section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
					<div className="container px-4 md:px-6">
						<div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
							<div className="flex flex-col justify-center space-y-4">
								<div className="space-y-2">
									<h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
										Dinesh M
									</h1>
									<p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
										Passionate interior designer with a focus on creating
										beautiful, functional spaces that inspire.
									</p>
								</div>
							</div>
							<Image
								alt="Dinesh M"
								className="mx-auto aspect-square overflow-hidden rounded-xl object-cover sm:w-full lg:order-last"
								height="550"
								src="/dinesh.jpg"
								width="550"
							/>
						</div>
					</div>
				</section>
				<section
					className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800"
					id="projects"
				>
					<div className="container px-4 md:px-6">
						<div className="flex flex-col items-center justify-center space-y-4 text-center">
							<div className="space-y-2">
								<h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
									Featured Projects
								</h2>
								<p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
									Explore a selection of Dinesh&apos;s recent interior design
									projects.
								</p>
							</div>
						</div>
						<div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-12">
							<Card>
								<Image
									alt="Project 1"
									className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
									height="310"
									src="/placeholder.svg"
									width="550"
								/>
								<CardHeader>
									<CardTitle>Modern Loft</CardTitle>
									<CardDescription>
										Transformed a dated loft into a bright, open-concept living
										space.
									</CardDescription>
								</CardHeader>
							</Card>
							<Card>
								<Image
									alt="Project 2"
									className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
									height="310"
									src="/placeholder.svg"
									width="550"
								/>
								<CardHeader>
									<CardTitle>Cozy Cabin Retreat</CardTitle>
									<CardDescription>
										Designed a warm, rustic cabin with a focus on natural
										materials.
									</CardDescription>
								</CardHeader>
							</Card>
							<Card>
								<Image
									alt="Project 3"
									className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
									height="310"
									src="/placeholder.svg"
									width="550"
								/>
								<CardHeader>
									<CardTitle>Minimalist Apartment</CardTitle>
									<CardDescription>
										Created a serene, pared-down living space with clean lines
										and neutral tones.
									</CardDescription>
								</CardHeader>
							</Card>
						</div>
					</div>
				</section>
				<section className="w-full py-12 md:py-24 lg:py-32" id="about">
					<div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
						<div className="space-y-2">
							<h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
								About Dinesh M
							</h2>
							<p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
								Dinesh M is a passionate interior designer with over a decade of
								experience. He believes in creating spaces that are not only
								beautiful, but also functional and tailored to the unique needs
								of his clients. His design philosophy focuses on incorporating
								natural elements, minimalist aesthetics, and sustainable
								materials to craft timeless, inspiring interiors.
							</p>
						</div>
						<Image
							alt="Dinesh M"
							className="mx-auto aspect-square overflow-hidden rounded-xl object-cover sm:w-full"
							height="550"
							src="/placeholder.svg"
							width="550"
						/>
					</div>
				</section>
				<section
					className="w-full py-12 md:py-24 lg:py-32 border-t"
					id="contact"
				>
					<div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
						<div className="space-y-3">
							<h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
								Get in Touch
							</h2>
							<p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
								Have a project in mind? Fill out the form below and Jane will be
								in touch.
							</p>
						</div>
						<div className="mx-auto w-full max-w-sm space-y-2">
							<form className="flex flex-col space-y-2">
								<Input className="max-w-lg" placeholder="Name" type="text" />
								<Input className="max-w-lg" placeholder="Email" type="email" />
								<Textarea className="max-w-lg" placeholder="Message" />
								<Button type="submit">Submit</Button>
							</form>
						</div>
					</div>
				</section>
			</main>
			<footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
				<p className="text-xs text-gray-500 dark:text-gray-400">
					© 2024 Dinesh M. All rights reserved.
				</p>
			</footer>
		</div>
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
