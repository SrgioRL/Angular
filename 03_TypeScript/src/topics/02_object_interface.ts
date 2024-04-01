/* 
Podemos crear un interface para definir la estructura que deben tener nuestros objetos. 
Esto facilita la detección de errores en tiempo de compilación.

Al definir el objeto le asignamos como tipo el nombre del interface (objeto:interface)
Haciendo ctrl+. con el cursor en el objeto podemos seleccionar "Agregar propiedades que faltan" para crearlo automáticamente.

Si queremos que una propiedad sea opcional, usamos el caracter ? -> propiedad?: tipo. 
No es lo mismo que declarar como tipo undefined.

El nombre del interface debe empezar por Mayúscula
*/

const skills =["Bash", "Counter", "Healing", true, 123] //Al no tipar el array, se admiten varios tipos de datos
const skillsTipado: string[] = ["Bash", "Counter", "Healing"]; //Si tipamos (string[]) solo admitipos ese tipo

interface Character {
  name: string;
  hp: number;
  skills: string[];
  hometown?: string;
}

const pj: Character = {
  name: "Aicar",
  hp: 100,
  skills: ["Bash", "Counter"],
};

// Al definir el objeto con la interface, podemos asignar o modificar cualquier propiedad después de la creación del objeto.
pj.hometown = "Córdoba"; 

console.table(pj);

export {};
