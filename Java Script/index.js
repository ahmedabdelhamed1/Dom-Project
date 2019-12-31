var items =  Array.from( document.querySelectorAll(".item img"))
var boxx = document.querySelector(".boxx")
var close = document.getElementById("close")
var next = document.getElementById("next")
var prev = document.getElementById("prev")

var currentImage = 0;


for (var i = 0 ; i < items.length ; i++) 
{
    items[i].addEventListener("click" , boxxf)
}
function boxxf(e)
{
    boxx.style.display ="flex";
    var myImage = e.target.src;

    currentImage = items.indexOf(e.target)
    boxx.firstElementChild.style.backgroundImage = "url("+myImage+")"
}

close.addEventListener("click" , closef)
next.addEventListener("click" , nextf)
prev.addEventListener("click" , prevf)
function closef()
{
    boxx.style.display ="none";
}
function nextf()
{
    currentImage++;

    if (currentImage == items.length)
    {
        currentImage = 0;
    }


    boxx.firstElementChild.style.backgroundImage = "url("+items[currentImage].src+")"
}
function prevf()
{
    currentImage--;

    if (currentImage < 0)
    {
        currentImage = items.length - 1;
    }


    boxx.firstElementChild.style.backgroundImage = "url("+items[currentImage].src+")"
}

document.addEventListener("keydown" , function(e)
{
    if (e.keyCode == 37) 
    {
        nextf();
    }
    else if (e.keyCode == 39)
    {
        prevf();
    }
    else if (e.keyCode == 27)
    {
        closef();
    }
})

