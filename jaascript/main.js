const text = "en sus aniversarios habra ofertas, el descuento de:";
console.log(text);  /*meti el texto que esta en las comillas, lo meti dentro de la variable "text" y com "console.log" hise que me mostrara el texto en la consola de herramientas para desarrolladors*/

const number = 9;  /*en este es lo mismo con el texto, pero con numeros*/ 
console.log(number);

const date = new Date("2024/06/06 18:40:39");
console.log(date);   /*con el codigo "new date" meti la fecha y hora del dia que hice esto y eso lo meti en la variable "date", y use console.log para que lo mostrara*/ 

const span = document.body.querySelector("span");
document.body.addEventListener("click", (event) => {
    const { x, y, detail } = event;
    span.textContent = `Has hecho ${detail} CLICK en las coordenadas (${x}x${y})`;
});
console.log(span);
console.log({ x, y, detail });  /*aqui solo copie y pegue el codigo, no solo en java sino tambien otros codigos al css y el html, con unos cambios para que se vieran en la pagina; lo que hace es mostrarte las coordenadas en donde hiciste click*/
/*console.log()*/