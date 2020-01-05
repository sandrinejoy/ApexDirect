console.log("connected")


document.getElementById("jobAdTitle").addEventListener("click", () => {
    console.log("clicked")
    document.getElementById("jotFormContainer").classList.toggle("display");
});

var testDiv = document.getElementById("test");

console.log(testDiv)

document.getElementById("myButton").addEventListener("click", ()=>{
    if(testDiv.classList.contains("hide")){
        testDiv.classList.remove("hide")
        testDiv.classList.add("display")
    } else {
        testDiv.classList.add("hide")
        testDiv.classList.remove("display")
    }
})