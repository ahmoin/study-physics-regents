import type React from "react";

export function formatText(text: string): React.ReactNode[] {
	if (!text) {
		return [];
	}

	const parts: React.ReactNode[] = [];
	let lastIndex = 0;

	const regex = /(\*(.*?)\*|_([^_]*?)_)/g;

	let match: RegExpExecArray | null;

	while (true) {
		match = regex.exec(text);

		if (match === null) {
			break;
		}

		if (match.index > lastIndex) {
			parts.push(text.substring(lastIndex, match.index));
		}

		if (match[2] !== undefined) {
			parts.push(
				<span key={`italic-${match.index}`} className="italic">
					{formatText(match[2])}
				</span>,
			);
		} else if (match[3] !== undefined) {
			parts.push(
				<sub key={`subscript-${match.index}`}>{formatText(match[3])}</sub>,
			);
		}
		lastIndex = regex.lastIndex;
	}

	if (lastIndex < text.length) {
		parts.push(text.substring(lastIndex));
	}

	return parts;
}
