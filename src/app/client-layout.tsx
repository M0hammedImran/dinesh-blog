"use client";

import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

export default function ClientLayout({ children }: { children: ReactNode }) {
	const pathname = usePathname();

	if (pathname === "/") {
		return children;
	}

	return (
		<>
			<Navbar />
			{children}
			<Footer />
		</>
	);
}
