var sea =document.querySelector(".search")
var dn = document.querySelector(".dn");
var clo = document.querySelector(".close_pp")
var mo = document.querySelector(".mask-overlay")
var body = document.querySelector("body")
var mb = document.querySelector(".menu-bar")
var mc = document.querySelector(".menu-container")
var cd = document.querySelector(".cd")


sea.addEventListener("click",function(){
    dn.style.opacity = 1
    dn.style.visibility = 'visible'
    mo.style.opacity = 1
    mo.style.visibility = 'visible'
    body.style.overflowY = "hidden"
})

clo.addEventListener("click",function(){
    dn.style.opacity = 0
    dn.style.visibility = 'hidden'
    mo.style.opacity = 0
    mo.style.visibility = 'hidden'
    body.style.overflowY = "visible"
})

mb.addEventListener("click",function(){
    mc.style.opacity = 1
    mc.style.visibility = 'visible'
    mo.style.opacity = 1
    mo.style.visibility = 'visible'
    body.style.overflowY = "hidden"
})

cd.addEventListener("click",function(){
    mc.style.opacity = 0
    mc.style.visibility = 'hidden'
    mo.style.opacity = 0
    mo.style.visibility = 'hidden'
    body.style.overflowY = "visible"
})

document.querySelectorAll('.nav_link_icon').forEach(function(icon) {
    icon.addEventListener('click', function() {
        this.classList.toggle('active');
    });
});

document.querySelectorAll('.nav_link_icon').forEach(icon => {
    icon.addEventListener('click', function() {
      // Get the parent 'aside' element
      let aside = this.closest('aside');
      // Find the corresponding 'menu_cn' within the same 'aside'
      let menu = aside.querySelector('.menu_cn');
      // Toggle the display of the 'menu_cn'
      if (menu) {
        menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
      }
    });
  });
