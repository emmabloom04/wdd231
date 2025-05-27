import { parkInfoTemplate, footerTemplate } from "./templates.mjs";

function setHeaderInfo(data) {
  const disclaimer = document.querySelector(".disclaimer a");
  disclaimer.href = data.url;
  disclaimer.innerHTML = data.fullName;

  document.querySelector("title").innerHTML = data.name;

  document.querySelector(".hero-banner__content").innerHTML =
    parkInfoTemplate(data);

  document.querySelector(".hero-banner img").alt = data.images[0].altText;
  document.querySelector(".hero-banner img").src = data.images[0].url;
}

function setFooter(data) {
  const footer = document.getElementById("park-footer");
  footer.innerHTML = footerTemplate(data);
}

export default function setHeaderFooter(parkData) {
  setHeaderInfo(parkData);
  setFooter(parkData);
}
