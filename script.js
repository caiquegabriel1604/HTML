function hora(){
    //relogio recebe data atual
    let relogio = document.getElementById('relogio')

    let tempo = new Date();
    let horas = tempo.getHours();
    let minutos = tempo.getMinutes();
    let segundos = tempo.getSeconds();

    relogio.innerHTML =`${horas}:${minutos}:${segundos}`
   




  }
  
  hora();
