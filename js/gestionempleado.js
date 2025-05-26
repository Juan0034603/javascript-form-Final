nombreLocalStore = "empleadosCECARdos"

function recuperarElementoFormulario() {

    empleados = leerDataStore(nombreLocalStore)


    identificacion = document.getElementById("identificacion")
    nombres = document.getElementById("nombres")
    apellidos = document.getElementById("apellidos")
    salario = document.getElementById("salario")

}



function verificarInsercionOAtualizacion() {
    
    recuperarElementoFormulario()
    var indiceEmpleadoEncontrado = empleados.findIndex(empleado => empleado.identificacion == identificacion.value)

    if (indiceEmpleadoEncontrado < 0) {

        guardar()

    } else {
        actualizar(indiceEmpleadoEncontrado)
    }

}


function guardar() {



    empleado = new Empleado(identificacion.value, nombres.value,
        apellidos.value, salario.value)

    escribirDaraStore(nombreLocalStore, empleado, empleados)

    alert('El empleado ha sido insertado con exito')


    console.table(empleados)

    nuevo()

}




function actualizar(indiceElementoActualizar) {


    // var indiceEmpleadoEncontrado = empleados.findIndex(empleado => empleado.identificacion == identificacion.value)

    if (indiceElementoActualizar >= 0) {
        empleados[indiceElementoActualizar].nombres = nombres.value
        empleados[indiceElementoActualizar].apellidos = apellidos.value
        empleados[indiceElementoActualizar].salario = salario.value

        escribirDataStoreConJSON(nombreLocalStore, empleados)
        alert('El empleado ha sido actualizado con exito')



    } else {
        alert('Empleado no se encuentra registrado')

    }

    nuevo()

}




function eliminar() {

    recuperarElementoFormulario()
    var indiceEmpleadoEncontrado = empleados.findIndex(empleado => empleado.identificacion == identificacion.value)

    if (indiceEmpleadoEncontrado >= 0) {
        empleados.splice(indiceEmpleadoEncontrado, 1)

        escribirDataStoreConJSON(nombreLocalStore, empleados)

        alert('Empleado ha sido eliminado con exito')

    } else {

        alert('El usuario no se encuentra registrado')

    }

}



function consultar() {

    var empleados = leerDataStore(nombreLocalStore)


    recuperarElementoFormulario()

    empleadoEncontrado = empleados.find(empleado => empleado.identificacion == identificacion.value)

    if (empleadoEncontrado !== undefined) {

        nombres.value = empleadoEncontrado.nombres
        apellidos.value = empleadoEncontrado.apellidos
        salario.value = empleadoEncontrado.salario

    } else {
        alert('Empleado no se encuentra registrado')
        nuevo()
    }

}

function nuevo() {

    document.getElementById("empleados").reset();
    document.getElementById("identificacion").focus()

} 


function listar() {
    empleados = leerDataStore(nombreLocalStore)
    empleados.forEach(empleado => {
        console.table(empleado)
    });
    nuevo()
}