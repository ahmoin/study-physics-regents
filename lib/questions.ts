export interface Question {
	content: string;
	image?: string;
	caption?: string;
	choices: string[];
	correct: string;
	className?: string;
	explanations: { [key: number]: string };
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
		explanations: {
			1: "Correct. A vector quantity has both magnitude and direction. An electric field has both strength (magnitude) and a direction (the direction of the force on a positive test charge).",
			2: "Incorrect. Electric potential difference (voltage) is a scalar quantity, representing potential energy per unit charge.",
			3: "Incorrect. Electric charge is a scalar quantity, representing the fundamental property of matter that causes it to experience a force in an electromagnetic field.",
			4: "Incorrect. Electric power is a scalar quantity, representing the rate at which electrical energy is transferred.",
		},
	},
	{
		content:
			"What is the magnitude of the eastward component of the velocity of an airplane flying at 612 kilometers per hour in a direction 40.0° north of east?",
		choices: ["393 km/h", "469 km/h", "799 km/h", "952 km/h"],
		correct: "469 km/h",
		explanations: {
			1: "Incorrect. This would be the result if using sin(40°) instead of cos(40°) for the eastward component.",
			2: "Correct. The eastward component of the velocity is found using trigonometry: Velocity_east = Total Velocity × cos(angle). So, 612 km/h × cos(40.0°) ≈ 612 km/h × 0.766 ≈ 469.19 km/h.",
			3: "Incorrect. This value is too high and does not result from the correct trigonometric calculation.",
			4: "Incorrect. This value is significantly too high.",
		},
		className: "mb-12 sm:mb-4",
	},
	{
		content:
			"A car, initially traveling at 25 meters per second, is uniformly brought to rest as the brakes are applied over a distance of 40. meters. The magnitude of the average acceleration of the car while braking is",
		choices: ["0.31 m/s²", "0.63 m/s²", "7.8 m/s²", "16 m/s²"],
		correct: "7.8 m/s²",
		explanations: {
			1: "Incorrect. This result is too small; check your formula for acceleration.",
			2: "Incorrect. This result is too small; ensure you are using the correct kinematic equation.",
			3: "Correct. We use the kinematic equation v² = u² + 2as, where v is final velocity (0 m/s), u is initial velocity (25 m/s), and s is displacement (40 m). So, 0² = (25)² + 2 × a × 40. This simplifies to 0 = 625 + 80a. Solving for a gives a = -625 / 80 = -7.8125 m/s². The magnitude is 7.8 m/s².",
			4: "Incorrect. This result is too large; double-check your calculations.",
		},
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
		explanations: {
			1: "Incorrect. In free fall (neglecting air resistance), acceleration due to gravity is constant.",
			2: "Incorrect. In free fall, the speed continuously increases.",
			3: "Correct. For an object in free fall near the Earth's surface (neglecting air resistance), the acceleration due to gravity is constant (approximately 9.81 m/s²). Since there is a constant acceleration, the speed of the brick will continuously increase.",
			4: "Incorrect. While acceleration is constant, the speed is not constant; it increases due to the acceleration.",
		},
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
		explanations: {
			1: "Incorrect. Inertia is a measure of an object's resistance to changes in its state of motion and is directly proportional to its mass. This object has a small mass.",
			2: "Incorrect. While this mass is larger than the baseball, it's still significantly less than the car or truck.",
			3: "Incorrect. The truck has a greater mass than the car.",
			4: "Correct. Inertia is a property of an object that resists changes in its state of motion (its velocity). It is directly proportional to the mass of the object. Therefore, the object with the greatest mass has the greatest inertia. A 2000-kg truck has the largest mass among the given options.",
		},
	},
	{
		content: "An unbalanced force is always necessary to",
		choices: [
			"keep a body at rest",
			"keep a body moving with constant velocity",
			"change the speed of a body",
			"change the position of a body",
		],
		correct: "change the speed of a body",
		explanations: {
			1: "Incorrect. A body at rest has zero net force acting on it. An unbalanced force would cause it to move.",
			2: "Incorrect. A body moving with constant velocity has zero net force acting on it (Newton's First Law). An unbalanced force would change its velocity.",
			3: "Correct. According to Newton's Second Law of Motion (F=ma), an unbalanced (net) force causes an acceleration. Acceleration is a change in velocity, which can involve a change in speed, a change in direction, or both. Therefore, an unbalanced force is necessary to change the speed of a body.",
			4: "Incorrect. A body can change position (e.g., move at constant velocity) without an unbalanced force acting on it. An unbalanced force is specifically needed to change its *state* of motion (i.e., its velocity).",
		},
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
		explanations: {
			1: "Incorrect. Mechanical waves require a medium to travel. Space is largely a vacuum.",
			2: "Incorrect. Sound waves are a type of mechanical wave and cannot travel through the vacuum of space.",
			3: "Incorrect. Longitudinal waves are a type of mechanical wave (like sound waves) that require a medium.",
			4: "Correct. Electromagnetic waves (such as radio waves, microwaves, or light) do not require a medium to propagate and can travel through the vacuum of space. This is how space probes transmit data to Earth.",
		},
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
		explanations: {
			1: "Incorrect. A larger initial speed will also increase the horizontal distance traveled.",
			2: "Incorrect. A larger initial speed will also increase the maximum height reached.",
			3: "Correct. The initial speed has components for both vertical and horizontal motion. A larger initial speed means both a larger initial vertical velocity (leading to a greater maximum height) and a larger initial horizontal velocity (leading to a greater horizontal distance, or range), assuming the angle remains the same.",
			4: "Incorrect. Both maximum height and horizontal distance are dependent on the initial speed.",
		},
		className: "mb-12 sm:mb-4",
	},
	{
		content:
			"A photon collides with an electron, as represented in the diagram below.",
		image: "/photon-collision.svg",
		caption:
			"After the collision, the electron recoils and the photon is scattered in another direction with a longer wavelength than the incident photon. The increase in photon wavelength results because, during the collision, the photon",
		choices: [
			"loses energy to the electron",
			"gains momentum from the electron",
			"loses some speed",
			"generates a magnetic field",
		],
		correct: "loses energy to the electron",
		explanations: {
			1: "Correct. This scenario describes the Compton effect. When a photon collides with an electron, it transfers some of its energy and momentum to the electron. Since the photon loses energy, its frequency decreases, and its wavelength (which is inversely proportional to frequency, λ = c/f) increases.",
			2: "Incorrect. The photon loses momentum to the electron, causing the electron to recoil.",
			3: "Incorrect. Photons always travel at the speed of light in a vacuum (c), regardless of their energy or wavelength.",
			4: "Incorrect. While moving charges generate magnetic fields, this is not the primary reason for the change in photon wavelength in a Compton scattering event; it's about energy transfer.",
		},
		className: "h-full gap-4 mb-12 sm:mb-4",
	},
	{
		content:
			"What is the weight of a 60.0-kilogram student on the surface of Earth?",
		choices: ["0.164 N", "6.12 N", "60.0 N", "589 N"],
		correct: "589 N",
		explanations: {
			1: "Incorrect. This value is far too small. Weight is mass times gravity, not the reciprocal.",
			2: "Incorrect. This value is too small. It might be a calculation error with units or a wrong constant.",
			3: "Incorrect. This is the mass of the student in Newtons, which is incorrect. Mass is measured in kilograms, weight in Newtons.",
			4: "Correct. Weight is the force of gravity on an object and is calculated using the formula W = mg, where m is the mass and g is the acceleration due to gravity on Earth (approximately 9.81 m/s²). So, W = 60.0 kg × 9.81 m/s² = 588.6 N, which rounds to 589 N.",
		},
	},
	{
		content:
			"A 120-newton box is pulled by a 48-newton horizontal force across a horizontal surface at constant velocity. The coefficient of kinetic friction between the box and the horizontal surface is",
		choices: ["0.041", "0.40", "0.67", "2.5"],
		correct: "0.40",
		explanations: {
			1: "Incorrect. This value is too small. Ensure you are using the correct forces.",
			2: "Correct. When an object moves at constant velocity, the net force acting on it is zero. Therefore, the applied horizontal force is equal in magnitude to the kinetic friction force. The formula for kinetic friction is F_friction = μ_k × F_normal. On a horizontal surface, the normal force (F_normal) is equal to the weight of the box. So, 48 N = μ_k × 120 N. Solving for μ_k gives μ_k = 48 N / 120 N = 0.40.",
			3: "Incorrect. This value is incorrect. Check your division.",
			4: "Incorrect. This value is too large for a coefficient of friction. You might have inverted the fraction.",
		},
	},
	{
		content:
			"Box A has a mass of 10. kilograms and is at rest on a shelf that is 1.5 meters above the floor. Box B has a mass of 20. kilograms and is at rest on a shelf that is 3.0 meters above the floor. Compared to box A, box B has a gravitational potential energy relative to the floor that is",
		choices: [
			"one fourth as great",
			"the same",
			"twice as great",
			"four times as great",
		],
		correct: "four times as great",
		explanations: {
			1: "Incorrect. This would be true if the mass or height was proportionally smaller for Box B.",
			2: "Incorrect. The masses and heights are different, so the potential energies will be different.",
			3: "Incorrect. While Box B's mass is twice Box A's, its height is also twice, leading to a greater multiple.",
			4: "Correct. Gravitational potential energy (PE) is calculated as PE = mgh. For Box A: PE_A = 10 kg × g × 1.5 m = 15g. For Box B: PE_B = 20 kg × g × 3.0 m = 60g. Comparing PE_B to PE_A: PE_B / PE_A = (60g) / (15g) = 4. Therefore, Box B has four times the gravitational potential energy of Box A.",
		},
	},
	{
		content:
			"A 0.10-kilogram yo-yo is whirled at the end of a length of string in a horizontal circular path of radius 0.80 meter at a speed of 6.0 meters per second. The magnitude of the centripetal acceleration of the yo-yo is",
		choices: ["4.5 m/s²", "7.5 m/s²", "23 m/s²", "45 m/s²"],
		correct: "45 m/s²",
		explanations: {
			1: "Incorrect. This result is too small; check your formula and calculations.",
			2: "Incorrect. This result is too small; ensure you are squaring the velocity.",
			3: "Incorrect. This result is incorrect. Double-check your arithmetic.",
			4: "Correct. The magnitude of centripetal acceleration (a_c) is calculated using the formula a_c = v² / r, where v is the speed and r is the radius of the circular path. So, a_c = (6.0 m/s)² / 0.80 m = 36 m²/s² / 0.80 m = 45 m/s².",
		},
	},
	{
		content:
			"A 4.0-kilogram mass is initially at rest on a horizontal, frictionless surface. A constant 2.0-newton force to the east is applied to the mass for a 5.0-second interval. As a result of this action, the mass acquires a",
		choices: [
			"velocity of 10. m/s, east",
			"velocity of 10. m/s, west",
			"momentum of 10. kg•m/s, east",
			"momentum of 10. kg•m/s, west",
		],
		correct: "momentum of 10. kg•m/s, east",
		explanations: {
			1: "Incorrect. While the momentum is 10 kg•m/s, the velocity would be 10 kg•m/s / 4.0 kg = 2.5 m/s. The unit is also incorrect.",
			2: "Incorrect. The direction of motion would be east, in the direction of the applied force.",
			3: "Correct. The impulse (J) applied to an object is equal to the change in its momentum (Δp). Impulse is also calculated as Force (F) × time (Δt). So, J = FΔt = Δp. Given F = 2.0 N and Δt = 5.0 s, the impulse is 2.0 N × 5.0 s = 10 N•s. Since the mass is initially at rest, its initial momentum is 0. Therefore, the final momentum is 10 kg•m/s. The direction of momentum is the same as the direction of the force, which is east.",
			4: "Incorrect. The direction of momentum is east, in the direction of the applied force.",
		},
	},
	{
		content:
			"A motor lifts a 1.2 × 10⁴-newton elevator 9.0 meters in 15 seconds. The minimum power output of the motor is",
		choices: ["8.0 × 10² W", "7.2 × 10³ W", "1.0 × 10⁵ W", "1.6 × 10⁶ W"],
		correct: "7.2 × 10³ W",
		explanations: {
			1: "Incorrect. This value is too small. Ensure you are using the correct exponents.",
			2: "Correct. Power (P) is the rate at which work (W) is done, calculated as P = W / t. Work done against gravity is W = F × d, where F is the force (weight) and d is the distance. So, W = (1.2 × 10⁴ N) × 9.0 m = 1.08 × 10⁵ J. Then, P = (1.08 × 10⁵ J) / 15 s = 7200 W = 7.2 × 10³ W.",
			3: "Incorrect. This value is too large. Check your division by time.",
			4: "Incorrect. This value is significantly too large. Verify your calculations.",
		},
	},
	{
		content:
			"A train blows its horn, which emits a uniform sound as the train approaches a stationary observer. The observer hears a sound that has a",
		choices: [
			"lower frequency than the emitted sound and is decreasing in amplitude",
			"lower frequency than the emitted sound and is increasing in amplitude",
			"higher frequency than the emitted sound and is decreasing in amplitude",
			"higher frequency than the emitted sound and is increasing in amplitude",
		],
		correct:
			"higher frequency than the emitted sound and is increasing in amplitude",
		explanations: {
			1: "Incorrect. An approaching source results in a higher frequency, not lower. Amplitude would increase as it gets closer.",
			2: "Incorrect. An approaching source results in a higher frequency, not lower.",
			3: "Incorrect. As the train approaches, it gets closer to the observer, causing the amplitude (loudness) of the sound to increase, not decrease.",
			4: "Correct. This is an example of the Doppler effect. When a sound source (the train's horn) is approaching a stationary observer, the waves are compressed, leading to a higher observed frequency (higher pitch). Additionally, as the train gets closer to the observer, the intensity and therefore the amplitude of the sound waves increase, making the sound louder.",
		},
	},
	{
		content:
			"A wood block is pulled at constant velocity across a horizontal wood floor. Which type of energy increases in this block-floor system as the block moves?",
		choices: ["gravitational potential", "kinetic", "mechanical", "thermal"],
		correct: "thermal",
		explanations: {
			1: "Incorrect. Gravitational potential energy depends on height. Since the block is moving horizontally, its height does not change, so its gravitational potential energy remains constant.",
			2: "Incorrect. Kinetic energy depends on mass and velocity. Since the block is moving at a constant velocity, its kinetic energy remains constant.",
			3: "Incorrect. Mechanical energy is the sum of kinetic and potential energy. Since kinetic and gravitational potential energy are constant, and work is being done against friction, mechanical energy is not conserved but rather converted to thermal energy.",
			4: "Correct. When the wood block is pulled across the floor, there is kinetic friction between the block and the floor. This friction does negative work on the system, converting the mechanical energy (from the pulling force) into thermal energy. This increases the internal energy, and thus the temperature, of both the block and the floor, leading to an increase in thermal energy.",
		},
	},
	{
		content:
			"A total energy of 5.0 joules is used to move an electron from position *A* to position *B* in a uniform electric field. What is the potential difference between positions *A* and *B*?",
		choices: ["3.1 × 10¹⁹ V", "8.0 × 10⁻¹⁹ V", "3.2 × 10⁻²⁰ V", "3.1 × 10¹⁸ V"],
		correct: "3.1 × 10¹⁹ V",
		explanations: {
			1: "Correct. Potential difference (ΔV) is defined as the work done (W) per unit charge (q) to move a charge between two points in an electric field: ΔV = W / q. The charge of an electron (e) is approximately 1.602 × 10⁻¹⁹ C. So, ΔV = 5.0 J / (1.602 × 10⁻¹⁹ C) ≈ 3.12 × 10¹⁹ V, which rounds to 3.1 × 10¹⁹ V.",
			2: "Incorrect. This value is too small. You may have multiplied instead of dividing, or made an error with the exponent.",
			3: "Incorrect. This value is too small and has an incorrect exponent.",
			4: "Incorrect. This value is incorrect. Double-check your division and handling of scientific notation.",
		},
	},
	{
		content:
			"A 0.14-kilogram lacrosse ball, traveling west at 17 meters per second, is brought to rest with a 0.21-kilogram lacrosse stick. If the force applied by the lacrosse stick on the ball is 220 newtons east, the force applied by the ball on the stick is",
		choices: ["150 N east", "150 N west", "220 N east", "220 N west"],
		correct: "220 N west",
		explanations: {
			1: "Incorrect. The magnitude of the reaction force is equal, and the direction is opposite.",
			2: "Incorrect. The magnitude of the force is equal.",
			3: "Incorrect. The direction of the reaction force is opposite.",
			4: "Correct. According to Newton's Third Law of Motion, for every action, there is an equal and opposite reaction. If the lacrosse stick applies a force of 220 N East on the ball, then the ball must apply an equal and opposite force of 220 N West on the lacrosse stick.",
		},
	},
	{
		content:
			"Four wires are tested for electrical conductivity. All the wires have the same length and the same cross-sectional area, but are made of different metals. Which wire has the highest conductivity at 20°C?",
		choices: ["aluminum", "copper", "gold", "silver"],
		correct: "silver",
		explanations: {
			1: "Incorrect. Aluminum is a good conductor but not the best among the choices.",
			2: "Incorrect. Copper is an excellent conductor, widely used, but silver is superior.",
			3: "Incorrect. Gold is a good conductor and very resistant to corrosion, but silver has higher electrical conductivity.",
			4: "Correct. Among the common metals listed, silver has the highest electrical conductivity at room temperature (20°C).",
		},
	},
	{
		content:
			"The angle of incidence for a ray of light striking a plane mirror is 20°. What is the angle between the incident ray and the reflected ray?",
		choices: ["20°", "40°", "70°", "90°"],
		correct: "40°",
		explanations: {
			1: "Incorrect. This is the angle of incidence (and reflection), not the angle between the two rays.",
			2: "Correct. According to the Law of Reflection, the angle of incidence is equal to the angle of reflection. So, if the angle of incidence is 20°, the angle of reflection is also 20°. The angle between the incident ray and the reflected ray is the sum of these two angles: 20° (incident) + 20° (reflected) = 40°.",
			3: "Incorrect. This is the angle between the incident ray and the mirror surface (90 - 20 = 70).",
			4: "Incorrect. This would imply the light reflects perpendicular to the incident path, which is not true for a 20° angle of incidence.",
		},
	},
	{
		content:
			"As shown in the diagram below, mass *M* slides across a level, frictionless surface with speed *v_i_.* The mass strikes a spring at position *A*, causing the spring to compress. When the mass is at position *B*, it is moving at a slower speed, *v_f_.*",
		image: "/mass-strikes-spring.svg",
		caption:
			"Which statement best describes the energy conversion as the mass moves from position *A* to position *B*?",
		choices: [
			"Some of mass *M*’s kinetic energy is converted to elastic potential energy.",
			"All of mass *M*’s kinetic energy is converted to elastic potential energy.",
			"Some of mass *M*’s kinetic energy is converted to gravitational potential energy.",
			"All of mass *M*’s kinetic energy is converted to internal energy.",
		],
		correct:
			"Some of mass *M*’s kinetic energy is converted to elastic potential energy.",
		explanations: {
			1: "Correct. As the mass moves from position *A* to *B*, it compresses the spring. Since the mass is still moving at *v_f_* (a slower speed but not zero), it has not lost *all* its kinetic energy. The decrease in kinetic energy is converted into the stored energy within the spring, which is *elastic potential energy*.",
			2: "Incorrect. The mass is still moving at speed *v_f_*, which is not zero. Therefore, not *all* of its kinetic energy has been converted. Only if the mass momentarily came to a complete stop would all its kinetic energy at that instant be converted to elastic potential energy.",
			3: "Incorrect. The mass is sliding on a *level surface*, so its height is not changing. Therefore, its *gravitational potential energy* remains constant and is not involved in this conversion.",
			4: "Incorrect. The problem states the surface is *frictionless*. This implies that no energy is lost to *internal energy* (heat) due to friction. The primary energy conversion here is between kinetic energy and elastic potential energy.",
		},
	},
	{
		content:
			"The diagram below shows a magnetic compass placed between unlike magnetic poles.",
		image: "/compass-between-poles.svg",
		caption: "The north pole of the compass needle will point toward",
		choices: ["*A*", "*B*", "*C*", "*D*"],
		correct: "*C*",
		explanations: {
			1: "Incorrect. The north pole of a compass needle points in the direction of the magnetic field lines. Magnetic field lines originate from an external North pole and terminate at an external South pole. Therefore, the field lines point from the N pole (left) towards the S pole (right). Point *A* is to the left.",
			2: "Incorrect. The north pole of the compass needle will point in the direction of the magnetic field, which is from the external North (left) pole to the external South (right) pole. Point *B* is in perpendicular to the field. The compass needle's north pole will point in the direction of the magnetic field.",
			3: "Correct. Magnetic field lines emerge from the North pole of a magnet and enter the South pole. In the diagram, the external North pole is on the left and the external South pole is on the right. Therefore, the magnetic field lines between these two poles point from left to right. The north pole of a compass needle aligns itself with the direction of the magnetic field lines, so it will point to the right, towards the external South pole. Since *C* represents the rightward direction in the diagram, *C* is the correct answer.",
			4: "Incorrect. The north pole of the compass needle will point in the direction of the magnetic field, which is from the external North (left) pole to the external South (right) pole. Point *D* is in perpendicular to the field. The compass needle's north pole will point in the direction of the magnetic field.",
		},
	},
	// TODO: add question 24 in June '24
	// TODO: add image width and height parameters
	{
		content: "The diagram below represents an electric circuit.",
		image: "/3_6_9_circuit.svg",
		caption: "The equivalent resistance of the circuit is",
		choices: ["1.6 Ω", "2.0 Ω", "6.0 Ω", "18 Ω"],
		correct: "1.6 Ω",
		explanations: {
			1: "Correct. For resistors connected in *parallel*, the equivalent resistance (*R_eq_*) is calculated using the formula: *1/R_eq_ = 1/R_1 + 1/R_2 + 1/R_3*. Plugging in the values: *1/R_eq_ = 1/3.0 Ω + 1/6.0 Ω + 1/9.0 Ω*. To add these fractions, find a common denominator, which is 18. So, *1/R_eq_ = 6/18 Ω + 3/18 Ω + 2/18 Ω = 11/18 Ω*. To find *R_eq_*, take the reciprocal: *R_eq_ = 18/11 Ω ≈ 1.636 Ω*, which rounds to *1.6 Ω*.",
			2: "Incorrect. This value is obtained if you made an error in finding the common denominator or taking the reciprocal. Recalculate using the parallel resistance formula.",
			3: "Incorrect. This is the value of one of the resistors (6.0 Ω) and does not represent the equivalent resistance of the parallel combination. The equivalent resistance of a parallel circuit is always less than the smallest individual resistance.",
			4: "Incorrect. This value is the sum of the resistances (*3 + 6 + 9 = 18 Ω*), which would be the equivalent resistance if the resistors were connected in *series*, not in parallel.",
		},
	},
	{
		content:
			"An object is thrown vertically upward with an initial velocity of 9.81 meters per second. What is the maximum height reached by the object? [Neglect friction.]",
		choices: ["1.00 m", "4.91 m", "9.81 m", "19.6 m"],
		correct: "4.91 m",
		explanations: {
			1: "Incorrect. This result is too small. Double-check your kinematic equation and calculations.",
			2: "Correct. To find the maximum height, we can use the kinematic equation *v² = u² + 2as*. At the maximum height, the final velocity (*v*) is 0 m/s. The initial velocity (*u*) is 9.81 m/s. The acceleration (*a*) is due to gravity, *g* = -9.81 m/s² (negative because it opposes upward motion). So, *0² = (9.81 m/s)² + 2 × (-9.81 m/s²) × s*. This simplifies to *0 = 96.2361 - 19.62s*. Solving for *s*: *s = 96.2361 / 19.62 ≈ 4.905 m*, which rounds to *4.91 m*.",
			3: "Incorrect. This is the initial velocity, not the maximum height reached. At this height, the object would have more kinetic energy.",
			4: "Incorrect. This value is approximately twice the correct answer. You might have made an error in the kinematic equation or calculation.",
		},
	},
	{
		content: "Which type of photon has the least amount of energy?",
		choices: ["ultraviolet", "visible light", "infrared", "radio"],
		correct: "radio",
		explanations: {
			1: "Incorrect. *Ultraviolet* photons have higher energy than visible, infrared, and radio photons. They are on the high-energy end of the electromagnetic spectrum, known for causing sunburns.",
			2: "Incorrect. *Visible light* photons have more energy than infrared and radio photons, but less than ultraviolet and X-ray photons.",
			3: "Incorrect. *Infrared* photons have less energy than visible and ultraviolet photons, but more energy than radio photons.",
			4: "Correct. The energy of a photon is directly proportional to its frequency (*E = hf*) and inversely proportional to its wavelength (*E = hc/λ*). In the electromagnetic spectrum, *radio waves* have the longest wavelengths and lowest frequencies, meaning they carry the *least amount of energy* per photon.",
		},
	},
	{
		content:
			"A 7.5-kilogram object moving at 20. meters per second strikes a 60.-kilogram object initially at rest on a horizontal, frictionless surface. The two objects stick together and move off at a speed of",
		choices: ["0.33 m/s", "2.2 m/s", "2.5 m/s", "18 m/s"],
		correct: "2.2 m/s",
		explanations: {
			1: "Incorrect. This value is too small. Check your conservation of momentum calculation.",
			2: "Correct. This is a problem involving *conservation of momentum* in an inelastic collision (since the objects stick together). The total momentum before the collision equals the total momentum after the collision. *m_1u_1 + m_2u_2 = (m_1 + m_2)v_f_*. Given *m_1 = 7.5 kg*, *u_1 = 20. m/s*, *m_2 = 60. kg*, *u_2 = 0 m/s*. So, *(7.5 kg × 20. m/s) + (60. kg × 0 m/s) = (7.5 kg + 60. kg) × v_f_*. This simplifies to *150 kg•m/s = 67.5 kg × v_f_*. Solving for *v_f_*: *v_f_ = 150 / 67.5 ≈ 2.22 m/s*, which rounds to *2.2 m/s*.",
			3: "Incorrect. You might have made a calculation error, perhaps with the total mass.",
			4: "Incorrect. This value is too large and suggests an error in applying the conservation of momentum formula.",
		},
	},
	{
		content:
			"How is the electrostatic force between two positive charges affected as the charges are brought closer together?",
		choices: [
			"The force of attraction between them increases.",
			"The force of repulsion between them increases.",
			"The force of attraction between them decreases.",
			"The force of repulsion between them decreases.",
		],
		correct: "The force of repulsion between them increases.",
		explanations: {
			1: "Incorrect. Like charges (*two positive charges*) always *repel* each other, they do not attract.",
			2: "Correct. According to *Coulomb's Law*, the electrostatic force between two charges is *inversely proportional* to the square of the distance between them (*F ∝ 1/r²*). This means as the distance (*r*) between the charges decreases (they are brought closer together), the force between them increases. Also, since both charges are *positive* (like charges), the force between them will be a *force of repulsion*.",
			3: "Incorrect. Like charges repel, they do not attract. Additionally, bringing them closer *increases* the force, it does not decrease it.",
			4: "Incorrect. While it's a force of repulsion, bringing the charges *closer* together will *increase* the force, not decrease it.",
		},
	},
	{
		content:
			"What is one difference between magnetic forces and gravitational forces?",
		choices: [
			"Magnetic forces are always attractive, whereas gravitational forces are always repulsive.",
			"Magnetic forces are always repulsive, whereas gravitational forces are always attractive.",
			"Magnetic forces may be attractive or repulsive, whereas gravitational forces are always attractive.",
			"Magnetic forces may be attractive or repulsive, whereas gravitational forces are always repulsive.",
		],
		correct:
			"Magnetic forces may be attractive or repulsive, whereas gravitational forces are always attractive.",
		explanations: {
			1: "Incorrect. Magnetic forces can be repulsive (like poles repel), and gravitational forces are always attractive.",
			2: "Incorrect. Magnetic forces can be attractive (unlike poles attract), and gravitational forces are always attractive.",
			3: "Correct. *Magnetic forces* can be both *attractive* (between opposite poles, e.g., North and South) and *repulsive* (between like poles, e.g., North and North, or South and South). In contrast, *gravitational forces* are *always attractive* between any two masses.",
			4: "Incorrect. Gravitational forces are always attractive, never repulsive.",
		},
	},
];
