import Particles from "@/components/particles";
import type { ReactNode } from "react";

export default function layout({ children }: { children: ReactNode }) {
	return (
		<div className="overflow-x-hidden w-screen">
			<div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
			<Particles
				className="absolute inset-0 -z-10 animate-fade-in"
				quantity={100}
			/>

			{children}
		</div>
	);
}
