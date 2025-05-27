import { getInfoLinks, getParkData } from "./parkService.mjs";
import setHeaderFooter from "./setHeaderFooter.mjs";
import { mediaCardTemplate } from "./templates.mjs";

export function setParkIntro(data) {
  const intro = document.querySelector(".intro");
  intro.innerHTML = `<h1>${data.fullName}</h1>
        <p>${data.description}</p>`;
}

export function setParkInfoLinks(data) {
  const info = document.querySelector(".info");
  const html = data.map(mediaCardTemplate);
  info.insertAdjacentHTML("afterbegin", html.join(""));
}

async function init() {
  const parkData = await getParkData();
  const links = getInfoLinks(parkData.images);
  setHeaderFooter(parkData);
  setParkIntro(parkData);
  setParkInfoLinks(links);
}

init();
