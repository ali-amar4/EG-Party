// ! HTML Elements
const openMenu = $(".open-nav")
const closeBtn = $(".closeBtn")
const homeContent = $(".home-content")
const singer = $(".toggle")
const textArea = $("textarea")
const countDownLetters = $("form span")
// ! Variables
let isOpen = false;
let counter = 100;
// ! Function
var x = setInterval(function () {
    const countDownDate = new Date("Feb 15, 2029 23:59:59").getTime();
    const now = new Date().getTime();
    const distance = countDownDate - now;
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    $(".days").text(days);
    $(".hours").text(hours);
    $(".minutes").text(minutes);
    $(".seconds").text(seconds);
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("countdown").innerHTML = "Finished";
    }
}, 1000);
// ! Events 
openMenu.on("click", function () {
    openMenu.prev().animate({ left: "0px" }, 500)
    openMenu.animate({ marginLeft: "260px" }, 500)
    isOpen = true;
    if (isOpen) {
        homeContent.animate({ marginLeft: "260px" }, 500)
    }
    else {
        homeContent.animate({ marginLeft: "0px" }, 500)
    }
})

closeBtn.on("click", function () {
    openMenu.prev().animate({ left: "-310px" }, 500)
    openMenu.animate({ marginLeft: "10px" }, 500)
    isOpen = false;
    if (isOpen) {
        homeContent.animate({ marginLeft: "260px" }, 500)
    }
    else {
        homeContent.animate({ marginLeft: "0px" }, 500)
    }
})

singer.on("click", function () {
    singer.next().slideUp(600);
    if ($(this).next().css("display") === "none") {
        $(this).next().slideDown(600);
    }
    else {
        $(this).next().slideUp(600);
    }

})

countDownLetters.html(`${counter}`);
textArea.on("input", function () {
    if (counter === 0) {
        countDownLetters.html("your available character finished");
        return;
    }
    let x = setTimeout(function () {
        counter--;
        countDownLetters.html(`${counter}`);
    })
})

