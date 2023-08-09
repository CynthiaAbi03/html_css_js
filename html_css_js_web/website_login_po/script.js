const wrapper = document.querySelector(".wrapper");
const LoginLink = document.querySelector(".Login-Link");
const SignUpLink = document.querySelector(".SignUp-Link");
const newchatbtn = document.querySelector(".newChat");
const cancelBtn = document.querySelector(".btn2");
const popUp = document.getElementById("pop-up");
const startChat = document.getElementById("start-chat");

newchatbtn.addEventListener("click", () => {
  popUp.style.visibility = "visible";
  startChat.style.visibility = "hidden";
  
});

cancelBtn.addEventListener("click", () => {
  popUp.style.visibility = "hidden";
  startChat.style.visibility = "visible";
});

SignUpLink.addEventListener("click", () => {
  wrapper.classList.add("active");
});

LoginLink.addEventListener("click", () => {
  wrapper.classList.remove("active");
});

function myFunction() {
  window.location.href = "chat.html";
}

