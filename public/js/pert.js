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






