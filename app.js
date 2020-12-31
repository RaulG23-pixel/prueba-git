const arreglo = require("./data");
const fs = require("fs");
const EventEmitter = require("events");
const readline = require("readline");

//Eventos
const eventEmitter = new EventEmitter();

eventEmitter.on('tutorial', () => {
    arreglo.forEach((elem) => {console.log(elem.name)});
});
eventEmitter.on('directorio', () => {
    fs.mkdir('./directorio', {recurisve: true} ,(err) => {
        if(err){
            console.log(err);
        }else{
            console.log("El directorio ha sido creado!!");
        }
    })
});
eventEmitter.on('create', () => {
    fs.writeFile('mensaje.txt', 'Hola mundo', (err) => {
        if(err) throw err;
        console.log("El archivo se ha creado correctamente");
    })
});

class Person extends EventEmitter {
    constructor(name){
        super();
        this._name = name;
    }
    get name(){
        return this._name;
    }
}
const raul = new Person('Raul');
const pablo = new Person('Pablo');
pablo.on('name', () => {console.log("Mi nombre es: " + pablo.name)})
raul.on('name', () => {console.log("Mi nombre es: " + raul.name)})

//Readline
const rl = readline.createInterface({input: process.stdin, output: process.stdout});
let num1 = Math.floor(Math.random() * 10 ) + 1;
let num2 = Math.floor(Math.random() * 10 ) + 1;
let answer = num1 + num2;

rl.question(`¿Cuanto es ${num1} + ${num2}?: `, (userinput) => {
    if(userinput == answer){
        console.log("Correcto");
        rl.close();
    }else{
        console.log("Incorrecto");
        rl.close();
    }
})

