export default function Footer() {
	return (
		<footer className="flex flex-col gap-6 py-6 w-full shrink-0 items-center px-4 md:px-6">
			<div className="w-full h-px animate-glow md:block animate-pulse bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
			<p className="text-xs text-gray-500 block dark:text-gray-400">
				© 2024 M. Dinesh. All rights reserved.
			</p>
		</footer>
	);
}
