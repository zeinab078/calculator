let displayBox=document.querySelector(".display");
const list=document.querySelectorAll(".show-display");
list.forEach(item=>{
    item.addEventListener("click",showDisplay)
})
function showDisplay(event){
    const x=event.target.innerText;
    if(displayBox.innerText==0){
        return displayBox.innerHTML=x;
    } 
    return displayBox.innerHTML +=x;
}

 function calculation(){
    let result=displayBox.innerHTML
    displayBox.innerHTML=eval(result)
 }
  function clearAll(){
    displayBox.innerHTML=0;
  }




document.querySelector(".all-clear").addEventListener("click",clearAll)
document.querySelector(".calculate").addEventListener("click",calculation)