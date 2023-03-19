/* 2. Consultas: Usando Destructuring,
2.1 De los trainers, reportar si la asignatura (tecnología) es
remota o presencial y de los campers el nombre de salón.
2.2 El teléfono de la sede de Medellín y la dirección de la
sede de Bucaramanga
2.3 De la asignatura (tecnología) si tiene sandbox o no */

let myFormularioCampus = document.querySelector("#myFormularioCampus");
let myFormularioCampers = document.querySelector("#myFormularioCampers");
let myFormularioTrainers = document.querySelector("#myFormularioTrainers");
let myFormularioNiveles = document.querySelector("#myFormularioNiveles");
let myFormularioRoadmap = document.querySelector("#myFormularioRoadmap");
let campus = {};


let listar= (p1,campus)=>{
    let opciones = document.querySelector(p1);
    opciones.innerHTML = null; 
    for (let [val, id] of Object.entries(campus)) {
        opciones.insertAdjacentHTML("beforeend", `
            <option value="${val}">${val}</option>
        `);
    }
};
let listar1= (p1,p2)=>{
    let opciones = document.querySelector(p1);
    opciones.innerHTML = null; 
    for (let [id, val] of Object.entries(p2)) {
        opciones.insertAdjacentHTML("beforeend", `
            <option value="${id}">${val}</option>
        `);
    }
};
myFormularioCampus.addEventListener("submit", (e)=>{
    e.preventDefault();
    let data = Object.fromEntries(new FormData(e.target))
    campus[`${data.nombreSede}`] = {Niveles: [], Roadmap: [],  Camper: [], Trainers: []};
    listar('[name="sedeNivel"]', (campus));
    listar('[name="sedeRoadmap"]', (campus));
    listar('[name="sedeCampers"]', (campus));
    listar('[name="sedeTrainers"]', (campus));
    myFormularioCampus.reset();
    
});

myFormularioNiveles.addEventListener("submit", (e)=>{
    e.preventDefault();
    let data = Object.fromEntries(new FormData(e.target));
    let sedeNivel = data.sedeNivel;
    delete data.sedeNivel;
    campus[`${sedeNivel}`]["Niveles"].unshift(data); 
    listar1('[name="nivelCamper"]',Object.keys(data));
    listar1('[name="niveltrainer"]',Object.values(data));
    myFormularioNiveles.reset();
    // console.log(data);
})

myFormularioRoadmap.addEventListener("submit", (e)=>{
    e.preventDefault();
    let data = Object.fromEntries(new FormData(e.target));
    let sedeRoadmap = data.sedeRoadmap;
    delete data.sedeRoadmap;
    campus[`${sedeRoadmap}`]["Roadmap"].unshift(data);
    myFormularioRoadmap.reset();
});

myFormularioCampers.addEventListener("submit", (e)=>{
    e.preventDefault();
    let data = Object.fromEntries(new FormData(e.target));
    let sedeCampers = data.sedeCampers;
    delete data.sedeCampers;
    campus[`${sedeCampers}`]["Camper"].unshift(data);
    myFormularioCampers.reset();
})


myFormularioTrainers.addEventListener("submit", (e)=>{
    e.preventDefault();
    let data = Object.fromEntries(new FormData(e.target));
    let sedeTrainers = data.sedeTrainers;
    delete data.sedeTrainers;
    campus[`${sedeTrainers}`]["Trainers"].unshift(data);
    myFormularioTrainers.reset();
}) 

console.log(campus);

