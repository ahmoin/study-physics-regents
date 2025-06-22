import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
	return (
		<div className="flex items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
			<main className="flex flex-col gap-[32px] row-start-2 items-start font-serif text-pretty">
				<p className="font-serif outline p-4">
					This study physics regents website is intended to be a catalyst for
					significant change in how students approach the NYSED Physics Regents.
					The primary focus of a student's preparation should be on developing
					higher order problem-solving skills. The content of the Regents
					becomes the context and the vehicle for practicing these skills,
					rather than an end in itself.
				</p>
				<p>
					This study physics regents website has been written to assist students
					as they prepare for the assessment by processing skills of the New
					York State{" "}
					<i>Learning Standards for Mathematics, Science, and Technology.</i>{" "}
					This study physics regents website, including the skills section,
					should be seen as part of a continuum that elaborates the science
					content of{" "}
					<Button variant="link">
						<Link href="/standard-4">Standard 4.</Link>
					</Button>{" "}
					The Learning Standards for Mathematics, Science, and Technology
					identifies key ideas and performance indicators. This website should
					serve as a basis for personal study and understanding, providing
					insight for the interpretation and implementation of the core under
					standings. Key ideas are broad, unifying, general state statements of
					what students need to know. The performance indicators for each key
					idea are statements of what students should be able to do to provide
					evidence that they understand the key idea. As part of this continuum,
					this study physics regents website presents major understandings and
					skills that give specific detail to the concepts underlying each
					performance indicator.
				</p>
			</main>
		</div>
	);
}
