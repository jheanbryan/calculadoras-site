const peso = document.getElementById('peso');
const altura = document.getElementById('altura');
const idade = document.getElementById('idade');
let genero;

const btn = document.getElementById('btn-calcular');

btn.addEventListener('click',function(e){
    e.preventDefault();

    if(document.getElementById('masculino').checked){
        console.log('Masculino')
        genero = 'masculino';
    } else if(document.getElementById('feminino').checked){
        console.log('feminino')
        genero = 'feminino';
    }
})
