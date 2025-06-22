import { siteConfig } from "@/lib/config";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function SiteHeader() {
	return (
		<header className="bg-background sticky top-0 z-50 w-full border-b border-zinc-800">
			<div className="container-wrapper 3xl:fixed:px-0 px-6">
				<div className="flex justify-start h-12 items-center gap-2 font-serif italic">
					<Button variant="link" className="font-bold">
						<Link href="/">{siteConfig.name}</Link>
					</Button>
					<Button variant="link" className="font-bold">
						<Link href="/standard-4">Standard 4</Link>
					</Button>
				</div>
			</div>
		</header>
	);
}
