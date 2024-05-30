// start js

const selectMenu = document.querySelectorAll('select');
const timeBox = document.querySelector('.time');


// hour

for(let i = 23 ; i >=0 ; i--){
    i = i < 10 ?  '0' + i : i;
    let option = `<option value="${i}">${i}</option>`;
    selectMenu[0].firstElementChild.insertAdjacentHTML('afterend', option)
    
}

// minute

for(let i = 59 ; i >=0 ; i--){
    i = i < 10 ?  '0' + i : i;
    let option = `<option value="${i}">${i}</option>`;
    selectMenu[1].firstElementChild.insertAdjacentHTML('afterend', option)
    
}

// javascript timeBox


 setInterval(() =>{
    let date = new Date();
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();

    h = h < 10 ? '0' + h : h ;
    m = m < 10 ? '0' + m : m ;
    s = s < 10 ? '0' + s : s ;

    console.log( `${h} : ${m}: ${s}` )

 }, 1000)