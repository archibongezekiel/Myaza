const close_icon_button_android = document.querySelector(
  "#close_icon_button_android"
);
const download_containers = document.querySelector(".download_containers");
/////////////////////////////////////////////////////////////////////
function Checkbox() {
  var x = document.querySelector(".check_box_container");
  var z = document.querySelector("#check_icon");
  if (x.style.backgroundColor === "white") {
    x.style.backgroundColor = "#5645f5";
    z.style.display = "block";
  } else {
    x.style.backgroundColor = "white";
    z.style.display = "none";
  }
}
///////////////////////// Android///////////////////////
/////////////////////////////////////////////////////////////////////////////////
function checkBoxAndroid() {
  var x = document.querySelector(".check_box_container_android");
  var z = document.querySelector("#check_icon_android");
  if (x.style.backgroundColor === "white") {
    x.style.backgroundColor = "#5645f5";
    z.style.display = "block";
  } else {
    x.style.backgroundColor = "white";
    z.style.display = "none";
  }
}
///////////////////////////////////////////////////////////////////////////
close_icon_button_android.addEventListener("click", () => {
  download_containers.style.display = "none";
});
////////////////////////
