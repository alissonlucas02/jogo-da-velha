let Nthistimex = 'X'
let listX = []
let listO = []

function XorO(bloco){
        const game1 = document.getElementById('game1')
        const game2 = document.getElementById('game2')
        console.log(bloco.target.dataset.value)
        bloco.target.innerText = Nthistimex
        if (Nthistimex === 'X'){
            listX.push(parseFloat(bloco.target.dataset.value))
            Nthistimex = "O"
            game1.style.color = '#696b6a'
            game2.style.color = '#00ff7b'
            
            
        }else{
            Nthistimex = 'X'
            game2.style.color ='#696b6a'
            game1.style.color = '#00ff7b'
            listO.push(parseFloat(bloco.target.dataset.value))
        }
        switch(Nthistimex){
            case 'X':
                VerificadeWin('O',listO)
                break
            case 'O':
                VerificadeWin('X',listX)
                break
            default:
                console.log('error')
                break

        }
        bloco.target.removeEventListener('click',XorO);
        
    }

document.querySelectorAll('.blocoVelha').forEach(function(blocos){
    blocos.addEventListener('click', XorO)
})

const winningSequences = [
    [1, 2, 3], // Linha Horizontal Superior
    [4, 5, 6], // Linha Horizontal do Meio
    [7, 8, 9], // Linha Horizontal Inferior
    [1, 4, 7], // Coluna Esquerda
    [2, 5, 8], // Coluna do Meio
    [3, 6, 9], // Coluna Direita
    [9, 5, 1], // Diagonal Principal (da esquerda para a direita)
    [3, 5, 7]  // Diagonal Secundária (da direita para a esquerda)
];

let = validationInclude = 0

function VerificadeWin(letra,lista){
        for(let i = 0; i< winningSequences.length; i++){
            validationInclude = 0
            for(let j = 0; j < winningSequences[i].length; j++){
                console.log(winningSequences[i][j])
                if (lista.includes(winningSequences[i][j])){
                    console.log('yes, inclui')
                    validationInclude += 1
                    if(validationInclude == 3){
                        break
                    }
                
                }
                else{
                    console.log('nao inclui')
                    validationInclude = 0
                }
            }
        if(validationInclude == 3){  
            document.getElementById('mensagem').innerText ='parabens o '+letra+' ganhou'
            document.body.style.backgroundImage = "url(./832301_14b4a.gif"
            document.body.style.backgroundColor = 'black'
            document.querySelectorAll('.blocoVelha').forEach(function(bloco){
                bloco.removeEventListener('click',XorO)
            })
        }
}}

const divgame =  document.getElementById('namegame')

function tagp(value, id,color = '#00ff7b'){
    let name1 = document.createElement('p')
    name1.innerText = value
    name1.id = id
    name1.style.color = color
    divgame.appendChild((name1))
    return name1
}
function addnamegame(){
    const gameinfo = document.getElementById('gameinfo')
    const input1 = document.getElementById('game1').value
    const input2 = document.getElementById('game2').value
    
    
    if (input1 != '' && input2 != ''){
        divgame.removeChild(gameinfo)
        document.getElementById('gameVelha').removeAttribute('hidden')
        tagp(('Jogador 1: '+input1),'game1', '#00ff7b')
        tagp(('Jogador 2: '+input2), 'game2','#696b6a')
        console.log(input1)
    }else{
        alert('preencha os campos')
    }
}


