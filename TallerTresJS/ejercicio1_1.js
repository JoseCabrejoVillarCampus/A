/* 1. Construir un objeto literal "campus" que gestione
la info(PROPIEDADES) de Campus, trainers, campers, niveles,
tecnologías, teams y roadMap
1.1. De campus administrar los datos de contacto de las sedes en
Bucaramanga, Bogotá, Medellín y México
1.2. De los trainers y campers, su nombre, sus teléfonos, teams
(horarios de las teams=> día, hora y salones (nro y piso), y el
email, y de los campers también horarios de inglés y ser.
1.3. De los campers, también gestionar su nivel actual, como su
barrio y medio de transporte
1.4. De los niveles, su pre requisito, a que tecnología pertenece, si
es electiva u obligatoria
1.5. De la roadmap , Nro de créditos, año, Nro de asignaturas */




let myFormularioCampus = document.querySelector("#myFormularioCampus");
let myFormularioCampers = document.querySelector("#myFormularioCampers");
let myFormularioTrainers = document.querySelector("#myFormularioTrainers");
let myFormularioNiveles = document.querySelector("#myFormularioNiveles");
let myFormularioRoadmap = document.querySelector("#myFormularioRoadmap");
let campus = {};

myFormularioCampus.addEventListener("submit", (e)=>{
    e.preventDefault();
    let data = Object.fromEntries(new FormData(e.target))
    campus[`${data.nombreSede}`] = {roadmap: [], 
        Niveles: [], 
        Camper: [], 
        Trainers: []};
    listaSedes();
    listaSedesN();
    myFormularioCampus.reset();
})

let listaSedes = ()=>{
    let opciones = document.querySelector("[name='sede']");
    //opciones.innerHTML = null;
    for (let [val, id] of Object.entries(campus)) {
        opciones.insertAdjacentHTML("beforeend", `
            <option value="${val}">${val}</option>
        `);
    }
}



/* const valorSelec = document.querySelector('#Sniveles').value;
console.log(valorSelec); 
 */

/* 
myFormularioRoadmap.addEventListener("submit", (e)=>{
    e.preventDefault();
    let data = Object.fromEntries(new FormData(e.target));
    //console.log(data);
    let sede = data.sede;
    delete data.sede;
    //console.log("retorno sede: ", sede);
    campus[`${sede}`]["roadmap"].unshift(data);
    //console.log(campus);
    myFormularioRoadmap.reset();
}) */

let listaSedesN= ()=>{
    let opciones = document.querySelector("#Sniveles");
    opciones.innerHTML = null; 
    for (let [val, id] of Object.entries(campus)) {
        opciones.insertAdjacentHTML("beforeend", `
            <option value="${val}">${val}</option>
        `);
    }
}



myFormularioNiveles.addEventListener("submit", (e)=>{
    
    e.preventDefault();
    //console.log(campus);
    let data = Object.fromEntries(new FormData(e.target));
    //console.log(data);
    let sede = data.sede;
    console.log(sede);
    //delete data.sede;
    campus[`${sede}`]["Niveles"].unshift(data);
    console.log(campus);
    myFormularioNiveles.reset();
})

/* 
myFormularioCampers.addEventListener("submit", (e)=>{
    e.preventDefault();
    let data = Object.fromEntries(new FormData(e.target));
    console.log(data);
    let sede = data.sede;
    delete data.sede;
    campus[`${sede}`]["Camper"].unshift(data);
    console.log(campus);
    myFormularioCampers.reset();
})

myFormularioTrainers.addEventListener("submit", (e)=>{
    e.preventDefault();
    let data = Object.fromEntries(new FormData(e.target));
    console.log(data);
    let sede = data.sede;
    delete data.sede;
    campus[`${sede}`]["Trainer"].unshift(data);
    console.log(campus);
    myFormularioTrainers.reset();
}) */