import { getParkData, parkInfoLinks } from "./parkService.mjs";
import setHeaderFooter from "./setHeaderFooter.mjs";
import { mediaCardTemplate } from "./templates.mjs";

function setParkIntro(data) {
  const intro = document.querySelector(".intro");
  intro.innerHTML = `<h1>${data.fullName}</h1>
        <p>${data.description}</p>`;
}

function setParkInfoLinks(data) {
  const info = document.querySelector(".info");
  const html = data.map(mediaCardTemplate);
  info.insertAdjacentHTML("afterbegin", html.join(""));
}


async function init() {
  const parkData = await getParkData();

  setHeaderFooter(parkData);
  setParkIntro(parkData);
  setParkInfoLinks(parkInfoLinks);
}

init();