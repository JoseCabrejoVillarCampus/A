/* 2. Consultas: Usando Destructuring,
2.1 De los trainers, reportar si la asignatura (tecnología) es
remota o presencial y de los campers el nombre de salón.
2.2 El teléfono de la sede de Medellín y la dirección de la
sede de Bucaramanga
2.3 De la asignatura (tecnología) si tiene sandbox o no */

myFormularioCampus.addEventListener("submit", (e)=>{
    e.preventDefault();
    let data = Object.fromEntries(new FormData(e.target))
    campus[`${data.nombreSede}`] = {Niveles: [], Roadmap: [],  Camper: [], Trainers: []};
   /*  listaSedes();
    listaSedesN();
    listaSedesC();
    listaSedesT(); */
    myFormularioCampus.reset();
    listar('[name="sedeRoadmap"]', [data.nombreSede]);
    listar('[name="sedeNivel"]', [data.nombreSede]);
    listar('[name="sedeCampers"]', [data.nombreSede]);
    listar('[name="sedeTrainers"]', [data.nombreSede]);
    
});

let listar = (p1,p2)=>{
    let opciones = document.querySelector(p1);
    opciones.innerHTML = null;
    for (let [val, id] of Object.entries(p2)) {
        opciones.insertAdjacentHTML("beforeend", `
            <option value="${val}">${val}</option>
        `);

/* let listaSedes = ()=>{
    let opciones = document.querySelector("[name='sedeNivel']");
    opciones.innerHTML = null;
    for (let [val, id] of Object.entries(campus)) {
        opciones.insertAdjacentHTML("beforeend", `
            <option value="${val}">${val}</option>
        `);
    }
} */
 
myFormularioNiveles.addEventListener("submit", (e)=>{
    e.preventDefault();
    let data = Object.fromEntries(new FormData(e.target));
    console.log(data);
    let sedeNivel = data.sedeNivel;
    delete data.sedeNivel;
    campus[`${sedeNivel}`]["Niveles"].unshift(data); 
    listaSedes('[name="nivelCampers"]', [data.nivel]);
    myFormularioNiveles.reset();
})

/* let listaSedesN = ()=>{
    let opciones = document.querySelector("[name='sedeRoadmap']");
    opciones.innerHTML = null;
    for (let [val, id] of Object.entries(campus)) {
        opciones.insertAdjacentHTML("beforeend", `
            <option value="${val}">${val}</option>
        `);
    }
}
 */

myFormularioRoadmap.addEventListener("submit", (e)=>{
    e.preventDefault();
    let data = Object.fromEntries(new FormData(e.target));
    console.log(data);
    let sedeRoadmap = data.sedeRoadmap;
    delete data.sedeRoadmap;
    campus[`${sedeRoadmap}`]["Roadmap"].unshift(data);
    myFormularioRoadmap.reset();
});

/* let listaSedesC = ()=>{
    let opciones = document.querySelector("[name='sedeCampers']");
    opciones.innerHTML = null;
    for (let [val, id] of Object.entries(campus)) {
        opciones.insertAdjacentHTML("beforeend", `
            <option value="${val}">${val}</option>
        `);
    }
} */
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

/* let listaSedesT = ()=>{
    let opciones = document.querySelector("[name='sedeTrainers']");
    opciones.innerHTML = null;
    for (let [val, id] of Object.entries(campus)) {
        opciones.insertAdjacentHTML("beforeend", `
            <option value="${val}">${val}</option>
        `);
    }
} */
myFormularioTrainers.addEventListener("submit", (e)=>{
    e.preventDefault();
    let data = Object.fromEntries(new FormData(e.target));
    console.log(data);
    let sedeTrainers = data.sedeTrainers;
    delete data.sedeTrainers;
    campus[`${sedeTrainers}`]["Trainers"].unshift(data);
    myFormularioTrainers.reset();
}); 
