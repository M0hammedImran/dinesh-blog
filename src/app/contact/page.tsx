import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Contact M. Dinesh",
};

export default function Page() {
	return (
		<section
			className="flex justify-center py-12 md:py-24 lg:py-32"
			id="contact"
		>
			<div className="container flex items-center justify-center flex-col gap-4 px-4 text-center md:px-6">
				<div className="space-y-3">
					<h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
						Get in Touch
					</h2>
					<p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
						Have a project in mind? Fill out the form below and Dinesh will be
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
	);
}
