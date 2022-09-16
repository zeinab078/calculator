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
    displayBox.innerHTML=evel(result)
 }





document.querySelector(".calculate").addEventListener("click",calculation)