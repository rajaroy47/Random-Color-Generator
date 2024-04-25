// let str = 'rajaroy';
// let symbol = '#';


// for (let i = 0; i<6; i++){
//     symbol = symbol + str[Math.floor(Math.random() * 7)];
//     // console.log(symbol)
// }

let butt = document.getElementById('button');
let box = document.querySelector('.box');
let h1 = document.getElementById('text');


butt.addEventListener('click', getRandomColor);


function getRandomColor(){

    let str = '0123456789ABCDEF';
    let symbol = '#'; 

    for (let i = 0; i<6; i++){
        symbol = symbol + str[Math.floor(Math.random() * 16)];
        // console.log(symbol)
        
    }

    // document.body.style.backgroundColor = symbol

    box.style.backgroundColor = symbol
    h1.innerHTML = symbol
    
    
}

getRandomColor();