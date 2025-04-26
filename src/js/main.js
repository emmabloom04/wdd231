import { getParkData } from "./parkService.mjs";

const parkData = getParkData();

const disclaimer = document.querySelector(".disclaimer > a")
disclaimer.href = parkData.url;
disclaimer.innerHtml = parkData.fullName;

function parkInfoTemplate(info) {
    return `<a href="/" class="hero-banner-title">${info.name}</a>
    <p class="hero-banner-subtitle"
    <span>${info.destination}</span>
    <span>${info.states}</span>
    </p>`;
}