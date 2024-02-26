const form = document.querySelector("form")
const email = document.querySelector(`input[name="email"]`)
const message = document.querySelector(`textarea[name="message"]`)
const btn = document.querySelector("button")
console.log( form, email, message, btn)
const STORAGE_KEY = "feedback-form-state"

function inputHandler(){
  const savedObj = {
    email : email.value ,
    message: form.elements.message.value
  }
localStorage.setItem(STORAGE_KEY, JSON.stringify(savedObj))
}
localStorage.getItem(STORAGE_KEY)

function submitHandler(e){
  e.preventDefault();
  console.log(localStorage.getItem(STORAGE_KEY))
  localStorage.removeItem(STORAGE_KEY)
  form.reset();
}


const load = key => {
  const serializedState = localStorage.getItem(key)
  return serializedState === null ? undefined : JSON.parse(serializedState)
}

const userData = load(STORAGE_KEY)
if(userData){
  email.value = userData.email
  message.value = userData.message
}

form.addEventListener("input", inputHandler)
form.addEventListener("submit", submitHandler)