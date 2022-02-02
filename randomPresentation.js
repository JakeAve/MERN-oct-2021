const [, , ...alumnos] = process.argv;

const randomStudent = alumnos[Math.floor(Math.random() * alumnos.length)];

console.log(randomStudent);
