{ 
    { 
        { 
            { var sera = 'Será???' } // Uma variável definida por 'var' só tem dois escopos possíveis!!!
            console.log(sera) // A variável 'var' dentro de um bloco de código que não seja uma função ficará visível para todo mundo mesmo que esteja fora daquele bloco!!!
        }
    }
}

console.log(sera)

function teste(){
    var local = 123
    console.log(local) // O local onde a variável está definida esta dentro do escopo (Só é visível dentro da função)!!!
}
//console.log(local)            // Neste caso da erro pois a variável não está visível fora do escopo da função!!!

teste()

// Quando você cria uma variável fora de uma função ela é global