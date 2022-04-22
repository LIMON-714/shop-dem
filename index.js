alert('hello ...');
var menubtn = document.getElementById('menu-btn');
var sideNav = document.getElementById('sideNav');
var menu = document.getElementById('menu');

sideNav.style.right = "-250px";

menubtn=onclick= function() {
    if (sideNav.style.right == "-250px"){
        sideNav.style.right = "0";
        menu.src ="images/menu-close.png";
    }
    else{
        sideNav.style.right ="-250px";
        menu.src ="images/menu.png";
    }
}