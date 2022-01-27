let alert=document.querySelector(".alert");
let simple=document.querySelector(".simple");
let alertBox=document.querySelector(".dialog-box");
let simpleBox=document.querySelector(".dialog-box-simple");

simpleBox.style.display="none";

alert.addEventListener("click",()=>{
    // console.log("A");
    alertBox.style.display="block";
    simpleBox.style.display="none";
    // alertBox.classList.toggle("hidden");
    // simpleBox.classList.add("hidden");
    
})


simple.addEventListener("click",()=>{
    simpleBox.style.display="block";
    alertBox.style.display="none";
     alertBox.classList.add("hidden");
     simpleBox.classList.toggle("hidden");
})