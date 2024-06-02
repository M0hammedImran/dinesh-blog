import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import {
	Card,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

export default function Page() {
	return (
		<div>
			<Navbar />
			<section
				className="w-full min-h-[calc(100svh-121px)] flex justify-center py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800"
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
									Created a serene, pared-down living space with clean lines and
									neutral tones.
								</CardDescription>
							</CardHeader>
						</Card>
					</div>
				</div>
			</section>
			<Footer />
		</div>
	);
}
