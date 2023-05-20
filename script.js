$(document).ready(function () {

    $(window).on('load', function () {
        $('.preloader').addClass('complete')
    });

    $(".date").html(currentTime)

    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });


})

const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}


let today = new Date();
let date = today.getDate()
const monthName = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let month = monthName[today.getMonth()]
let year = today.getFullYear()
let hours = today.getHours()
let minutes = today.getMinutes()
let currentTime = `${date} ${month} ${year}  ${hours}:${minutes}`
console.log(currentTime)