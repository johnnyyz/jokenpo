const opcoesJogador = document.querySelectorAll('.opcoesJogador div > img');
const opcoesOponente = document.querySelectorAll('.opcoesOponente div > img');
var escolhaJogador = '';
var escolhaOponente = '';

resetarOpacidade = ()=>{
    for (var i = 0; i < opcoesJogador.length; i++){
        opcoesJogador[i].style.opacity = 0.3;
        opcoesOponente[i].style.opacity = 0.3;     
    }
}

jogadaOponente = ()=>{
    let rand = Math.floor(Math.random()*3);
    opcoesOponente[rand].style.opacity = 1;
    escolhaOponente = opcoesOponente[rand].getAttribute('opcao');
    resultado();
}

resultado = ()=>{
    let mensagem = document.querySelector('.msgResultado');
    switch(escolhaJogador){
        case('pedra'):
            switch(escolhaOponente){
                case('pedra'):
                    mensagem.innerHTML = "EMPATE";
                    break;
                case('papel'):
                    mensagem.innerHTML = "DERROTA";
                    break;
                case('tesoura'):
                    mensagem.innerHTML = "VITÓRIA";
            }
            break;
        case('papel'):
            switch(escolhaOponente){
                case('pedra'):
                    mensagem.innerHTML = "VITÓRIA";
                    break;
                case('papel'):
                    mensagem.innerHTML = "EMPATE";
                    break;
                case('tesoura'):
                    mensagem.innerHTML = "DERROTA";
            }
            break;
        case('tesoura'):
            switch(escolhaOponente){
                case('pedra'):
                    mensagem.innerHTML = "DERROTA";
                    break;
                case('papel'):
                    mensagem.innerHTML = "VITÓRIA";
                    break;
                case('tesoura'):
                    mensagem.innerHTML = "EMPATE";
            }
        break;
    }
} 

for (var i = 0; i < opcoesJogador.length; i++){
    opcoesJogador[i].addEventListener('click',(t)=>{
        resetarOpacidade();
        t.target.style.opacity = 1;
        escolhaJogador = t.target.getAttribute('opcao');
        jogadaOponente();
        
    })

}
