const listaDeTareas = document.querySelector('#tareas')
const tareaInput = document.querySelector('#nuevaTarea')

const btnAgregar = document.querySelector('#agregarTarea')
const cuentaTareas = document.querySelector('#cuenta-tareas')
const tareas = [
    

        btnAgregar.addEventListener("click", ()=>{
            const tarea=tareaInput.value
            tareas.push({ id:Date.now() , tarea:tarea})
            tareaInput.value=""

            let html=""
            for(let tarea of tareas){
                html +=`<li>${tarea.tarea} <button
                onclick= "borrar(${tarea.id})>eliminar</button></li>`;
            }
            listaDeTareas.innerHTML=html;
            cuentaTareas.textContent=`Total de tareas:${tareas.length}`;
        }),
        function borrar(id){
            const index= tareas.findIndex((ele)=>ele.id==id)
            tareas.splice(index,1)
            let html=""
            for (tarea of tareas){
                html+=` <li>${tarea.tarea} <button
                onclick="borrar(${tarea.id})">eliminar </button></li>`;
            }
            listaDeTareas.innerHTML= html;
            cuentaTareas.textContent=` Total de tareas: ${tareas.length}`;
        }

]