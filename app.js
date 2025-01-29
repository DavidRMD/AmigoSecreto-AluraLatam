// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos =  [];

function agregarAmigo(){
    const inputAmigo = document.getElementById('amigo');
    const nombreAmigo = inputAmigo.value.trim();
    if(nombreAmigo == ''){
        alert('Por favor, escribe un nombre');
        return;
    }
    amigos.push(nombreAmigo);

    inputAmigo.value == '';

    const listaAmigos = document.getElementById('listaAmigos');
    const nuevoAmigo = document.createElement('li');
    nuevoAmigo.textContent = nombreAmigo;
    listaAmigos.appendChild(nuevoAmigo);
}

function sortearAmigo(){
    if(amigos.length < 2){
        alert('Necesitas al menos dos amigos para poder hacer el sorteo');
        return;
    }
    const amigosMezclados = mezclarArray([...amigos]);
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = '';

    amigosMezclados.forEach((amigo, index)=> {
        const siguienteAmigo = amigosMezclados[(index + 1) % amigosMezclados.length];
        const resultadoItem = document.createElement('li');
        resultadoItem.textContent = `${amigo} le regala a ${siguienteAmigo}`;
        resultado.appendChild(resultadoItem);
    });
}

function mezclarArray(array){
    for(let i = array.length - 1 ; i > 0; i --){
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}