const tareas = [
    {
        ID: 0,
        Tarea: "",
        Realizada: false
    },
    {
        ID: 1,
        Tarea: "Limpiar la computadora",
        Realizada: false
    }
];


const renderTareas = () => {
    let render = ""
    let checked = ""
    let subrayar = ""
    let total_realizadas = 0
    for (let tarea of tareas) {
        if (tarea.Realizada){
            checked = "checked"
            subrayar = "style=text-decoration:line-through;"
            total_realizadas += 1
        }else{
            checked = ""
            subrayar = ""
        }
        if (tarea.ID != 0){
            render += 
            `
                <tr >
                    <td> ${tarea.ID} </td>
                    <td class="m-left-tabla" ${subrayar} id="subrayar${tarea.ID}"> ${tarea.Tarea} </td>
                    <td class="m-left-tabla"> <input type="checkbox" ${checked} onchange="checkBox(${tarea.ID})" id="check_${tarea.ID}"> </td>
                    <td class="m-left-tabla"> <i class="fa-solid fa-delete-left btn-eliminar" onclick="btnEliminar(${tarea.ID})"></i> </td>
                </tr>
            `
        }
    }
    lista.innerHTML = render
    let render_total = `Total: ${tareas.length - 1}`
    total.innerHTML = render_total
    let render_realizadas = `Realizadas: ${total_realizadas}`
    realizada.innerHTML = render_realizadas
}

const btnEliminar = (id)=>{
    let borrarTarea = tareas.findIndex((elemento)=>
        elemento.ID == id
    )
    tareas.splice(borrarTarea, 1)
    renderTareas()
}

const checkBox = (id)=>{
    const btn_check = document.getElementById(`check_${id}`)
    if (btn_check.checked) {
        tareas[id].Realizada = true
        const subrayar = document.getElementById(`subrayar${id}`)
        subrayar.style.textDecoration = "line-through"
        renderTareas()
    }else {
        tareas[id].Realizada = false
        const subrayar = document.getElementById(`subrayar${id}`)
        subrayar.style.textDecoration = ""
        renderTareas()
    }
}

const boton = document.getElementById("boton");
const lista = document.getElementById("render");
const total = document.getElementById("total");
const realizada = document.getElementById("realizadas");

boton.addEventListener("click", ()=>{
    let ult_id = tareas[tareas.length -1].ID;
    const input_user = document.getElementById("input_user");
    let new_object = {
        ID:ult_id + 1,
        Tarea: `${input_user.value}`,
        Realizada: false
    };
    tareas.push(new_object);
    input_user.value = ""
    renderTareas()
})

renderTareas()

