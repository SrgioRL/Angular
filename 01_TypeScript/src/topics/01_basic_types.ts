
/* Para declarar tipos de variables se pueden encadenar varios tipos usando |, e incluso declarar un valor fijo.
number | string , number | "Full".

Si asignamos un valor a una variable no es necesario indicar su tipo,
TS lo atribuye automáticamente, aunque es buena práctica indicarlo. */


const name: string = "Aicar";
let hpPoints: number | string = 100;
let manaPoints: number | "full";
const isAlive: boolean = true;

hpPoints = 100;
manaPoints = "full";

console.log({ name, hpPoints, manaPoints, isAlive });

export {};
