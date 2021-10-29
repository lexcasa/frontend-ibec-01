let tbody = document.querySelector("tbody")

const buscarPersona = function (){
    let documento = document.querySelector("#cedula").value
    let persona   = PersonaService(pers).buscarPersona(documento)

    if(persona){
        let tpl = `
            <tr>
                <td>${persona.nombre}</td>
                <td>${persona.cedula}</td>
            </tr>
        `
        tbody.innerHTML = tpl
    }
    console.log("buscar persona :: ", persona)
}