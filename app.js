const leftBtn = document.querySelector(".l-btn");
const rightBtn = document.querySelector(".r-btn");

rightBtn.addEventListener("click", function (e) {
    const conent = document.querySelector(".product-slide");
    conent.scrollLeft += 1100;
    e.preventDefault();

})

leftBtn.addEventListener("click", function (e) {
    const conent = document.querySelector(".product-slide");
    conent.scrollLeft -= 1100;
    e.preventDefault();

})


const leftBtn1 = document.querySelector(".btn-1b");
const rightBtn1 = document.querySelector(".btn-1a");

rightBtn1.addEventListener("click", function (e) {
    const conent = document.querySelector(".product-slide-1");
    conent.scrollLeft += 1100;
    e.preventDefault();

})

leftBtn1.addEventListener("click", function (e) {
    const conent = document.querySelector(".product-slide-1");
    conent.scrollLeft -= 1100;
    e.preventDefault();

})


const leftBtn2 = document.querySelector(".btn-2b");
const rightBtn2 = document.querySelector(".btn-2a");

rightBtn2.addEventListener("click", function (e) {
    const conent = document.querySelector(".product-slide-2");
    conent.scrollLeft += 1100;
    e.preventDefault();

})

leftBtn2.addEventListener("click", function (e) {
    const conent = document.querySelector(".product-slide-2");
    conent.scrollLeft -= 1100;
    e.preventDefault();

})


const leftBtn3 = document.querySelector(".btn-3b");
const rightBtn3 = document.querySelector(".btn-3a");

rightBtn3.addEventListener("click", function (e) {
    const conent = document.querySelector(".product-slide-3");
    conent.scrollLeft += 1100;
    e.preventDefault();

})
leftBtn3.addEventListener("click", function (e) {
    const conent = document.querySelector(".product-slide-3");
    conent.scrollLeft -= 1100;
    e.preventDefault();

})


const sidebar = document.querySelector(".sidebar");
const cross = document.querySelector(".asd");
const black = document.querySelector(".black");
const sidebtn = document.querySelector(".second-1");
const All = document.querySelector("#all");

// sidebtn.addEventListener("click",function(){
//     sidebar.classList.add("active")
//     cross.classList.add("active")
//     black.classList.add("active")
//     document.body.classList.add("stop-scorll")
// })
cross.addEventListener("click", function () {

    sidebar.classList.toggle("active")
    // cross.classList.toggle("active")
    black.classList.remove("active")

    cross.classList.toggle("d-none")
    document.body.classList.add("stop-scorll")
})


const sign = document.querySelector(".ac");
const trl = document.querySelector(".triangle");
const signin = document.querySelector(".hdn-sign");

sign.addEventListener("click", function () {
    black.classList.toggle("active-1");
    signin.classList.toggle("active");
    trl.classList.toggle("active");
    document.body.classList.add("stop-scorll")
})


All.addEventListener("click", function () {
    black.classList.toggle("active")
    sidebar.classList.remove("active")
    cross.classList.toggle("d-none")
    document.body.classList.remove("stop-scorll")

})