const vSenha = document.querySelector("#senha");
let senhaNormal = localStorage.getItem('senhaNormal');
let senhaPreferencial = localStorage.getItem('senhaPreferencial');
let ultSenha = localStorage.getItem('ultSenha');
let audio = new Audio('senha.mp3');

if (!senhaNormal)
    senhaNormal = 0;
    
if (!senhaPreferencial)
    senhaPreferencial = 0;
    
if (!ultSenha)
    ultSenha = 'N'; 
    
mostraSenha();    


window.addEventListener('keydown', function(e){
    console.log (e);
    if (e.key == 'n'|| e.key == 'N') {
        senhaNormal++;
        ultSenha = 'N';
        audio.play();
    } else if (e.key == 'p'|| e.key == 'P') {
        senhaPreferencial++;
        ultSenha = 'P';
        audio.play();
    } else if (e.key == 'r' || e.key == 'R') {
        ultSenha = 'N';
        senhaNormal = 0;
        senhaPreferencial = 0;
    }

    localStorage.setItem('senhaNormal', senhaNormal);
    localStorage.setItem('senhaPreferencial', senhaPreferencial);
    localStorage.setItem('ultSenha', ultSenha);
    
    mostraSenha();

    
});

function mostraSenha() {
    if (ultSenha=='N') {
        vSenha.innerHTML = 'N'+ parseInt(senhaNormal).toLocaleString('pt-br', {minimumIntegerDigits: 3});

    } else {
        vSenha.innerHTML = 'P' + parseInt(senhaPreferencial).toLocaleString('pt-br', {minimumIntegerDigits: 3});
    }
    
}