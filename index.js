// const child = document.querySelector('.child');


// child.addEventListener('click', ()=>{
//    child.classList.add('text')
//    child.textContent= 'Hello';
// //    child.innerHTML='cambodia';
//     child.className ='parent';
// })

// const child = document.querySelector('.child');
// const btn1  = document.querySelector('.btn1')
// const btn2  = document.querySelector('.btn2');
// btn1.addEventListener('click',()=>{
//     btn1.setAttribute('class','content');
//     btn1.innerHTML = "I LOVE YOU TOO BEBE";
//     btn1.style.fontSize = 50 + 'px'
//     btn1.style.color = '#e63946';
//     btn1.style.textShadow = '2px 2px 2px orange';
//     btn1.style.transition = 0.5 + 's';
   
//     btn1.ondrag = (e)=>{
//         let x = e.clientX;
//         let y = e.clientY;
//         btn1.style.left = x + 'px';
//         btn1.style.top  = y + 'px';
//     }
// })
// btn2.addEventListener('click',()=>{
//     btn2.setAttribute('class','parent');
//     btn2.innerHTML  = "I WILL BROKEN HEART";
//     btn2.style.fontSize = 50 + 'px'
//     btn2.style.color = '#432818';
//     btn2.style.textShadow ='2px 2px 2px red';
//     btn2.style.transition = 0.5  + 's';
    

// })




//////////////////
const child = document.querySelector('.child');
const btn1 = document.querySelector('.btn1'); 
const btn2 = document.querySelector('.btn2'); 
let isClicked = false; 

btn1.addEventListener('click', () => {
    if (isClicked){
        return; 
    } 
    isClicked = true; // Set flag to true on click

    btn1.setAttribute('class', 'content');
    btn1.innerHTML = "I LOVE YOU TOO BEBE";
    btn1.style.fontSize = '50px';
    btn1.style.color = '#e63946';
    btn1.style.textShadow = '2px 2px 2px orange';
    btn1.style.transition = '0.5s';

    // Drag effect for btn1
    btn1.ondrag = (e) => {
        let x = e.clientX;
        let y = e.clientY;
        btn1.style.position = 'absolute'; // Make btn1 draggable
        btn1.style.left = x + 'px';
        btn1.style.top = y + 'px';
    };
});

btn2.addEventListener('click', () => {
    if (isClicked) return; // Prevent further actions if already clicked
    isClicked = true; // Set flag to true on click

    btn2.setAttribute('class', 'parent');
    btn2.innerHTML = "I WILL BROKEN HEART";
    btn2.style.fontSize = '50px';
    btn2.style.color = '#432818';
    btn2.style.textShadow = '2px 2px 2px red';
    btn2.style.transition = '0.5s';
});

