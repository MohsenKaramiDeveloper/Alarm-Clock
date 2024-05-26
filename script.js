// start js

const selectMenu = document.querySelectorAll('select');


for(let i = 23 ; i >=0 ; i--){
    i = i < 10 ?  '0' + i : i;
    let option = `<option value="${i}">${i}</option>`;
    selectMenu[0].firstChild.insertAdjacentHTML('afterend')
    console.log(option)
}
4