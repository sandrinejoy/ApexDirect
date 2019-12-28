console.log("hello")

window.onscroll = function() {myFunction()}

var header = document.getElementById("header")

var mobileHeader = document.getElementById("mobileHeader")

var sticky = header.offsetTop

var mobileSticky = mobileHeader.offsetTop

function myFunction(){
    if(window.pageYOffset > sticky) {
        header.classList.remove("noSticky")
        header.classList.add("stickyHeader")  
    } else {
        header.classList.remove("stickyHeader")
        header.classList.add("noSticky")
    }

// ADDED CODE FOR THE MOBILE VIEW STILL MIGHT NEED SOME WORK
    if(window.pageYOffset > mobileSticky){
        mobileHeader.classList.remove("noSticky")
        mobileHeader.classList.add("mobileStickyHeader")
    } else {
        mobileHeader.classList.remove("mobileStickyHeader")
        mobileHeader.classList.add("noSticky")
    }
}