function switchBtn() {
  document.body.classList.toggle("is-light");
  document.body.classList.toggle("is-dark");
}

document.getElementById("switchBtn").addEventListener("click", switchBtn);
