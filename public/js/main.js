console.log("hello")

window.onscroll = function() {myFunction()}

var header = document.getElementById("header")

var sticky = header.offsetTop

function myFunction(){
    if(window.pageYOffset > sticky){
        header.classList.add("stickyHeader")
        header.classList.remove("noSticky")
    } else {
        header.classList.remove("stickyHeader")
        header.classList.add("noSticky")
    }
}