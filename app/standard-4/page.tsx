import {
	KeyIdeasTable,
	type PhysicsRegentsKeyIdea,
} from "@/components/key-ideas-table";

const standard4KeyIdeas: PhysicsRegentsKeyIdea[] = [
	{
		header: (
			<>
				Key Idea 4:
				<br />
				Energy exists in many forms, and when these forms change energy is
				conserved.
			</>
		),
		sections: [
			{
				title:
					"4.1 Observe and describe transmission of various forms of energy.",
				points: [
					"describe and explain the exchange among potential energy, kinetic energy, and internal energy for simple mechanical systems, such as a pendulum, a roller coaster, a spring, a freely falling object",
					"predict velocities, heights, and spring compressions based on energy conservation",
					"determine the energy stored in a spring",
					"determine the factors that affect the period of a pendulum",
					"observe and explain energy conversions in real-world situations",
					"recognize and describe conversions among different forms of energy in real or hypothetical devices such as a motor, a generator, a photocell, a battery",
					"compare the power developed when the same work is done at different rates",
					"measure current and voltage in a circuit",
					"use measurements to determine the resistance of a circuit element",
					"interpret graphs of voltage versus current",
					"measure and compare the resistance of conductors of various lengths and cross-sectional areas",
					"construct simple series and parallel circuits",
					"draw and interpret circuit diagrams which include voltmeters and ammeters",
					"predict the behavior of lightbulbs in series and parallel circuits",
					"map the magnetic field of a permanent magnet, indicating the direction of the field between the N (north-seeking) and S (south-seeking) poles",
				],
			},
			{
				title:
					"4.3 Explain variations in wavelength and frequency in terms of the source of the vibrations that produce them, e.g., molecules, electrons, and nuclear particles.",
				points: [
					"compare the characteristics of two transverse waves such as amplitude, frequency, wavelength, speed, period, and phase",
					"draw wave forms with various characteristics",
					"identify nodes and antinodes in standing waves",
					"differentiate between transverse and longitudinal waves",
					"determine the speed of sound in air",
					"predict the superposition of two waves interfering constructively and destructively (indicating nodes, antinodes, and standing waves)",
					"observe, sketch, and interpret the behavior of wave fronts as they reflect, refract, and diffract",
					"draw ray diagrams to represent the reflection and refraction of waves",
					"determine empirically the index of refraction of a transparent medium",
				],
			},
		],
		key: "keyIdea4",
	},
	{
		header: (
			<>
				Key Idea 5:
				<br />
				Energy and matter interact through forces that result in changes in
				motion.
			</>
		),
		sections: [
			{
				description:
					"Explain and predict different patterns of motion of objects (e.g., linear and uniform circular motion, velocity and acceleration, momentum and inertia).",
				points: [
					"construct and interpret graphs of position, velocity, or acceleration versus time",
					"determine and interpret slopes and areas of motion graphs",
					"determine the acceleration due to gravity near the surface of Earth",
					"determine the resultant of two or more vectors graphically or algebraically",
					"draw scaled force diagrams using a ruler and a protractor",
					"resolve a vector into perpendicular components both graphically and algebraically",
					"sketch the theoretical path of a projectile",
					"use vector diagrams to analyze mechanical systems (equilibrium and non- equilibrium)",
					"verify Newton’s Second Law for linear motion",
					"determine the coefficient of friction for two surfaces",
					"verify Newton’s Second Law for uniform circular motion",
					"verify conservation of momentum",
					"determine a spring constant",
				],
			},
			{
				title:
					"5.3 Compare energy relationships within an atom’s nucleus to those outside the nucleus.",
				points: [
					"interpret energy-level diagrams",
					"correlate spectral lines with an energy-level diagram",
				],
			},
		],
		key: "keyIdea5",
	},
];

export default function Standard4() {
	return (
		<div className="flex items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
			<main className="flex flex-col gap-[32px] row-start-2 items-start font-serif text-pretty">
				<h1 className="font-bold text-3xl">STANDARD 4—The Physical Setting</h1>
				<h2 className="italic text-xl">
					Students will understand and apply scientific concepts, principles,
					and theories pertaining to the physical setting and living environment
					and recognize the historical development of ideas in science.
				</h2>
				<p className="italic">
					Science process skills should be based on a series of discoveries.
					Students learn most effectively when they have a central role in the
					discovery process. To that end, Standards 1, 2, 6, and 7 incorporate a
					student-centered, problem-solving approach to physics. This list is
					not intended to be an all-inclusive list of the content or skills that
					students are expected to master for their assessment. It should be a
					goal of the student to develop science process skills that will
					provide them with the background and curiosity to investigate
					important issues in the world around them.
				</p>
				<KeyIdeasTable keyIdeas={standard4KeyIdeas} />
			</main>
		</div>
	);
}
