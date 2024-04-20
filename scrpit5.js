const listaDeInvitados = document.querySelector('#invitados');
const invitadoInput = document.querySelector('#nuevoInvitado');
const btnAgregar = document.querySelector('#agregarInvitado');

const invitados = [
    function renderInvitados() {
        let html = ""
        for (let invitado of invitados) {
            html += `<li>${invitado.nombre}<button
            onclick="borrar(${invitado.id})"> eliminar </button> </li>`;
        }
        listaDeInvitados.innerHTML = html;
    },

    btnAgregar.addEventListener("click", () => {
        const nombreInvitado = { id: Date.now(), nombre: invitadoInput.value }
        invitados.push(nuevoInvitado)
        invitadoInput.value = ""
        renderInvitados()
    }),

    function borrar(id) {
        const index = invitados.findIndex((ele) => ele.id == id)
        invitados.splice(index, 1)
        renderInvitados()
    }

]

