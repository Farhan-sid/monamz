var sea =document.querySelector(".search")
var dn = document.querySelector(".dn");
var clo = document.querySelector(".close_pp")
var mo = document.querySelector(".mask-overlay")
var body = document.querySelector("body")
var mb = document.querySelector(".menu-bar")
var mc = document.querySelector(".menu-container")
var cd = document.querySelector(".cd")
var sb = document.querySelector(".sea-bar")



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

  sb.addEventListener("click",function(){
    dn.style.opacity = 1
    dn.style.visibility = 'visible'
    mo.style.opacity = 1
    mo.style.visibility = 'visible'
    body.style.overflowY = "hidden"
})


document.addEventListener('DOMContentLoaded', function () {
  var items = [
    { item: document.getElementById('item-1'), container: document.querySelector('.item-1-container') },
    { item: document.getElementById('item-2'), container: document.querySelector('.item-2-container') },
    { item: document.getElementById('item-3'), container: document.querySelector('.item-3-container') }
  ];

  items.forEach(function(pair) {
    var item = pair.item;
    var container = pair.container;

    item.addEventListener('mouseenter', function () {
      container.style.opacity = '1';
      container.style.pointerEvents = 'auto';
    });

    item.addEventListener('mouseleave', function () {
      // Delay to allow moving to container
      setTimeout(function () {
        if (!container.matches(':hover')) {
          container.style.opacity = '0';
          container.style.pointerEvents = 'none';
        }
      }, 300);
    });

    container.addEventListener('mouseleave', function () {
      container.style.opacity = '0';
      container.style.pointerEvents = 'none';
    });

    container.addEventListener('mouseenter', function () {
      container.style.opacity = '1';
      container.style.pointerEvents = 'auto';
    });
  });
});



