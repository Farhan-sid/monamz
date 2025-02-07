var s_p = document.querySelector(".shortby_pick")
var w_s = document.querySelector(".wrap_sortby")
var svg = document.querySelector(".ic_triangle_svg")
var re = document.querySelector(".remove")
var fil = document.querySelector(".cat_filter")
var clo = document.querySelector(".close_pp")
var mo = document.querySelector(".mask-overlay")
var pf = document.querySelector(".popup_filter")
var body = document.querySelector("body")
var sea =document.querySelector(".search")
var dn = document.querySelector(".dn");
var snf = document.querySelector(".section_nt_filter i")
var ao = document.querySelector(".act_opened")
var mb = document.querySelector(".menu-bar")
var mc = document.querySelector(".menu-container")
var cd = document.querySelector(".cd")
var sb = document.querySelector(".sea-bar")


var isHidden = false;

s_p.addEventListener("click", function() {
    if (!isHidden) {
        // Show elements
        w_s.style.opacity = 1;
        w_s.style.visibility = "visible";
        svg.style.opacity = 1;
        svg.style.visibility = "visible";
        re.style.visibility = "visible";
        re.style.opacity = 0;
    } else {
        // Hide elements
        w_s.style.opacity = 0;
        w_s.style.visibility = "hidden";
        svg.style.opacity = 0;
        svg.style.visibility = "hidden";
        re.style.visibility = "hidden";
        re.style.opacity = 0;
    }

    // Toggle the state
    isHidden = !isHidden;
});

fil.addEventListener("click",function(){
    pf.style.opacity = 1
    pf.style.visibility = 'visible'
    mo.style.opacity = 1
    mo.style.visibility = 'visible'
    body.style.overflowY = "hidden"
})

snf.addEventListener("click",function(){
    pf.style.opacity = 0
    pf.style.visibility = 'hidden'
    mo.style.opacity = 0
    mo.style.visibility = 'hidden'
    body.style.overflowY = "visible"
})

sea.addEventListener("click",function(){
    ao.style.opacity = 1
    ao.style.visibility = 'visible'
    mo.style.opacity = 1
    mo.style.visibility = 'visible'
    body.style.overflowY = "hidden"
})

clo.addEventListener("click",function(){
    ao.style.opacity = 0
    ao.style.visibility = 'hidden'
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


  document.addEventListener('DOMContentLoaded', (event) => {
    const filterButton = document.querySelector('.your-filter-button-class'); // Replace with your button's class or ID
    const popupFilter = document.querySelector('.popup_filter');

    filterButton.addEventListener('click', () => {
      popupFilter.classList.toggle('active');
    });

    // Optional: Add a close button inside the popup
    const closeButton = document.querySelector('.popup_filter .fa-xmark'); // Replace with your close button's class or ID
    closeButton.addEventListener('click', () => {
      popupFilter.classList.remove('active');
    });
  });


  








