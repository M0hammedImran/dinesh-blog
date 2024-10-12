import Image from "next/image";

export default function Component() {
	return (
		<div className="min-h-[calc(100svh-121px)]">
			<section className="w-full flex justify-center py-12 md:py-24 lg:py-32 xl:py-48">
				<div className="container px-4 md:px-6">
					<div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
						<div className="flex flex-col justify-center space-y-4">
							<div className="space-y-2">
								<h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
									M. Dinesh
								</h1>
								<p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
									Passionate interior designer with a focus on creating
									beautiful, functional spaces that inspire.
								</p>
							</div>
						</div>
						<Image
							alt="M. Dinesh"
							className="mx-auto aspect-square overflow-hidden rounded-xl object-cover sm:w-full lg:order-last"
							height="550"
							src="/dinesh.jpeg"
							width="550"
						/>
					</div>
				</div>
			</section>

			<section
				className="w-full flex justify-center py-12 md:py-24 lg:py-32"
				id="about"
			>
				<div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
					<div className="space-y-2">
						<h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
							About M. Dinesh
						</h2>
						<p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
							{
								"M. Dinesh is a passionate interior designer with over 4 years of experience. He believes in creating spaces that are not only beautiful, but also functional and tailored to the unique needs of his clients. His design philosophy focuses on incorporating natural elements, minimalist aesthetics, and sustainable materials to craft timeless, inspiring interiors."
							}
						</p>
					</div>
					<Image
						alt="M. Dinesh"
						className="mx-auto aspect-square overflow-hidden rounded-xl object-cover sm:w-full"
						height="550"
						src="/dinesh-working.jpg"
						width="550"
					/>
				</div>
			</section>
		</div>
	);
}
