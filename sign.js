const close_icon_button_android = document.querySelector(
  "#close_icon_button_android"
);
const download_containers = document.querySelector(".download_containers");
const xAndroid = document.querySelector(".check_box_container_android");

const x = document.querySelector(".check_box_container");
const z = document.querySelector("#check_icon");
const zAndroid = document.querySelector("#check_icon_android");
/////////////////////////////////////////////////////////////////////
x.addEventListener("click", () => {
  Checkbox();
});
function Checkbox() {
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
xAndroid.addEventListener("click", () => {
  checkBoxAndroid();
});
//////////////////////////////////////////////
function checkBoxAndroid() {
  if (xAndroid.style.backgroundColor === "white") {
    xAndroid.style.backgroundColor = "#5645f5";
    zAndroid.style.display = "block";
  } else {
    xAndroid.style.backgroundColor = "white";
    zAndroid.style.display = "none";
  }
}

///////////////////////////////////////////////////////////////////////////
close_icon_button_android.addEventListener("click", () => {
  download_containers.style.display = "none";
});

////////////////////////
