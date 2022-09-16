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