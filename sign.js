const close_icon_button_android = document.querySelector(
  "#close_icon_button_android"
);
const download_containers = document.querySelector(".download_containers");
///////////////////////////////////////////////////////////////////////////
close_icon_button_android.addEventListener("click", () => {
  download_containers.style.display = "none";
});
