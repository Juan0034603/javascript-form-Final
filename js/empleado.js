class Empleado {

    constructor(identificacion,nombres,apellidos,salario) {

        this.identificacion = identificacion
        this.nombres = nombres
        this.apellidos = apellidos
        this.salario = salario

    }

    getIdentificacion() {
        return this.identificacion
    }

    setIdentificacion(identificacion) {

        this.identificacion = identificacion
    }

}