import spritePath from "../images/sprite.symbol.svg";

export function parkInfoTemplate(info) {
  return `<a href="/" class="hero-banner__title">${info.name}</a>
      <p class="hero-banner__subtitle">
      <span>${info.designation}</span>
      <span>${info.states}</span>
      </p>`;
}

export function mediaCardTemplate(data) {
  return `<div class="media-card">
            <a href=${data.link}>
            <img src="${data.image}" alt="${data.name}" class="media-card__img">
            <h3 class="media-card__title">${data.name}</h3>
            </a>
            <p>${data.description}</p>
            </div>`;
}

function getMailingAddress(addresses) {
  const mailing = addresses.find((address) => address.type === "Mailing");
  return mailing;
}

function getVoicePhone(phoneNumbers) {
  const voice = phoneNumbers.find((number) => number.type == "Voice");
  return voice;
}

export function footerTemplate(info) {
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

export function alertTemplate(alert) {
    let alertType = "";
    switch (alert.category) {
        case "Park Closure":
            alertType = "closure";
            break;
        default:
            alertType = alert.category.toLowerCase();
    }
    return `<li class="alert">
    <svg class="icon" focusable="false" aria-hidden="true">
        <use xlink:href="${spritePath}#alert-${alertType}"></use>
    </svg>
    <div>
        <h3 class="alert-${alertType}">${alert.title}</h3>
        <p>${alert.description}</p>
    </div></li>`;
}

export function visitorCenterTemplate(center) {
    return `<li class="visitor-center">
    <h4>${center.name}</h4>
    <p>${center.description}</p>
    <p>${center.directionsInfo}</p>
    </li>`
}

export function activityListTemplate(activities) {
    return activities.map((activity) => `<li>${activity.name}</li>`).join("");
}