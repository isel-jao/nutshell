"use strict";

// document.getElementById(id)				    Find an element by element id
// document.getElementsByTagName(name)		Find elements by tag name
// document.getElementsByClassName(name)	Find elements by class name
// document.querySelector()
// document.querySelectorAll()

////// parentNode ////// (read only)
// returns an element object representing parent element if present or else it will return null.

////// parentElement ////// (read only)
// returns an element object representing parent element if present or else it will return null.

////// children ////// (element)
// returns the child elements of an element as objects.
// firstElementChild = childNodes[0]
// lastElementChild = childNodes[-1]

////// childNodes ////// (nodes)
// return a Nodelist of child nodes. Nodelist items are objects
// firstChild = childNodes[0]
// lastChild = childNodes[-1]

const white_bg = "#d8d8d8";
const dark_bg = "#001a33";

const dark = 1;
const light = 0;
let mode_status = light;

let mode_id = document.getElementById("mode");
mode_id.style.position = "fixed";
mode_id.style.bottom = 0;
let highlight = document.getElementsByClassName("highlight");

function switch_mode() {
  if (mode_status == dark) {
    document.body.style.backgroundColor = white_bg;
    document.body.style.color = dark_bg;
    mode_id.style.backgroundColor = dark_bg;
    mode_id.innerHTML = "Dark Mode";
    mode_id.style.color = white_bg;

    mode_status = light;
  } else {
    document.body.style.backgroundColor = dark_bg;
    document.body.style.color = white_bg;
    mode_status = dark;
    mode_id.style.backgroundColor = white_bg;
    mode_id.innerHTML = "Light Mode";
    mode_id.style.color = dark_bg;
  }
}

function event() {
  console.log("text selected");
}

switch_mode();

mode_id.addEventListener("click", switch_mode);

let btn = document.querySelector("#backToTop");

btn.classList.add("hide");

window.addEventListener("scroll", function () {
  if (window.scrollY > 300) {
    btn.classList.remove("hide");
  } else {
    btn.classList.add("hide");
  }
});

btn.addEventListener("click", function () {
  window.scroll({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});

let div_count = 1;
let button_count = 1;
function create_div(innerText, cssText, el = document.body) {
  let div = document.createElement("div");
  div.id = "div" + div_count++;
  div.innerText = innerText;
  div.style.cssText += "position: relative;" + cssText;
  el.append(div);
  return div;
}

function create_button(innerText, cssText, el = document.body) {
  let button = document.createElement("button");
  button.id = "button" + button_count++;
  button.style.cssText += "position: absolute;" + cssText;
  button.innerText = innerText;
  el.append(button);
}

let nav = create_div(
  "",
  "width: 90%;   background-color: white;\
  margin: 40px auto; position: sticky; top:0px; transition: 400ms ease ; display:flex; flex-wrap: nowrap; justify-content: space-between;font-size: 1rem; color: black; text-transform: uppercase; align; align-items: center; padding: 20px 20px; box-sizing: border-box; font-weight: bolder"
);

let about = create_div("about", " ", nav);
let explore = create_div("explore", " ", nav);
let home = create_div("home", " ", nav);
let something = create_div("something", "  ", nav);
let contact = create_div("contact", "  ", nav);
let menu = create_div("menu", " ", nav);
menu.style.display = "none";

window.addEventListener("scroll", function () {
  if (window.scrollY > 40) {
    nav.style.width = "100%";
    nav.style.color = "#fff";

    nav.style.backgroundColor = "#000";
  } else {
    nav.style.color = "#000";
    nav.style.width = "80%";
    nav.style.backgroundColor = "#fff";
  }
});

let dim = create_div(
  "width = " + window.innerWidth + ",   hieght = " + window.innerHeight,
  "postion: absolute; top: 50vh"
);

function go() {
  showCircle(150, 150, 100, (div) => {
    div.classList.add("message-ball");
    div.append("Hello, world!");
  });
}

function showCircle(cx, cy, radius, callback) {
  let div = document.createElement("div");
  div.style.width = 0;
  div.style.height = 0;
  div.style.left = cx + "px";
  div.style.top = cy + "px";
  div.className = "circle";
  document.body.append(div);
  console.log("waza");

  setTimeout(() => {
    div.style.width = radius * 2 + "px";
    div.style.height = radius * 2 + "px";

    div.addEventListener("transitionend", function handler() {
      div.removeEventListener("transitionend", handler);
      callback(div);
    });
  }, 0);
}


