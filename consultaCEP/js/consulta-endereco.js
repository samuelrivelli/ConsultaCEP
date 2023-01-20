let cep = document.querySelector('#cep');
let rua = document.querySelector('#rua');
let bairro = document.querySelector('#bairro');
let cidade = document.querySelector('#cidade');
let estado = document.querySelector('#estado');

cep.addEventListener('keyup', function(e) {
    var input = document.getElementById("cep");
    if (e.code === 'Enter') {
        if (input.value.length < 8 || input.value.length > 8) {
            alert("O CEP, obrigatoriamente, deve possuir 8 dígitos!");
        }
    }
  })

function isNumber(evt) {
    evt = (evt) ? evt : window.event;
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
        return false;
    }
    return true;
}
cep.addEventListener('keyup', function (e) {
    
    if (e.code === 'Enter') {
    
        let cep = e.target.value;
        let script = document.createElement('script');
        script.src = 'https://viacep.com.br/ws/' + cep + '/json/?callback=popularForm';
        document.body.appendChild(script);
    }
});

function popularForm(resposta) {

    if ("erro" in resposta) {
        alert('CEP não encontrado !');
        return;
    }
   
    console.log(resposta);
    rua.value = resposta.logradouro;
    bairro.value = resposta.bairro;
    cidade.value = resposta.localidade;
    estado.value = resposta.uf;
}
