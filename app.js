
const inputwrapper = document.querySelector('main')
const formEl = document.querySelector("form")
const img=document.querySelector("img") 
const h1=document.querySelector("h1")
const p=document.querySelector("p")
const one=document.getElementById("one")
const two=document.getElementById("two")
const random = Math.random()
let result=Math.trunc(random*100+1)
formEl.addEventListener('submit', function(e) {
    e.preventDefault()
    const raqam=formEl.number.value
    if (raqam>100 || raqam<1){
    p.textContent="Iltimos to'g'ri raqam kiriting!! Siz kiritgan raqam 1 va 10 oralig'ida emas"
   
}
else if(+raqam==+result) {
    h1.textContent="Siz o'yin g'olibisiz"
    p.textContent=`Men o'ylagan son ${result}`
}
else if(result>raqam){
    h1.textContent="Kattaroq son kiriting"
}
else if(result<raqam){
    h1.textContent="Kichikroq son kiriting"
}
   two.style.display="block"
})