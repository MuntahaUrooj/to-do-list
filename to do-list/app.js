let inputs = document.getElementById('inp');
let text = document.querySelector('.text');

function Add() {
if (inputs.value === "") {
alert('Please Enter Your Field');

}else{
    let element = document.createElement('ul')
    element.innerHTML=`${inputs.value} <i class="fa-solid fa-trash"></i>`
    text.appendChild(element)
    inputs.value='';  

    element.querySelector("i")
    element. addEventListener("click",remove)
   
    function remove(){
        element.remove()
    }
}
}