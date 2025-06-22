"use client";

import { useCallback, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { type Question, questions } from "@/lib/questions";
import { cn } from "@/lib/utils";

export default function QuizPage() {
	const [currentQuestion, setCurrentQuestion] = useState<Question | null>(null);
	const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
	const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
	const [showFeedback, setShowFeedback] = useState<boolean>(false);

	const getRandomQuestion = useCallback(() => {
		const randomIndex = Math.floor(Math.random() * questions.length);
		return questions[randomIndex];
	}, []);

	useEffect(() => {
		setCurrentQuestion(getRandomQuestion());
	}, [getRandomQuestion]);

	const handleAnswerSelect = (choice: string) => {
		if (!showFeedback) {
			setSelectedAnswer(choice);
			setIsCorrect(choice === currentQuestion?.correct);
		}
	};

	const handleCheckAnswer = () => {
		if (selectedAnswer !== null) {
			setShowFeedback(true);
		}
	};

	const handleContinue = () => {
		setShowFeedback(false);
		setSelectedAnswer(null);
		setIsCorrect(null);
		setCurrentQuestion(getRandomQuestion());
	};

	if (!currentQuestion) {
		return null;
	}

	const feedbackMessage = isCorrect
		? "Correct!"
		: "Incorrect. Try again on the next question!";

	const feedbackBgColor = isCorrect ? "bg-green-500" : "bg-red-500";

	return (
		<div className="flex flex-col items-center min-h-screen pt-8 px-8 pb-20 font-[family-name:var(--font-geist-sans)]">
			<main className="w-full max-w-2xl font-serif text-pretty">
				<div className="p-6 rounded-lg shadow-lg">
					<div
						className={cn(
							currentQuestion.content.length > 200 ? "mb-16" : "mb-4",
							"h-48 sm:h-32 flex items-end justify-start sm:mb-4",
						)}
					>
						<h2 className="text-xl font-semibold text-left leading-tight text-pretty">
							{currentQuestion.content}
						</h2>
					</div>

					<div className="h-[200px] space-y-3 mb-4 flex flex-col justify-center">
						{currentQuestion.choices.map((choice) => (
							<Button
								key={choice}
								variant={
									showFeedback
										? choice === currentQuestion.correct
											? "positive"
											: selectedAnswer === choice
												? "destructive"
												: "outline"
										: selectedAnswer === choice
											? "secondary"
											: "outline"
								}
								onClick={() => handleAnswerSelect(choice)}
								disabled={showFeedback}
								className="w-full justify-start text-left whitespace-normal h-auto py-2"
							>
								{choice}
							</Button>
						))}
					</div>

					<div className="min-h-[40px] mb-4">
						{showFeedback ? (
							<Button
								onClick={handleContinue}
								className={cn("w-full transition-opacity duration-300")}
								variant="default"
							>
								Continue
							</Button>
						) : (
							<Button
								onClick={handleCheckAnswer}
								className={cn(
									"w-full transition-opacity duration-300",
									selectedAnswer !== null
										? "opacity-100"
										: "opacity-0 pointer-events-none",
								)}
								variant="default"
								disabled={selectedAnswer === null}
							>
								Check Answer
							</Button>
						)}
					</div>

					<div className="min-h-[48px]">
						<div
							className={cn(
								"p-3 rounded-md text-center transition-all duration-300 ease-in-out",
								showFeedback
									? `${feedbackBgColor} opacity-100`
									: "bg-transparent opacity-0",
							)}
						>
							{showFeedback ? feedbackMessage : " "}
						</div>
					</div>
				</div>
			</main>
		</div>
	);
}
