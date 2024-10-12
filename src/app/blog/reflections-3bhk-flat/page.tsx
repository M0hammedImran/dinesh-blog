import Image from "next/image";

const drawings = [
	"/reflections-3bhk/2f4d2d155045865.634d9f1b1133b.jpg",
	"/reflections-3bhk/3f1299155045865.634d9f1b0c952.jpg",
	"/reflections-3bhk/4e1faf155045865.634d9f1b0ae77.jpg",
	"/reflections-3bhk/25fe90155045865.634d9f1b107b8.jpg",
	"/reflections-3bhk/52fa45155045865.634d9f1b0fc22.jpg",
	"/reflections-3bhk/65f369155045865.634d9f1b0bb01.jpg",
	"/reflections-3bhk/aad779155045865.634d9f1b0e3c6.jpg",
	"/reflections-3bhk/b7a1bc155045865.634d9f1b0f0a6.jpg",
	"/reflections-3bhk/ba27b3155045865.634d9f1b0d6f2.jpg",
	"/reflections-3bhk/d74037155045865.634d9f1b11f59.jpg",
];

const finalProduct = [
	"/reflections-3bhk/6b6239155045865.634d9f1c4431b.jpg",
	"/reflections-3bhk/74b236155045865.634d9f1bb4e26.jpg",
	"/reflections-3bhk/885e51155045865.634d9f1c433cf.jpg",
];
const vanityArea = [
	"/reflections-3bhk/43c856155045865.634d9f1d56d32.jpg",
	"/reflections-3bhk/2365f5155045865.634d9f1d57bda.jpg",
];

export default function Page() {
	return (
		<div>
			<h2 className="mt-10 scroll-m-20 pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
				Reflections—3BHK Flat
			</h2>
			<p className="leading-7 [&:not(:first-child)]:mt-6">
				This was my last project at The Kumar Images, we designed and delivered
				for a family of four. A warm home filled with whites and browns with
				pretty details merged in every corner, not just a feast for the eyes,
				but a happy place we created to live. I worked on RCP drawings and one
				product working drawing. This project taught me more about communication
				with clients and site management.
			</p>

			<div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4">
				{drawings.map((src) => (
					<Image
						key={src}
						src={src}
						alt="drawings"
						className="rounded-xl"
						width={450}
						height={450}
					/>
				))}
			</div>

			<h3 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
				Working Drawing of the wooden partition between living and dining area.
			</h3>

			<Image
				src={"/reflections-3bhk/2a4205155045865.634d936f23ddd.jpg"}
				alt="drawings"
				loading="lazy"
				height={1200}
				width={1000}
				className="mt-4 rounded-xl"
			/>

			<h3 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
				Final Product
			</h3>

			<div className="grid grid-cols-1 gap-4 mt-4 md:grid-cols-3">
				{finalProduct.map((src) => (
					<Image
						key={src}
						src={src}
						alt="final product"
						className="rounded-xl"
						width={450}
						height={450}
					/>
				))}
			</div>

			<h3 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
				Vanity Area
			</h3>

			<div className="grid grid-cols-1 gap-4 mt-4 md:grid-cols-3">
				{vanityArea.map((src) => (
					<Image
						key={src}
						src={src}
						alt="final product"
						className="rounded-xl"
						width={450}
						height={450}
					/>
				))}
			</div>

			<h3 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
				A walk Through in Living area
			</h3>

			<video controls muted className="w-96 rounded-xl mt-4">
				<source
					src="/reflections-3bhk/master.m3u8"
					type="application/x-mpegURL"
				/>
				<source src="/reflections-3bhk/walk-through.mp4" type="video/mp4" />
				<track kind="metadata" label="segment-metadata" />
			</video>

			<p className="leading-7 [&:not(:first-child)]:mt-6">
				In summary, Reflection — a breathtaking 3BHK residence project nestled
				in the heart of Bangalore, epitomizes elegance and sophistication in
				every detail. From its meticulously crafted interiors to its serene
				surroundings, it stands as a testament to unparalleled beauty and
				thoughtful design.
			</p>
		</div>
	);
}
