const phoneModal = document.getElementById("phoneModal");
const mailModal = document.getElementById("mailModal");
const phoneIcon = document.getElementById("phone");
const mailIcon = document.getElementById("mail");
const closeButtons = document.getElementsByClassName("close");

phoneIcon.addEventListener("click", function () {
  phoneModal.style.display = "block";
});

mailIcon.addEventListener("click", function () {
  mailModal.style.display = "block";
});

Array.from(closeButtons).forEach(function (button) {
  button.addEventListener("click", function () {
    phoneModal.style.display = "none";
    mailModal.style.display = "none";
  });
});

window.addEventListener("click", function (event) {
  if (event.target == phoneModal || event.target == mailModal) {
    phoneModal.style.display = "none";
    mailModal.style.display = "none";
  }
});
