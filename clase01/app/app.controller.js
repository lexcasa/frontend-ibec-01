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
        document.querySelector("#form").style.display = "none"
        document.querySelector("table").style.display = "block"
        return
    }

    document.querySelector("form #cedula").value = documento
    document.querySelector("#form").style.display = "block"
    document.querySelector("table").style.display = "none"
}

const guardaPersona = function (){
    let persona = {
        nombre: "",
        cedula: ""
    }
    persona.nombre = document.querySelector("form #nombre").value
    persona.cedula = document.querySelector("form #cedula").value

    if(persona.cedula !== ""){
        let personas = PersonaService(pers).nuevaPersona(persona)
        
        document.querySelector("form #nombre").value = ""
        document.querySelector("form #cedula").value = ""

        console.log(personas)
    }
}