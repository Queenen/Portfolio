const phone = document.querySelector("#phone");
const mail = document.querySelector("#mail");

const modal = document.getElementById("myModal");
const info = document.querySelector(".modal-info");
const closeButton = document.querySelector(".close");

// Open the modal
function openNumber() {
  modal.style.display = "block";
  info.innerHTML = `
  <b>Mobile Number:</b> <p><b>+00 000 00 000</b></p>
  <p>I'm looking forward to hear from you! 📞</p>`;
}

function openMail() {
  modal.style.display = "block";
  info.innerHTML = `
    <b>Email:</b> <p><b>example@mail.com</b></p>
    <p>I'm looking forward to hear from you! 📧</p>`;
}

// Close the modal
function closeModal() {
  modal.style.display = "none";
}

closeButton.addEventListener("click", closeModal);
phone.addEventListener("click", openNumber);
mail.addEventListener("click", openMail);
