function leerDataStore(nombreStore) {

    return JSON.parse(localStorage.getItem(nombreStore) || "[]")


}


function escribirDaraStore(nombreStore, objetoInsertar, arrayJSON) {

    arrayJSON.push(objetoInsertar)

    localStorage.setItem(nombreStore, JSON.stringify(arrayJSON))

    }

    
function escribirDataStoreConJSON(nombreStore, arrayJSON) {

    localStorage.setItem(nombreStore, JSON.stringify(arrayJSON))
    
 }