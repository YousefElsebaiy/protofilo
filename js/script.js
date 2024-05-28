let home = document.getElementById("home")
let about = document.getElementById("about")
let btn = document.getElementById("btn")
let project = document.getElementById("project")
let contact_us = document.getElementById("contact-us")
let menu = document.querySelector(".menu")
let first = document.getElementById("first")
let center = document.getElementById("center")
let last = document.getElementById("last")
let links = document.querySelector(".links")
let skill = document.querySelector(".skill")
let spans = document.querySelectorAll(".progress span")
let prevScrollpos = window.pageYOffset
let form = document.querySelector("form")
let fullName = document.getElementById("name")
let phoneNumber = document.getElementById("phone")
let emailAddress = document.getElementById("email")
let subject = document.getElementById("subject")
let message2 = document.getElementById("message")

window.onscroll = function(){
    let currentScrollPos =  window.pageYOffset
    if(prevScrollpos >  currentScrollPos){
        document.getElementById("navBar").style.top = "25px"
    }
    else{
        document.getElementById("navBar").style.top = "-100px"
    }
    prevScrollpos = currentScrollPos
    if(window.scrollY >= skill.offsetTop - 250){
        spans.forEach((span) => {
            span.style.width = span.dataset.width
        })
    } 
}
home.addEventListener('click', function () {
    window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth',
    })
})
about.addEventListener('click', function () {
    window.scroll({
        top: 660,
        left: 0,
        behavior: 'smooth',
    })
})
btn.onclick = function(){
    window.scroll({
        top: 660,
        left: 0,
        behavior: "smooth",
    })
}
project.addEventListener('click', function () {
    window.scroll({
        top: 1300,
        left: 0,
        behavior: 'smooth',
    })
})
contact_us.addEventListener('click', function () {
    window.scroll({
        top: 2000,
        left: 0,
        behavior: 'smooth',
    })
})
menu.addEventListener('click', function () {
    first.classList.toggle("first")
    center.classList.toggle("center")
    last.classList.toggle("last")
    links.classList.toggle("i")
})
function sendEmail(){
    let bodyMessage = `Full Name: ${fullName.value}<br> Email: ${emailAddress.value}<br> Phone Number: ${phoneNumber.value}<br> Message: ${message2.value}`
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "developerfrontend739@gmail.com",
        Password : "167493B810CBBA4824F7C58EDD4DEF42E9F2",
        To : 'developerfrontend739@gmail.com',
        From : "developerfrontend739@gmail.com",
        Subject : subject.value,
        Body : bodyMessage,
    }).then(
        message => {
            if(message == "OK"){
                Swal.fire({
                    title: "Success!",
                    text: "Message sent successfully!",
                    icon: "success"
                });
            }
        }
    );
}
function checkInputs(){
    let items = document.querySelectorAll(".item")
    for(let item of items){
        if(item.value == ""){
            item.classList.add("error")
            item.parentElement.classList.add("error")
        }
        if(items[1].value != ""){
            checkEmail()
        }
        items[1].addEventListener("keyup", () => {
            checkEmail()
        })
        item.addEventListener("keyup", () => {
            if(item.value != ""){
                item.classList.remove("error")
                item.parentElement.classList.remove("error")
            }
            else{
                item.classList.add("error")
                item.parentElement.classList.add("error")
            }
        })
    }
}
function checkEmail(){
    let emailRegex = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,3})(\.[a-z]{2.3})?$/
    if(!emailAddress.value.match(emailRegex)){
        emailAddress.classList.add("error")
        emailAddress.parentElement.classList.add("error")
    }
    else{
        emailAddress.classList.remove("error")
        emailAddress.parentElement.classList.remove("error")
    }
}
form.addEventListener("submit", (e) => {
    e.preventDefault()
    checkInputs()
    if(!fullName.classList.contains("error") && !emailAddress.classList.contains("error") && !phoneNumber.classList.contains("error") && !subject.classList.contains("error") && !message2.classList.contains("error")){
        sendEmail()
        form.reset()
        return 0
    }
})