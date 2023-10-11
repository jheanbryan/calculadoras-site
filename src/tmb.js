const btn = document.getElementById('btn-calcular');
const resultado = document.getElementById('resultado');

btn.addEventListener('click',function(e){
    e.preventDefault();

    let peso = Number(document.getElementById('peso').value);
    let altura = Number(document.getElementById('altura').value);
    let idade = Number(document.getElementById('idade').value);

    if(document.getElementById('masculino').checked){
        let tmbHomem = (66 + 13.7 * peso + 5 * altura - 6.8 * idade).toFixed(2);
        console.log(tmbHomem);
        resultado.innerText = `${tmbHomem}Kcal`
    } else if(document.getElementById('feminino').checked){
        let tmbMulher = (665 + 9.6 * peso + 1.8 * altura - 4.7 * idade).toFixed(2);
        console.log(tmbMulher);
        resultado.innerText = `TMB: ${tmbMulher}Kcal`
    }
})
