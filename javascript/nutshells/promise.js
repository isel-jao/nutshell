"use strict";

///////////////////////////////////////////////
///////////////// Promise API /////////////////
///////////////////////////////////////////////

///////////////// Promise.all /////////////////

// takes an iterable obj of promises and returns a new promise.
// and the array of their resolves becomes its resolve.
// the order of the resulting array members is the same
// Promise.all([
// 	new Promise((resolve) => setTimeout(() => resolve("yqodsi"), 1000)), // 1
// 	new Promise((resolve) => setTimeout(() => resolve("isel-jao"), 2000)), // 2
// 	new Promise((resolve) => setTimeout(() => resolve(3), 500)), // 3
// ]).then(console.log);

///////////////////////////////////////////////
///////////////////// LOL /////////////////////
///////////////////////////////////////////////
// show github profile and disapre after a while
function get_avater(user_name) {
  fetch(`https://api.github.com/users/${user_name}`)
    .then((response) => response.json())
    .then((githubUser) => {
      let img = document.createElement("img");
      img.src = githubUser.avatar_url;
      img.style.cssText =
        "position:fixed" + "top: 0;" + " left : 0;" + "border-radius: 50%;";
      document.body.append(img);
      // setTimeout(() => img.remove(), 5000);
    });
}

async function getAvatar(user_name) {
  try {
    let result = await fetch(`https://api.github.com/users/${user_name}`);
    let github_user = await result.json();
    let img = document.createElement("img");
    img.src = github_user.avatar_url;
    document.body.append(img);
  } catch (err) {
    console.log("my_err");
  }
}

function loadJson(url) {
  return fetch(url).then((response) => {
    if (response.status == 200) {
      return response.json();
    } else {
      throw new Error(response.status);
    }
  });
}

async function load_Json(url) {
  try {
    let response = await fetch(url);
    if (response.status == 200) return await response.json();
    else throw new Error(response.status);
  } catch (err) {
    console.log(err);
  }
}

async function ogioh() {
  let arr = await load_Json("https://db.ygoprodeck.com/api/v7/cardinfo.php");
  arr = arr.data;
  arr = arr.map((v) => [v.id, v]);
  arr = new Map(arr);
  console.log(arr.get(56907389));
  let obj = arr.get(56907389);
  let img_url = obj.card_images[0].image_url;
  let img = document.createElement("img");
  img.src = img_url;
  img.style.cssText = "position:fixed" + "top: 0;" + " left : 0;" + "width: 200px";
  document.body.append(img);
}
ogioh();
