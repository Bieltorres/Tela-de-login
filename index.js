function switchBtn() {
  document.body.classList.toggle("is-light");
  document.body.classList.toggle("is-dark");
}

document.getElementById("switchBtn").addEventListener("click", switchBtn);

document.getElementById("btn-login").addEventListener("click", function (ev) {
  ev.preventDefault();
});

document.getElementById("switchBtn").addEventListener("click", function (ev) {
  ev.preventDefault();
});
