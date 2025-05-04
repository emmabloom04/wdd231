import { getParkData } from "./parkService.mjs";

// this function is from the parkService.mjs
const parkData = getParkData();

function parkInfoTemplate(info) {
    return `<a href="/" class="hero-banner__title">${info.name}</a>
    <p class="hero-banner__subtitle">
    <span>${info.designation}</span>
    <span>${info.states}</span>
    </p>`;
}


function setHeaderInfo(data) {
    const disclaimer = document.querySelector(".disclaimer a")
    disclaimer.href = data.url;
    disclaimer.innerHTML = data.fullName;

    const pageTitle = document.querySelector("title");
    pageTitle.innerText = data.name;

    const heroBanner = document.querySelector(".hero-banner__content");
    heroBanner.innerHTML = parkInfoTemplate(data);

    const image = data.images[0];
    const bannerImg = document.querySelector(".hero-banner img");
    bannerImg.alt = image.altText;
    bannerImg.src = image.url;
}

const intro = document.querySelector(".intro");
intro.innerHTML = `<h1>${parkData.fullName}</h1>
    <p>${parkData.description}</p>`
const info = document.querySelector(".info");

function mediaCardTemplate(info) {
    return `<img src="" alt=""><img/>
        <h2></h2>
        <p></p>`
}

setHeaderInfo(parkData);