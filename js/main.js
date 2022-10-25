$(".toggle .open").click(function () {
    let widthBox = $(".sideBar .list").outerWidth()
    console.log(widthBox)
    if ($('.sideBar').css("left") == "0px") {
        $('.sideBar').animate({ left: `-${widthBox}` }, 1000)
    } else {
        $('.sideBar').animate({ left: "0px" }, 1000)
    }
})

$(".fa-xmark").click(function () {
    let widthBox = $(".sideBar .list").outerWidth()
    if ($('.sideBar').css("left") == "0px") {
        $('.sideBar').animate({ left: `-${widthBox}` }, 1000)
    }
})

let gear = document.getElementById("gear")
let colors = document.getElementById("colors")
gear.addEventListener("click", function () {
    colors.classList.toggle("hide")
})

let changeColors = $(".choose .box span")
changeColors.eq(0).css("backgroundColor", "#09c")
changeColors.eq(1).css("backgroundColor", "#f9004d")
changeColors.eq(2).css("backgroundColor", "red")
changeColors.eq(3).css("backgroundColor", "#012f01")
changeColors.eq(4).css("backgroundColor", "#5b4d01")

changeColors.click(function (e) {
    let newColor = $(e.target).css("backgroundColor")
    $(".replace-color-bg").css({ "backgroundColor": newColor, "opacity": ".3" })
    $(".replace-bg").css({ "backgroundColor": newColor })
    $(".replace-color").css("color", newColor)
    $(".replace-color-border").css("borderColor", newColor)
    $(".replace-color-outline-bg").css({ "backgroundColor": newColor, "color": "#fff" })

    $(e.target).css("border", "#ccc solid 1px")
    $(e.target).siblings().css("border", "none")
})
// section 2

$(".details h3").click(function () {
    $(".details p").slideUp(2000)
    $(this).next(".details p").slideDown(2000)
})

// section 3

$(".plan .btns .btn").click(function () {
    $(this).addClass("button-active").siblings().removeClass("button-active")
    let filter = $(this).attr("data-filter")
    if (filter == "all") {
        $(".plan .col-md-4").show(400)
    } else {
        $(".plan .col-md-4").not(`.${filter}`).hide(200)
        $(".plan .col-md-4").filter(`.${filter}`).show(400)
    }
})

// section 4

let countDown = new Date("Dec 30, 2022 23:59:59").getTime()

let counter = setInterval(() => {
    let now = new Date().getTime()
    let diffTime = countDown - now

    let days = Math.floor(diffTime / (1000 * 60 * 60 * 24))
    let hours = Math.floor(diffTime % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
    let minutes = Math.floor(diffTime % (1000 * 60 * 60) / (1000 * 60))
    let seconds = Math.floor(diffTime % (1000 * 60) / (1000))

    $(".duration .days").html(days)
    $(".duration .hours").html(hours)
    $(".duration .minutes").html(minutes)
    $(".duration .seconds").html(seconds)
}, 1000)

// section five

let counterInput = 100
$("textarea").keyup(function () {
    let charInput = $(this).val().length
    let diffChar = counterInput - charInput

    if (diffChar <= 0) {
        $(".change").css("color", "red").html("your available character finished")
    } else {
        $(".change").css("color", "black").html(diffChar)
    }
})

// sidebar color

let detailSection = $("#details").offset().top
$(window).scroll(function () {
    let windowScroll = $(window).scrollTop()
    if (windowScroll > detailSection - 380) {
        $("#open").css("color", "black")
    } else {
        $("#open").css("color", "#fff")
    }
})
console.log(detailSection)