import type React from "react";
import { cn } from "@/lib/utils";

interface FractionDisplayProps {
	numerator: React.ReactNode;
	denominator: React.ReactNode;
}

export function FractionDisplay({
	numerator,
	denominator,
	className,
}: React.ComponentProps<"span"> & FractionDisplayProps) {
	return (
		<span
			className={cn(
				"inline-flex flex-col items-center leading-none",
				className,
			)}
		>
			<span className="text-[0.7em] border-b border-current pb-[0.05em] px-[0.1em]">
				{numerator}
			</span>
			<span className="text-[0.7em] pt-[0.05em] px-[0.1em]">{denominator}</span>
		</span>
	);
}
