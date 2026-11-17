let inc=document.getElementById("increment");
let dec=document.getElementById("decrement");
let reset=document.getElementById("reset");
let num=document.getElementById("num");

let count=0;

inc.addEventListener("click",function (){
    count++
    num.textContent=count
}
)
dec.addEventListener("click",function (){
    if(num.textContent > 0 ){
        count--
        num.textContent=count
    }
}
)
reset.addEventListener("click",function (){
    count=0
    num.textContent= count
}
)