let myFormularioCampus = document.querySelector("#myFormularioCampus");
let myFormularioPersonas = document.querySelector("#myFormularioPersonas");
let myFormularioPersonas2 = document.querySelector("#myFormularioPersonas2");
let campus = {};

myFormularioCampus.addEventListener("submit", (e)=>{
    e.preventDefault();
    let data = Object.fromEntries(new FormData(e.target))
    campus[`${data.nombreSede}`] = {Camper: [], Trainers: []};
    listaSedes();
    listaSedes1();
    myFormularioCampus.reset();
})

let listaSedes = ()=>{
    let opciones = document.querySelector("[name='sede']");
    opciones.innerHTML = null;
    for (let [val, id] of Object.entries(campus)) {
        opciones.insertAdjacentHTML("beforeend", `
            <option value="${val}">${val}</option>
        `);
    }
}

myFormularioPersonas.addEventListener("submit", (e)=>{
    e.preventDefault();
    let data = Object.fromEntries(new FormData(e.target));
    console.log(data);
    let sede = data.sede;
    delete data.sede;
    campus[`${sede}`]["Camper"].unshift(data);
    console.log(campus);
    myFormularioPersonas.reset();
})
let listaSedes1 = ()=>{
    let opciones = document.querySelector("[name='sede1']");
    opciones.innerHTML = null;
    for (let [val, id] of Object.entries(campus)) {
        opciones.insertAdjacentHTML("beforeend", `
            <option value="${val}">${val}</option>
        `);
    }
}
myFormularioPersonas2.addEventListener("submit", (e)=>{
    e.preventDefault();
    let data = Object.fromEntries(new FormData(e.target));
    console.log(data);
    let sede1 = data.sede1;
    delete data.sede1;
    campus[`${sede1}`]["Trainers"].unshift(data);
    console.log(campus);
    myFormularioPersonas2.reset();
})