/**
 * Se muestran dos maneras de declarar funciones en TypeScript:
 * 1. Declaración normal de función (function addNumbers).
 * 2. La expresión de función flecha (const addNumberArrow).
 * En ambas funciones se usa el tipado de parámetros y de retorno.
 *
 * Los objetos pueden ser utilizados como argumentos en funciones (ejemplo de 'healCharacter').
 * Un objeto tipado con la interfaz 'Character' es pasado como argumento
 * y modificado dentro de la función.
 */

function addNumbers(a: number, b: number): number {
  return a + b;
}

const addNumberArrow = (a: number, b: number): string => {
  return `${a + b}`; // `${}`convierte expresiones en cadenas
};

function multiply(
  firstNumber: number,
  secondNumber?: number,
  base: number = 2
) {
  return firstNumber * base;
}

const result: number = addNumbers(1, 2);
const result2: string = addNumberArrow(1, 2);
const multiplyResult: number = multiply(5);
console.log({ result, result2, multiplyResult });

interface Character {
  name: string;
  hp: number;
  showHp: () => void;
}

const healCharacter = (character: Character, amount: number) => { // Tipamos un parámetro objeto como interface
  character.hp += amount;
};

const aicar: Character = {
  name: "Aicar",
  hp: 50,
  showHp() {
    console.log(`Puntos de vida ${this.hp}`); // Se convierte this.hp a cadena de texto
  },
};

healCharacter(aicar, 50);
aicar.showHp();
export {};
