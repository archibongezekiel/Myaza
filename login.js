function copy() {
  // get the container
  const element = document.querySelector("#example1");
  // Create a fake `textarea` and set the contents to the text
  // you want to copy
  const storage = document.createElement("textarea");
  storage.value = element.innerHTML;
  element.appendChild(storage);

  // Copy the text in the fake `textarea` and remove the `textarea`
  storage.select();
  storage.setSelectionRange(0, 99999);
  document.execCommand("copy");
  element.removeChild(storage);
}
document.querySelector("#close_button").addEventListener("click", () => {
  document.querySelector("#footer").style.display = "none";
});
