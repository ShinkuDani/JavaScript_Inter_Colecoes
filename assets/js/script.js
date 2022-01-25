// function getadmin(map){
//     if(!map) return console.log("Não passou o parametro");

//     let admins = [];

//     for([key, value] of map){
//         if(value === 'admin'){
//             admins.push(key);
//         };
//     };
    
//     return admins;
// };

// const usuarios = new Map();

// usuarios.set('Daniel' , 'admin');
// usuarios.set('Guilherme' , 'admin');
// usuarios.set('Juliana' , 'User');
// usuarios.set('Beatriz' , 'User');
// usuarios.set('Brian' , 'admin');

// console.log(getadmin(usuarios));

const meuArray = [30, 30, 40, 40,5, 223, 2049, 3034, 5];

function valoresUnicos(array){
    const meuSet = new Set(array);
    // const novoArray = [];

    // for(i of meuSet){
    //     novoArray.push(i);
    // }

    // return novoArray
    return [...meuSet]
}

console.log(valoresUnicos(meuArray));