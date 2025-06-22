export interface Question {
	content: string;
	choices: string[];
	correct: string;
}

export const questions: Question[] = [
	{
		content: "Which quantity is a vector?",
		choices: [
			"electric field",
			"electric potential difference",
			"electric charge",
			"electric power",
		],
		correct: "electric field",
	},
	{
		content:
			"What is the magnitude of the eastward component of the velocity of an airplane flying at 612 kilometers per hour in a direction 40.0° north of east?",
		choices: ["393 km/h", "469 km/h", "799 km/h", "952 km/h"],
		correct: "469 km/h", // Assuming 612 * cos(40) = 469.19
	},
	{
		content:
			"A car, initially traveling at 25 meters per second, is uniformly brought to rest as the brakes are applied over a distance of 40. meters. The magnitude of the average acceleration of the car while braking is",
		choices: ["0.31 m/s2", "0.63 m/s2", "7.8 m/s2", "16 m/s2"],
		correct: "7.8 m/s2", // Using v^2 = u^2 + 2as => 0 = 25^2 + 2*a*40 => 0 = 625 + 80a => a = -625/80 = -7.8125 m/s^2. Magnitude is 7.8 m/s^2.
	},
	{
		content:
			"A brick starts from rest and falls freely from the top of a building to the ground. As the brick falls, its acceleration",
		choices: [
			"increases and its speed increases",
			"increases and its speed is constant",
			"is constant and its speed increases",
			"is constant and its speed is constant",
		],
		correct: "is constant and its speed increases",
	},
	{
		content: "Which object has the greatest inertia?",
		choices: [
			"a 0.10-kg baseball traveling at 30. m/s",
			"a 70-kg sprinter traveling at 10. m/s",
			"a 1000-kg car traveling at 50. m/s",
			"a 2000-kg truck traveling at 20. m/s",
		],
		correct: "a 2000-kg truck traveling at 20. m/s",
	},
	{
		content: "An unbalanced force is always necessary to",
		choices: [
			"keep a body at rest",
			"keep a body moving with constant velocity",
			"change the speed of a body",
			"change the position of a body",
		],
		correct: "change the speed of a body", // An unbalanced force causes acceleration, which changes velocity (speed or direction). Changing speed is a direct consequence.
	},
	{
		content:
			"Space probes launched from Earth send information back to Earth from space in the form of",
		choices: [
			"mechanical waves",
			"sound waves",
			"longitudinal waves",
			"electromagnetic waves",
		],
		correct: "electromagnetic waves",
	},
	{
		content:
			"A ball is thrown from level ground at an angle of 55° above the horizontal and lands on level ground. Neglecting friction, if the ball is thrown again at the same angle but with a larger initial speed, the ball will travel",
		choices: [
			"higher and the same distance horizontally",
			"to the same maximum height and farther horizontally",
			"both higher and farther horizontally",
			"to the same maximum height and the same distance horizontally",
		],
		correct: "both higher and farther horizontally",
	},
];
