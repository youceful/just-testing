const LIST=document.querySelectorAll("li")
for(let i=0;i<LIST.length;i++){
  LIST[i].style.fontSize=(i+1)+"rem";
  console.log(LIST[i])
}
document.images[0].src="icon.png"
document.images[0].id="kaka-serwal"
const link=document.querySelectorAll(".link")
//link[0].setAttribute("href","https://8chan.moe/.static/pages/disclaimer.html")
link[0].href="https://8chan.moe/.static/pages/disclaimer.html"
if(link[0].hasAttribute("href")){
  console.log("yuh uh")
}
else{
  console.log("nuh uh")
}
const im=document.getElementsByTagName("img")
if(im[0].hasAttribute("src")){
  im[0].removeAttribute("src")
}
