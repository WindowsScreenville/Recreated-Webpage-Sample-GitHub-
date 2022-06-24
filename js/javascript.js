var navbar = document.getElementById("navbar");
var menu = document.getElementById("menu");

window.onscroll = function () {
    if (window.pageYOffset > menu.offsetTop) {
        navbar.classList.add("sticky");
    }

    else {
        navbar.classList.remove("sticky");
    }
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active");
        this.className += " active";
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});


// FOR EFFECTS WHEN SCROLLING
window.addEventListener('scroll', faded_zoom_up);
window.addEventListener('scroll', faded_zoom_down);
window.addEventListener('scroll', faded_toright);
window.addEventListener('scroll', faded_toright);
window.addEventListener('scroll', faded_toleft_long);

function faded_zoom_up(){
    var effect = document.querySelectorAll('.faded-zoom-up');

    for (var i = 0; i < effect.length; i++) {
        var windowheight = window.innerHeight;
        var effecttop = effect[i].getBoundingClientRect().top;
        var effectpoint = 150;

        if (effecttop < windowheight - effectpoint) {
            effect[i].classList.add('active');
        }

        else {
            effect[i].classList.remove('active');
        }
    }
}

function faded_zoom_down(){
    var effect = document.querySelectorAll('.faded-zoom-down');

    for (var i = 0; i < effect.length; i++) {
        var windowheight = window.innerHeight;
        var effecttop = effect[i].getBoundingClientRect().top;
        var effectpoint = 150;

        if (effecttop < windowheight - effectpoint) {
            effect[i].classList.add('active');
        }

        else {
            effect[i].classList.remove('active');
        }
    }
}

function faded_toright(){
    var effect = document.querySelectorAll('.fade-toright');

    for (var i = 0; i < effect.length; i++) {
        var windowheight = window.innerHeight;
        var effecttop = effect[i].getBoundingClientRect().top;
        var effectpoint = 150;

        if (effecttop < windowheight - effectpoint) {
            effect[i].classList.add('active');
        }

        else {
            effect[i].classList.remove('active');
        }
    }
}

function faded_toleft_long(){
    var effect = document.querySelectorAll('.fade-toleft-long');

    for (var i = 0; i < effect.length; i++) {
        var windowheight = window.innerHeight;
        var effecttop = effect[i].getBoundingClientRect().top;
        var effectpoint = 150;

        if (effecttop < windowheight - effectpoint) {
            effect[i].classList.add('active');
        }

        else {
            effect[i].classList.remove('active');
        }
    }
}
