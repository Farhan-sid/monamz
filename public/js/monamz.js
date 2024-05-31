var sea =document.querySelector(".search")
var dn = document.querySelector(".dn");
var cd = document.querySelector(".cd")
var mo = document.querySelector(".mask-overlay")
var body = document.querySelector("body")
var mb = document.querySelector("menu-bar")
var pf = document.querySelector(".popup_filter")
sea.addEventListener("click",function(){
    dn.style.opacity = 1
    dn.style.visibility = 'visible'
    mo.style.opacity = 1
    mo.style.visibility = 'visible'
    body.style.overflowY = "hidden"
})

cd.addEventListener("click",function(){
    dn.style.opacity = 0
    dn.style.visibility = 'hidden'
    mo.style.opacity = 0
    mo.style.visibility = 'hidden'
    body.style.overflowY = "visible"
})

mb.addEventListener("click",function(){
    pf.style.opacity = 1
    pf.style.visibility = 'visible'
    mo.style.opacity = 1
    mo.style.visibility = 'visible'
    body.style.overflowY = "hidden"
})