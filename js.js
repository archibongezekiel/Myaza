const androidButton = document.querySelector(".android_button");
const android_share = document.querySelector("#android_share");
const iphone_ipad_button = document.querySelector(".iphone_ipad");
const apple_share = document.querySelector("#apple_share");
const webApp = document.querySelector(".web_app");
const webAppButton = document.querySelector("#webApp_button");
const webSide = document.querySelector(".web_side");
const webSideButton = document.querySelector("#webSide_button");
const share = document.querySelector(".share");
const close_button = document.querySelector("#close_button");
let linkTree1 = document.querySelector(".link1");
const linkTree2 = document.querySelector(".link2");
const menu_button = document.querySelector("#menu_button");
const copy_link_button = document.querySelector(".copy_link_button");
const copied_text = document.querySelector("#copied_text");
//////////////////////////////////////////////////////////////////////
class pageLink {
  constructor(x) {
    this.x = x;
  }
  android() {
    this.x.style.display = "block";
  }
  android1() {
    this.x.style.display = "none";
  }
} ///////////////////////////////////////////////////
let android1 = new pageLink(android_share);
let android2 = new pageLink(android_share);

androidButton.addEventListener("mouseover", () => {
  android1.android();
  androidButton.addEventListener("mouseout", () => {
    android2.android1();
  });
});
///////////////////////////////////////////////////////
android_share.addEventListener("mouseenter", () => {
  android_share.style.backgroundColor = "rgba(209, 217, 224, 0.4)";
  android_share.addEventListener("mouseleave", () => {
    android_share.style.background = "none";
  });
}); //
function blur() {
  document.querySelector("#blur1").setAttribute("class", "blur1");
  document.querySelector("#blur2").setAttribute("class", "blur2");
  document.querySelector("#blur3").setAttribute("class", "blur3");
  document.querySelector("#blur4").setAttribute("class", "blur4");
  document.querySelector("#blur5");
}
function noBlur() {
  document.querySelector("#blur1").setAttribute("class", null);
  document.querySelector("#blur2").setAttribute("class", null);
  document.querySelector("#blur3").setAttribute("class", null);
  document.querySelector("#blur4").setAttribute("class", null);
}
let i = new pageLink(share);
let j = new pageLink(share);
menu_button.addEventListener("click", () => {
  i.android();
  blur();
  linkTree1.innerText = "linktr.ee/" + linkTree2.innerText + "myaza";
  close_button.addEventListener("click", () => {
    j.android1();
    noBlur();
  });
});
///////////////////////////////////////////////////////////////////////
let a = new pageLink(share);
let b = new pageLink(share);
android_share.addEventListener("click", () => {
  a.android();
  blur();
  linkTree1.innerText = "tr.ee/" + linkTree2.innerText + "Dne4r1gNEQ";
  close_button.addEventListener("click", () => {
    b.android1();
    noBlur();
  });
});
/////////////////////////////////////////////////////////////////////
let iphone1 = new pageLink(apple_share);
let iphone2 = new pageLink(apple_share);
iphone_ipad_button.addEventListener("mouseover", () => {
  iphone1.android();
  iphone_ipad_button.addEventListener("mouseout", () => {
    iphone2.android1();
  });
});
//////////////////////////////////////////////////////////////////////////
let c = new pageLink(share);
let d = new pageLink(share);
apple_share.addEventListener("click", () => {
  c.android();
  blur();
  linkTree1.innerText = "tr.ee/" + linkTree2.innerText + "B87kuh9D5J";
  close_button.addEventListener("click", () => {
    d.android1();
    noBlur();
  });
});
///////////////////////////////
apple_share.addEventListener("mouseenter", () => {
  apple_share.style.backgroundColor = "rgba(209, 217, 224, 0.4)";
  apple_share.addEventListener("mouseleave", () => {
    apple_share.style.background = "none";
  });
});
/////

////////////////////////////////////////////////////////////////
let webapp1 = new pageLink(webAppButton);
let webapp2 = new pageLink(webAppButton);
webApp.addEventListener("mouseover", () => {
  webapp1.android();
  webApp.addEventListener("mouseout", () => {
    webapp2.android1();
  });
});
/////
webAppButton.addEventListener("mouseenter", () => {
  webAppButton.style.backgroundColor = "rgba(209, 217, 224, 0.4)";
  webAppButton.addEventListener("mouseleave", () => {
    webAppButton.style.background = "none";
  });
});
//////
let e = new pageLink(share);
let f = new pageLink(share);
webAppButton.addEventListener("click", () => {
  blur();
  linkTree1.innerText = "tr.ee/" + linkTree2.innerText + "V6n8hfEDQp";
  e.android();
  close_button.addEventListener("click", () => {
    f.android1();
    noBlur();
  });
});
//////////////////////////////////////////////////////////////////
let webSide1 = new pageLink(webSideButton);
let webSide2 = new pageLink(webSideButton);
webSide.addEventListener("mouseover", () => {
  webSide1.android();
  webSide.addEventListener("mouseout", () => {
    webSide2.android1();
  });
});
/////
webSideButton.addEventListener("mouseenter", () => {
  webSideButton.style.backgroundColor = "rgba(209, 217, 224, 0.4)";
  webSideButton.addEventListener("mouseleave", () => {
    webSideButton.style.background = "none";
  });
});
let g = new pageLink(share);
let h = new pageLink(share);
webSideButton.addEventListener("click", () => {
  g.android();
  blur();
  linkTree1.innerText = "tr.ee/" + linkTree2.innerText + "GJu72wN556";
  close_button.addEventListener("click", () => {
    h.android1();
    noBlur();
  });
});

copy_link_button.addEventListener("click", () => {
  copy();
  copied_text.innerText = "Copied!";
  copied_text.style.color = "green";
  copied_text.style.fontSize = "17px";

  setTimeout(() => {
    copied_text.innerText = "Copy";
    copied_text.style.color = "black";
  }, 1000);
});
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
//
