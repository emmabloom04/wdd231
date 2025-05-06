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
  const disclaimer = document.querySelector(".disclaimer a");
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

function setIntro(data) {
  const intro = document.querySelector(".intro");
  intro.innerHTML = `<h1>${data.fullName}</h1>
        <p>${data.description}</p>`;
}

function setInfo(data) {
  const info = document.querySelector(".info");
  function mediaCardTemplate(data) {
    return `<img src="${data.image}" alt="">
            <h2>${data.name}</h2>
            <p>${data.description}</p>`;
  }

  const parkInfoLinks = [
    {
      name: "Current Conditions &#x203A;",
      link: "conditions.html",
      image: data.images[2].url,
      description:
        "See what conditions to expect in the park before leaving on your trip!",
    },
    {
      name: "Fees and Passes &#x203A;",
      link: "fees.html",
      image: data.images[3].url,
      description: "Learn about the fees and passes that are available.",
    },
    {
      name: "Visitor Centers &#x203A;",
      link: "visitor_centers.html",
      image: data.images[9].url,
      description: "Learn about the visitor centers in the park.",
    },
  ];

  const infoHTML = parkInfoLinks
    .map((item) => mediaCardTemplate(item))
    .join("");
  info.innerHTML = infoHTML;
}

function getMailingAddress(addresses) {
  const mailing = addresses.find((address) => address.type === "Mailing");
  return mailing;
}

function getVoicePhone(phoneNumbers) {
    const voice = phoneNumbers.find((number) => number.type == "Voice");
    return voice;
}

function footerTemplate(info) {
  const mailing = getMailingAddress(info.addresses);
  const voice = getVoicePhone(info.contacts.phoneNumbers);

  return `<section class="contact">
        <h3>Contact Info</h3>
        <h4>Mailing Address:</h4>
        <div>
            <p>${mailing.line1}</p>
            <p>${mailing.city}, ${mailing.stateCode} ${mailing.postalCode}</p>
        </div>
        <h4>Phone:</h4>
        <p>${voice.phoneNumber}</p>
    </section>`;
}

function setFooter(data) {
    const footer = document.getElementById("park-footer");
    footer.innerHTML = footerTemplate(data);
}

setHeaderInfo(parkData);
setIntro(parkData);
setInfo(parkData);
setFooter(parkData);