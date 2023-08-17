const email_input_android = document.querySelector("#password_input");
const close_button_android = document.querySelector("#close_button");
const footer_android = document.querySelector("#footer");
const show_password_android = document.querySelector("#show_password_android"); //

////////////////////////////////////////////////

show_password_android.addEventListener("click", () => {
  if (email_input_android.type === "password") {
    email_input_android.type = "text";
    show_password_android.innerText = "Hide";
  } else {
    email_input_android.type = "password";
    show_password_android.innerText = "Show";
  }
});
close_button.addEventListener("click", () => {
  footer.style.display = "none";
});
