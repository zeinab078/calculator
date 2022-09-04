let displayBox=document.querySelector(".display");
function showDispaly(event){
    const x= event.target.innerText
   if(displayBox.innerHTML==0){
    return displayBox.innerHTML=x;
   }
   return displayBox.innerHTML += x;
}
const list=document.querySelectorAll(".show-display")
list.forEach(item=>{
    item.addEventListener("click",showDispaly)
})
function calculate(){
    let result=displayBox.innerHTML;
    displayBox.innerHTML=eval(result)
}
function clearAll(){
    displayBox.innerHTML=0
}

document.querySelector(".calculate").addEventListener("click",calculate)
document.querySelector(".all-clear").addEventListener("click",clearAll)