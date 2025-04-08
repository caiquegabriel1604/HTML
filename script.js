function atualizarRelogio() {
    const relogio = document.getElementById('relogio')
    //Aqui eu vou mexer no elementp com ID relogio no HTML
    const agora = new Date();
    agora.setHours(agora.getHours()-3)
    //Essa linha serve para definir para fuso horario correto
    const horas = String(agora.getHours()).padStart(2,'0');
    const minutos = String(agora.getMinutes()).padStart(2,'0');
    const segudos = String(agora.getSeconds()).padStart(2,'0');
    relogioElement.textContent = `${horas}:${minutos}:${segudos}`
}
