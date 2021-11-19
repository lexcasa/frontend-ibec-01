let tbody = document.querySelector("tbody")

const buscarPersona = function () {
    let documento = document.querySelector("#cedula").value
    let persona = PersonaService(pers).buscarPersona(documento)

    if (persona) {
        let tpl = `
            <tr>
                <td>${persona.nombre}</td>
                <td>${persona.cedula}</td>
            </tr>
        `
        tbody.innerHTML = tpl
        document.querySelector("#form").style.display = "none"
        document.querySelector("table").style.display = "block"
        return
    }

    document.querySelector("form #cedula").value = documento
    document.querySelector("#form").style.display = "block"
    document.querySelector("table").style.display = "none"
}

const guardaPersona = function () {
    let persona = {
        nombre: "",
        cedula: ""
    }
    persona.nombre = document.querySelector("form #nombre").value
    persona.cedula = document.querySelector("form #cedula").value

    let chequearExistencia = function (cedulaIngresada) {
        for (let i = 0; i < pers.length; i++) {
            for (const cedula in pers) {
                if (cedulaIngresada != pers.cedula) {
                    return true
                } else {
                    return false
                }
            }
        }
    }

    if (persona.cedula !== "" && chequearExistencia(persona.cedula)) {
        let personas = PersonaService(pers).nuevaPersona(persona)

        document.querySelector("form #nombre").value = ""
        document.querySelector("form #cedula").value = ""

        console.log(personas)
    }
}