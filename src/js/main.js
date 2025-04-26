import { getParkData } from "./parkService.mjs";

const parkData = getParkData();

function parkInfoTemplate(info) {
    return `<a href="/" class="hero-banner-title">${info.name}</a>
    <p class="hero-banner-subtitle"
    <span>${info.designation}</span>
    <span>${info.states}</span>
    </p>`;
}

const disclaimer = document.querySelector(".disclaimer a")
disclaimer.href = parkData.url;
disclaimer.innerHTML = parkData.fullName;

const pageTitle = document.querySelector("title");
pageTitle.innerText = parkData.name;

const heroBanner = document.querySelector(".hero-banner-content");
heroBanner.innerHTML = parkInfoTemplate(parkData);

const image = parkData.images[0];
const bannerImg = document.querySelector(".hero-banner img");
bannerImg.alt = image.altText;
bannerImg.src = image.url;