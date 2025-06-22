import React from "react";

interface PhysicsRegentsSection {
	title?: string | React.JSX.Element;
	description?: string | React.JSX.Element;
	points?: (string | React.JSX.Element)[];
}

export interface PhysicsRegentsKeyIdea {
	header: string | React.JSX.Element;
	key: React.Key;
	sections: PhysicsRegentsSection[];
}

export function KeyIdeasTable({
	keyIdeas,
}: {
	keyIdeas: PhysicsRegentsKeyIdea[];
}) {
	return (
		<div className="overflow-x-auto">
			<table className="min-w-full divide-y divide-zinc-700">
				<tbody className="bg-zinc-900 divide-y divide-zinc-700 text-zinc-200">
					{keyIdeas.map((keyIdea) => (
						<React.Fragment key={keyIdea.key}>
							<tr>
								<th className="px-6 py-3 bg-zinc-800 text-left text-xs font-medium text-zinc-400 uppercase tracking-wider">
									{keyIdea.header}
								</th>
							</tr>
							<tr>
								<td className="px-6 py-4">
									{keyIdea.sections.map((section, secIndex) => (
										<React.Fragment key={`section-${keyIdea.key}-${secIndex}`}>
											{section.title && (
												<>
													{section.title}
													<br />
												</>
											)}
											{section.description && (
												<>
													{section.description}
													<br />
												</>
											)}
											{section.points && (
												<ul className="list-disc pl-5">
													{section.points.map((point, pointIndex) => (
														<li
															key={`point-${keyIdea.key}-${secIndex}-${pointIndex}`}
														>
															{point}
														</li>
													))}
												</ul>
											)}
										</React.Fragment>
									))}
								</td>
							</tr>
						</React.Fragment>
					))}
				</tbody>
			</table>
		</div>
	);
}
