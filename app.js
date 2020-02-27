// indexedDB: Reforzamiento
let request=window.indexedDB.open("base",3);

request.addEventListener("upgradeneeded",e=>{
let result=e.target.result;
console.log("hola Ha bajado de version fallo el registro")
console.log("hola Ha bajado de version")

})








