console.log("hello")

window.onscroll = function() {myFunction()}

var header = document.getElementById("header")

var sticky = header.offsetTop

function myFunction(){
    if(window.pageYOffset > sticky){
        // header.classList.remove("noSticky")
        // header.classList.add("stickyHeader")  
    } else {
        // header.classList.remove("stickyHeader")
        // header.classList.add("noSticky")
    }
}