import {
	Card,
	CardContent,
	CardDescription,
	CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

const projects = [
	{
		title: "The Kulkarni Residence",
		description: "A colorful 3BHK flat located in Kengeri, Bengaluru",
		image: "/kulkarni/df1cda149995289.62f1f91071461.jpg",
		href: "/blog/kulkarni-residence",
	},
	{
		title: "Agency 2017",
		description:
			"Designed a warm, rustic cabin with a focus on natural materials.",
		image: "/agency-2017/c70dc0150009815.63090777c1426.jpg",
		href: "/blog/agency-2017",
	},
	{
		title: "Reflections - 3BHK Flat",
		description: "A fusion of vibrant colors and industrial design",
		image: "/reflections-3bhk/e0fbf2155045865.634d936f24db7.jpg",
		href: "/blog/reflections-3bhk-flat",
	},
] as const;

export default function Page() {
	return (
		<div className="overflow-x-hidden min-h-[calc(100svh-146px)]">
			<section
				className="w-full flex justify-center py-12 md:py-24 lg:py-32"
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
					<div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 py-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-12">
						{projects.map((project) => (
							<Link key={project.href} href={project.href}>
								<Card className="overflow-hidden !bg-transparent">
									<Image
										alt={project.title}
										className="mx-auto aspect-square object-cover object-center sm:w-full"
										height="550"
										src={project.image}
										width="550"
									/>
									<CardContent className="mt-6">
										<CardTitle className="text-xl">{project.title}</CardTitle>
										<CardDescription>{project.description}</CardDescription>
									</CardContent>
								</Card>
							</Link>
						))}
					</div>
				</div>
			</section>
		</div>
	);
}
