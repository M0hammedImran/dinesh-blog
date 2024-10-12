import { cn } from "@/lib/utils";

import Image from "next/image";

const images = [
	[
		"/kulkarni/390e78149995289.62f1f91072aef.png",
		"/kulkarni/41bf48149995289.62f1f9106f0f6.png",
		"/kulkarni/436d83149995289.62f1f910709c8.png",
	],
	[
		"/kulkarni/487f73149995289.62f1f9107239f.png",
		"/kulkarni/f8cadc149995289.62f1f91071c4b.png",
		"/kulkarni/0ed6b9149995289.62f1f217396f3.png",
	],
	[
		"/kulkarni/309bc1149995289.62f1f2173aad7.png",
		"/kulkarni/753238149995289.62f1f21738fec.png",
		"/kulkarni/0f4b61149995289.62f1f21739d98.png",
		"/kulkarni/b18e94149995289.62f1f2173a449.png",
	],
];

export default function Page() {
	return (
		<div>
			<h2 className="mt-10 scroll-m-20 pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
				The Kulkarni Residence
			</h2>
			<p className="leading-7 [&:not(:first-child)]:mt-6">
				A colorful 3BHK flat located in Kengeri, Bengaluru. A traditional
				looking home wrapped around with some happy colors and styled with
				antique collections close to the client's heart! Providing storage
				solutions along with a divine Puja Mandir for Indian households is
				always a bit of a task - but like always, we nailed it by optimizing the
				spaces. In this project, I worked on working drawings for all the
				furniture we designed and did site management.
			</p>

			<div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-6 items-start">
				{images.map((nestedImages, index) => (
					<div
						key={`col-${nestedImages.join(",")}`}
						className={cn(
							"grid gap-4 place-items-baseline",
							isLastItem(images, index)
								? "grid-cols-2 md:grid-cols-1 col-span-2 md:col-span-1"
								: "",
						)}
					>
						{nestedImages.map((image) => (
							<Image
								key={image}
								alt="Kulkarni Residence"
								className="rounded-xl"
								priority
								src={image}
								height={320}
								width={520}
							/>
						))}
					</div>
				))}
			</div>
		</div>
	);
}

function isLastItem(array: unknown[], index: number) {
	return index === array.length - 1;
}
