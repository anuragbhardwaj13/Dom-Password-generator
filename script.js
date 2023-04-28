const password=document.getElementById("password-display")
const len=document.getElementById("range")
const output=document.getElementById("slider")
output.innerText = len.value
len.oninput=function(){output.innerText=this.value}
function genRandonString(length) {
   var chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()';
   var charLength = chars.length;
   var result = '';
   for ( var i = 0; i < length; i++ ) {
      result += chars.charAt(Math.floor(Math.random() * charLength));
   }
   console.log(result)
   password.innerText=result
   
}
const btn=document.getElementById('generate-password');
btn.addEventListener("click",()=>genRandonString(len.value));
const hideBtn=document.getElementById('hide');
hideBtn.addEventListener("click",()=>{
    password.style.textDecorationLine = "line-through"
    password.style.textDecorationStyle = "wavy"
})

const showBtn=document.getElementById('show');
showBtn.addEventListener("click",()=>{
    password.style.textDecorationLine = "initial"
    // password.style.textDecorationStyle = "wavy"
})