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


// let listar= (p1,p2)=>{
//     let opciones = document.querySelector(p1);
//     opciones.innerHTML = null; 
//     for (let [val, id] of Object.entries(p2)) {
//         opciones.insertAdjacentHTML("beforeend", `
//             <option value="${id}">${id}</option>
//         `);
//     }
// };


myFormularioCampus.addEventListener("submit", (e)=>{
    e.preventDefault();
    let data = Object.fromEntries(new FormData(e.target))
    campus[`${data.nombreSede}`] = {Niveles: [], Roadmap: [],  Camper: [], Trainers: []};
    listaSedes();
    listaSedesN();
    listaSedesC();
    listaSedesT();
    myFormularioCampus.reset();
    // listar('[name="sedeRoadmap"]', [data.nombreSede]);
    // listar('[name="sedeNivel"]', [data.nombreSede]);
    // listar('[name="sedeCampers"]', [data.nombreSede]);
    // listar('[name="sedeTrainers"]', [data.nombreSede]);
    
});



let listaSedes = ()=>{
    let opciones = document.querySelector("[name='sedeNivel']");
    opciones.innerHTML = null;
    for (let [val, id] of Object.entries(campus)) {
        opciones.insertAdjacentHTML("beforeend", `
            <option value="${val}">${val}</option>
        `);
    }
}
 
myFormularioNiveles.addEventListener("submit", (e)=>{
    e.preventDefault();
    let data = Object.fromEntries(new FormData(e.target));
    console.log(data);
    let sedeNivel = data.sedeNivel;
    delete data.sedeNivel;
    campus[`${sedeNivel}`]["Niveles"].unshift(data); 
    /* listaSedesC('[name="nivelCampers"]', [data.nivel]); */
    myFormularioNiveles.reset();
})

let listaSedesN = ()=>{
    let opciones = document.querySelector("[name='sedeRoadmap']");
    opciones.innerHTML = null;
    for (let [val, id] of Object.entries(campus)) {
        opciones.insertAdjacentHTML("beforeend", `
            <option value="${val}">${val}</option>
        `);
    }
}


myFormularioRoadmap.addEventListener("submit", (e)=>{
    e.preventDefault();
    let data = Object.fromEntries(new FormData(e.target));
    console.log(data);
    let sedeRoadmap = data.sedeRoadmap;
    delete data.sedeRoadmap;
    campus[`${sedeRoadmap}`]["Roadmap"].unshift(data);
    myFormularioRoadmap.reset();
});

let listaSedesC = ()=>{
    let opciones = document.querySelector("[name='sedeCampers']");
    opciones.innerHTML = null;
    for (let [val, id] of Object.entries(campus)) {
        opciones.insertAdjacentHTML("beforeend", `
            <option value="${val}">${val}</option>
        `);
    }
}
myFormularioCampers.addEventListener("submit", (e)=>{
    e.preventDefault();
    let data = Object.fromEntries(new FormData(e.target));
    console.log(data);
    let sedeCampers = data.sedeCampers;
    delete data.sedeCampers;
    campus[`${sedeCampers}`]["Camper"].unshift(data);

    /* listar('[name="nivelCampers"]', Object.keys(campus)); */
    myFormularioCampers.reset();
})


let listaSedesT = ()=>{
    let opciones = document.querySelector("[name='sedeTrainers']");
    opciones.innerHTML = null;
    for (let [val, id] of Object.entries(campus)) {
        opciones.insertAdjacentHTML("beforeend", `
            <option value="${val}">${val}</option>
        `);
    }
}
myFormularioTrainers.addEventListener("submit", (e)=>{
    e.preventDefault();
    let data = Object.fromEntries(new FormData(e.target));
    console.log(data);
    let sedeTrainers = data.sedeTrainers;
    delete data.sedeTrainers;
    campus[`${sedeTrainers}`]["Trainers"].unshift(data);
    myFormularioTrainers.reset();
}) 
console.log(campus);