
const form = document.querySelector("form")
const input = document.querySelector("input")
const error = document.querySelector(".error")

form.addEventListener("submit",(e)=>{
    e.preventDefault()
    let email = input.value.trim()
    if (email=="") {
        error.textContent= "Whoops it looks like you forget to add your email"
        return
        
    }
    const emailpattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailpattern.test(email)) {
        error.textContent = "Please enter a valid email address"
        return
        
    }
    error.textContent= ""
    input.value=""
})

input.addEventListener("input", ()=>{
    error.textContent =""

})

const button = document.querySelector(".hero button")

const earlyaccess = document.querySelector(".earlyaccess")

button.addEventListener("click",()=>{
    earlyaccess.scrollIntoView({
        behavior: "smooth"
    })
})